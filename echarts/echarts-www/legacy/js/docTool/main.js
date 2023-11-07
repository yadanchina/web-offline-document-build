/**
 * API doc.
 */
define(function (require) {

    /**
     * The optimization of option doc loading (2018-03):
     *
     * The facts:
     * (1) The case of a single `option.json` (700KB, after gz)
     * From local netword:
     *      Download: 100ms
     *      JSON parse: 200ms
     *      JS rendering: 2s
     * From gf-page:
     *      Download: 1.5s~5s
     * (2) The search feature requires all of the `option.json`.
     *
     * Sulotion:
     * Now that the main info is in `description`, and consider the
     * simplicity of the implementation, only optimize the rendering.
     *
     * Further job if necessary:
     * Partition `option.json` to by components or `option_outline.json`
     * and `option_description.json`. Download `option_description.json`
     * after page rendered (it will block the search, but not block the
     * option tree behavior).
     */

    var $ = require('jquery');
    var Component = require('dt/ui/Component');
    var schemaHelper = require('./schemaHelper');
    var dtLib = require('dt/lib');
    var tpl = require('dt/tpl');
    var docUtil = require('./docUtil');
    var lang = require('./lang');
    var hashHelper = require('./hashHelper');
    var perfectScrollbar = require('perfectScrollbar');
    var prettyPrint = require('prettyPrint');
    // var iconfont = docUtil.getGlobalArg('iconfont');
    var pageName = docUtil.getGlobalArg('pageName');
    var schemaName = docUtil.getGlobalArg('schemaName') || pageName;

    require('dt/componentConfig');

    var TPL_TARGET = 'APIMain';
    var SELECTOR_HOVER_DESC = '.ecdoc-api-hover-desc';
    var SELECTOR_COLLAPSE_RADIO = '.query-collapse-radio input[type=radio]';
    var SELECTOR_QUERY_RESULT_INFO = '.query-result-info';
    var SELECTOR_DESC_GROUP_CONTENT = '.ecdoc-api-doc-group-content';
    var SELECTOR_TREE_AREA = '.ecdoc-api-tree-area';
    var SELECTOR_DESC_AREA = '.ecdoc-api-doc-group-area';
    var SELECTOR_QUICK_LINK = '.ecdoc-quick-link';
    var CSS_DESC_EXPAND_BTN = 'ecdoc-api-doc-prop-expand';
    var CSS_DESC_LINE_HEAD = 'ecdoc-api-doc-line-head';
    var CSS_DESC_GROUP_HIGHLIGHT = 'ecdoc-api-doc-group-line-highlight';
    var CSS_DESC_SUB_GROUP = 'ecdoc-api-doc-sub-group';
    // var ICON_CAN_COLLAPSE = iconfont.down;
    // var ICON_CAN_EXPAND = iconfont.left;
    var ICON_CAN_COLLAPSE = lang.hideProperties;
    var ICON_CAN_EXPAND = lang.showProperties;
    var CSS_DESC_NODE = 'ecdoc-api-doc-group-line';
    var IFR_REG = /<iframe[^>]*>.*?<\/iframe>/g;

    var isInit = true;

    /**
     * @public
     * @type {Object}
     */
    var api = {};

    /**
     * @type {Object}
     */
    var apiMai;

    /**
     * @public
     */
    api.init = function () {
        apiMai = new APIMain($('.ecdoc-apidoc'));
    };

    /**
     * @class
     * @extends dt/ui/Component
     */
    var APIMain = Component.extend({ // jshint ignore: line

        _define: {
            tpl: require('tpl!./main.tpl.html'),
            css: 'ecdoc-apidoc',
            viewModel: function () {
                return {
                    apiTreeDatasource: [],
                    apiTreeSelected: dtLib.ob(),
                    apiTreeHighlighted: dtLib.obArray(),
                    apiTreeHovered: dtLib.ob(),
                    apiTreeResize: dtLib.ob()
                };
            }
        },

        getLang: function () {
            return lang;
        },

        _initHash: function () {
            var that = this;
            hashHelper.initHash(parseHash);

            function parseHash(newHash) {
                if (isInit) {
                    log({key: 'initHash', data: newHash});
                }

                if (!newHash) {
                    newHash = docUtil.getGlobalArg('initHash', '');
                }
                newHash && that._handleHashQuery(newHash);

                isInit = false;
            }
        },

        _initScroll: function () {
            var $el = this.$el();
            var opt = {};
            var $descArea = $el.find(SELECTOR_DESC_AREA);
            perfectScrollbar.initialize($el.find(SELECTOR_TREE_AREA)[0], opt);
            perfectScrollbar.initialize($descArea[0], opt);

            var self = this;
            $descArea.on('ps-scroll-y', function (e) {
                self._doLazyLoad();
            });
        },

        _prepare: function () {

            var startTime = Date.now();

            $.getJSON(
                docUtil.addVersionArg([
                    './documents',
                    schemaName + '.json'
                ].join('/'))
            ).done($.proxy(function (schema) {

                var endTime = Date.now();
                var duration = Math.round((endTime - startTime) / 1000);
                _hmt.push(['_setCustomVar', 1, 'optionLoadTime', duration, 3]);

                // Before render page
                this._prepareDoc(schema);
                // Render page
                this._applyTpl(this.$el(), TPL_TARGET);

                // After render page
                this._initQuickLink();

                this._initTree();

                this._initQueryBox();

                this._initDescArea();

                this._initHash();

                this._initScroll();

            }, this));
        },

        _prepareDoc: function (schema) {
            var renderBase = {};

            schemaHelper.buildDoc(schema, renderBase);

            var docTree = this._docTree = {
                value: 'root',
                text: docUtil.getGlobalArg('docTreeRootText', ''),
                childrenPre: docUtil.getGlobalArg('docTreeChildrenPre', '{'),
                childrenPost: docUtil.getGlobalArg('docTreeChildrenPost', '}'),
                childrenBrief: '...',
                children: renderBase.children[0].children,
                expanded: true,
                propertyName: 'option',
                type: 'Object',
                hasObjectProperties: true
            };

            this._viewModel().apiTreeDatasource = docUtil.getGlobalArg('hideTreeRoot')
                ? docTree.children : [docTree];
        },

        _initQuickLink: function () {
            var defs = [
                ['tutorial', lang.quickLinkTutorial],
                ['api', lang.quickLinkAPI],
                ['option', lang.quickLinkOption]
            ];
            if (lang.langCode === 'zh') {
                defs.push(['option-gl', lang.quickLinkOptionGL]);
            }

            var html = [];

            for (var i = 0; i < defs.length; i++) {
                html.push(
                    pageName === defs[i][0]
                        ? '<span>' + defs[i][1] + '</span>'
                        : '<a href="' + defs[i][0] + '.html">' + defs[i][1] + '</a>'
                );
            }

            this.$el().find(SELECTOR_QUICK_LINK)[0].innerHTML = html.join('');
        },

        _initTree: function () {
            var viewModel = this._viewModel();
            this._disposable(viewModel.apiTreeHovered.subscribe(
                $.proxy(handleHover, this, false)
            ));
            this._disposable(viewModel.apiTreeSelected.subscribe(
                $.proxy(handleSelected, this, true)
            ));
            this._disposable(viewModel.apiTreeResize.subscribe(
                $.proxy(handleTreeResize, this, true)
            ));

            function handleHover(persistent, nextValue, ob) {
                var treeItem = ob.getTreeDataItem(true);
                this._showHoverTargetDesc(treeItem ? treeItem : false);
            }

            function handleSelected(persistent, nextValue, ob) {
                var treeItem = ob.getTreeDataItem(true);
                var $el = this.$el();

                if (persistent && treeItem) {
                    this._updateDescArea(treeItem);

                    if (!isInit) {
                        log({key: 'clickTreeItem', data: schemaHelper.getOptionPathForHash(treeItem)});
                    }

                    locateToDescAnchor.call(this, treeItem);

                    // Highlight.
                    $el.find('.' + CSS_DESC_GROUP_HIGHLIGHT).removeClass(CSS_DESC_GROUP_HIGHLIGHT);
                    this._findDescNode(treeItem.value).addClass(CSS_DESC_GROUP_HIGHLIGHT);

                    hashHelper.hashRoute({
                        queryString: schemaHelper.getOptionPathForHash(treeItem)
                    });
                }
            }

            function locateToDescAnchor(treeItem) {
                var $el = this.$el();
                // Location to anchor in desc.
                var $descArea = $el.find(SELECTOR_DESC_AREA);
                var $descNode = this._findDescNode(treeItem.value);
                var $con = this.$el().find(SELECTOR_DESC_GROUP_CONTENT);

                var nextTop = $descNode.length
                    ? $descNode.offset().top - $con.offset().top
                    : 0;
                // 10 is offset for good looking.
                $descArea.animate({scrollTop: nextTop - 10}, 300).promise().always(function () {
                    perfectScrollbar.update($descArea[0]);
                });
            }

            function handleTreeResize(persistent, nextValue, ob) {
                perfectScrollbar.update(this.$el().find(SELECTOR_TREE_AREA)[0]);
            }
        },

        _initQueryBox: function () {
            var queryInput = this._sub('queryInput');
            var queryMode = this._sub('queryMode');
            var queryValueOb = queryInput.viewModel('value');
            queryValueOb.subscribe($.proxy(queryBoxGo, this, false));
            var checked = queryMode.viewModel('checked');

            checked.subscribe(onModeChanged, this);
            onModeChanged.call(this, checked());

            this._sub('collapseAll').on('click', $.proxy(collapseAll, this));

            $(document).keypress(function (e) {
                var tagName = (e.target.tagName || '').toLowerCase();
                if (e.which === 47 && tagName !== 'input' && tagName !== 'textarea') { // "/"键
                    queryInput.focus();
                    queryInput.select();
                    e.preventDefault();
                }
            });

            var me = this;

            queryInput.$el().find('input').autoComplete({
                minChars: 1,
                source: function(queryStr, suggest){
                    var result = queryStr ? me._doQuery(queryStr, checked()) : [];

                    var list = [];
                    for (var i = 0; i < result.length; i++) {
                        list.push(schemaHelper.getOptionPathForHash(result[i]));
                    }

                    suggest(list);
                },
                onSelect: function (e, queryStr) {
                    hashHelper.hashRoute({queryString: queryStr});
                }
            });

            function onModeChanged(nextValue) {
                log({key: 'changeSearchMode', data: nextValue});

                var dataItem = queryMode.getDataItem(nextValue);
                queryInput.viewModel('placeholder')(dataItem.placeholder);
                queryBoxGo.call(this, true);
            }

            function queryBoxGo(fromChangeMode, con, c) {
                var queryStr = queryValueOb();
                var valueInfo = queryValueOb.peekValueInfo();

                if (!valueInfo) {
                    return;
                }
                // Confirm
                if (valueInfo.type === dtLib.valueInfo.CONFIRMED) {
                    if (!fromChangeMode) {
                        log({key: 'search', data: queryStr, queryMode: checked()});
                    }

                    if (queryStr) {
                        this._confirmQuery(queryStr, checked(), false, true);
                    }
                }
            }

            function collapseAll() {
                log({key: 'collapseAll'});
                this._setResultInfo(null);
                this._viewModel().apiTreeHighlighted([], {collapseLevel: 1});
            }
        },

        _initDescArea: function () {

            this.$el().find(SELECTOR_DESC_GROUP_CONTENT).on(
                'click', '.' + CSS_DESC_EXPAND_BTN,
                $.proxy(handleDescExpandClick, this)
            );

            this.$el().find(SELECTOR_DESC_GROUP_CONTENT).on(
                'click', '.' + CSS_DESC_LINE_HEAD,
                $.proxy(handleDescExpandClick, this)
            );

            var slideFinal = $.proxy(function () {
                perfectScrollbar.update(this.$el().find(SELECTOR_DESC_AREA)[0]);
            }, this);

            function handleDescExpandClick(e) {
                var treeItemId = e.currentTarget.getAttribute('data-tree-item-id');

                var $descNode = this._findDescNode(treeItemId);
                var elsInNode = this._findElInDescNode($descNode);

                if (!elsInNode.subGroup.length) {
                    return;
                }

                // Just for log.
                var treeItem = this._sub('apiDocTree').findDataItemByValues(
                    [elsInNode.expandBtn.attr('data-tree-item-id')], true
                );
                var optionPathForHash = treeItem ? schemaHelper.getOptionPathForHash(treeItem) : '';

                if (elsInNode.subGroup[0].style.display === 'none') {
                    log({key: 'expandDesc', data: optionPathForHash});

                    elsInNode.expandBtn[0].innerHTML = '<span>' + ICON_CAN_COLLAPSE + '</span>';

                    this._completeSubGroupContent(elsInNode.subGroup);

                    elsInNode.subGroup.slideDown().promise().always(slideFinal);
                }
                else {
                    log({key: 'collapseDesc', data: optionPathForHash});

                    elsInNode.expandBtn[0].innerHTML = '<span>' + ICON_CAN_EXPAND + '</span>';
                    elsInNode.subGroup.slideUp().promise().always(slideFinal);
                }
            }
        },

        _updateDescArea: function (treeItem) {
            var $el = this.$el();
            var $content = $el.find(SELECTOR_DESC_GROUP_CONTENT);
            var $area = $el.find(SELECTOR_DESC_AREA);

            var treeItemTrace = this._getTraceToComponentRoot(treeItem);
            var base = treeItemTrace[0];
            var html = '';

            if (base !== this._lastDescBase) {
                // Reset pendingSubGroupMap.
                this._pendingSubGroupMap = dtLib.createLiteHashMap();
                html = this._createDescHTML(base, treeItem);
                $content[0].innerHTML = html;
            }

            this._lastDescBase = base;

            this._doExpand(treeItemTrace, $content, treeItem);

            // Prettify
            $content.find('pre code').each(function (index, el) {
                $(el).addClass('prettyprint');
            });
            prettyPrint();

            // Update perfect scrollbar
            perfectScrollbar.update($el.find(SELECTOR_DESC_AREA)[0]);

            // Lazyload
            // TODO
            var $iframes = $area.find('iframe');
            function lazyload() {
                $iframes.filter(function () {
                    var $this = $(this);
                    if ($this.attr('src')) {
                        return false;
                    }
                    var top = $this.offset().top;
                    var viewHeight = $area.height();
                    var viewTop = $area.offset().top;
                    return top < (viewHeight + viewTop) && top > viewTop;
                }).each(function () {
                    $(this).attr('src', $(this).data('src'));
                });
            }
            lazyload();
            this._doLazyLoad = lazyload;

            // Twentytwenty
            this._initTwentyTwenty($content);
        },

        _initTwentyTwenty: function ($content) {
            if ($.fn.twentytwenty && !$content.find('.twentytwenty-wrapper').length) {
                $content.find('.twentytwenty-container').each(function () {
                    var self = this;
                    var loading = 0;
                    console.log($(this).find('img'));
                    // http://stackoverflow.com/questions/3877027/jquery-callback-on-image-load-even-when-the-image-is-cached
                    $(this).find('img').one('load', function () {
                        loading--;
                        if (loading === 0) {
                            $(self).twentytwenty();
                        }
                    }).each(function () {
                        loading++;
                        if(this.complete) {
                            $(this).load();
                        }
                    });
                });
            }
            else if ($.fn.twentytwenty) {
                $(window).trigger('resize.twentytwenty');
            }
        },

        /**
         * @private
         */
        _completeSubGroupContent: function ($subGroupEl) {
            var pendingSubGroupMap = this._pendingSubGroupMap;
            var treeItemId = $subGroupEl.attr('data-tree-item-id');

            var treeItem = pendingSubGroupMap.get(treeItemId);
            if (treeItem != null) {
                $subGroupEl[0].innerHTML = this._createDescSubGroupHTML(treeItem);
                pendingSubGroupMap.set(treeItemId, null);

                this._initTwentyTwenty($subGroupEl);
            }
        },

        /**
         * @param {string|Array.<string>} treeItemValue
         * @return {jQuery}
         */
        _findDescNode: function (treeItemValue) {
            var isArray = $.isArray(treeItemValue);
            var arrayMap = {};

            if (isArray) {
                for (var i = 0; i < treeItemValue.length; i++) {
                    arrayMap[treeItemValue[i]] = 1;
                }
            }

            return this.$el().find('.' + CSS_DESC_NODE).filter(function (index, el) {
                var currValue = el.getAttribute('data-tree-item-id');
                return isArray
                    ? !!arrayMap[currValue]
                    : currValue === treeItemValue;
            });
        },

        _findElInDescNode: function ($descNode) {
            // IE8 child selector?
            return {
                expandBtn: $descNode.find('> .' + CSS_DESC_EXPAND_BTN),
                subGroup: $descNode.find('> .' + CSS_DESC_SUB_GROUP)
            };
        },

        _getTraceToComponentRoot: function (treeItem) {
            var list = [];
            var parent;
            var currTreeItem = treeItem;
            // Component root special rule.
            // When {series: [{}, {}]}, inner {} is root (stop at enum parent).
            // When {timeline: {}}, timeline {} is root (stop at component root).
            while (currTreeItem
                && (parent = currTreeItem.parent)
                && parent.parent
                && (!currTreeItem.isEnumParent || currTreeItem === treeItem)
            ) {
                list.push(currTreeItem);
                currTreeItem = parent;
            }
            return list.reverse();
        },

        _createDescHTML: function (base, selTreeItem) {
            if (!base) {
                return '';
            }

            var baseDesc = this._wrapDesc(base);
            var descTitleHTML = tpl.render('descGroupTitle', {
                baseDescOptionPath: baseDesc.optionPath,
                descText: baseDesc.descText
            });

            return descTitleHTML + this._createDescSubGroupHTML(base, selTreeItem);
        },

        _createDescSubGroupHTML: function (parentTreeItem, selTreeItem) {
            var children = parentTreeItem.children;

            if (!children) {
                return '';
            }

            var descList = [];

            var pendingSubGroupMap = this._pendingSubGroupMap;

            for (var i = 0; i < children.length; i++) {
                var descItem = this._wrapDesc(children[i]);
                var hasSubGroup = children[i].hasObjectProperties;

                if (hasSubGroup) {
                    pendingSubGroupMap.set(children[i].value, children[i]);
                }

                descList.push(tpl.render(
                    'descGroupLine',
                    {
                        descItemOptionPath: descItem.optionPath,
                        descItemType: descItem.type,
                        descItemContent: getDefaultHTML(descItem),
                        descItemDescText: descItem.descText,
                        expandIcon: ICON_CAN_EXPAND,
                        hasSubGroup: hasSubGroup,
                        highlightCSS: children[i] === selTreeItem
                            ? CSS_DESC_GROUP_HIGHLIGHT : '',
                        idAttr: children[i].value
                    }
                ));
            }

            return descList.join('');
        },

        _doExpand: function (treeItemTrace, $descContent, selTreeItem) {
            // From treeItemTrace[0] is component root item, no need to be handled.
            var values = [];
            for (var i = 1; i < treeItemTrace.length; i++) {
                values.push(treeItemTrace[i].value);
            }
            var $descNodes = this._findDescNode(values);
            var that = this;

            $descNodes.each(function (index, el) {
                var elsInNode = that._findElInDescNode($(el));

                if (!elsInNode.subGroup.length) {
                    return;
                }

                elsInNode.expandBtn[0].innerHTML = '<span>' + ICON_CAN_COLLAPSE + '</span>';

                that._completeSubGroupContent(elsInNode.subGroup);

                elsInNode.subGroup.show();
            });
        },

        _wrapDesc: function (treeItem, removeIFrame) {
            var type = treeItem.type || '';

            if ($.isArray(type)) {
                type = type.join(', ');
            }

            // 不需要encodeHTML，本身就是html
            var descText = treeItem.description;

            if (removeIFrame && descText) {
                descText = descText.replace(IFR_REG, '');
            }

            return {
                type: dtLib.encodeHTML(type),
                descText: descText,
                defaultValueText: dtLib.encodeHTML(treeItem.defaultValueText),
                optionPath: schemaHelper.getOptionPathForHTML(treeItem)
            };
        },

        _showHoverTargetDesc: function (treeItem) {
            var $el = this.$el();
            var $descArea = $el.find(SELECTOR_HOVER_DESC);

            if (treeItem === false) {
                $descArea.stop().fadeOut(100);
                return;
            }

            $descArea.stop().css('opacity', 1).show();

            var descItem = this._wrapDesc(treeItem, true);

            $descArea[0].innerHTML = tpl.render(
                'descGroupLine',
                {
                    descItemOptionPath: descItem.optionPath,
                    descItemType: descItem.type,
                    descItemContent: getDefaultHTML(descItem),
                    descItemDescText: descItem.descText
                }
            );
        },

        /**
         * @private
         */
        _handleHashQuery: function (queryString) {
            var dataItem = this._viewModel().apiTreeSelected.getTreeDataItem(true);
            if (!dataItem || queryString !== schemaHelper.getOptionPathForHash(dataItem)) {

                if (!isInit) {
                    log({key: 'innerLinkChangeHash', data: queryString});
                }

                this._confirmQuery(queryString, 'optionPath', true);
            }
        },

        _doQuery: function (queryStr, queryArgName) {
            try {
                var args = {};
                args[queryArgName] = queryStr;
                args.noTypeEnum = docUtil.getGlobalArg('noTypeEnum');
                return schemaHelper.queryDocTree(this._docTree, args) || [];
            }
            catch (e) {
                alert(e);
                return [];
            }
        },

        /**
         * Query doc tree and scroll to result.
         * QueryStr like 'series[i](applicable:pie,line).itemStyle.normal.borderColor'
         *
         * @public
         * @param {string} queryStr Query string.
         * @param {string} queryArgName Value can be 'optionPath', 'fuzzyPath', 'anyText'.
         * @param {boolean} selectFirst Whether to select first result, default: false.
         * @param {boolean} showResult
         */
        _confirmQuery: function (queryStr, queryArgName, selectFirst, showResult) {
            var result = this._doQuery(queryStr, queryArgName);

            if (showResult) {
                this._setResultInfo(result.length);
            }

            var collapseLevel = null;
            $(SELECTOR_COLLAPSE_RADIO).each(function () {
                if (this.checked && this.value === '1') {
                    collapseLevel = 2;
                }
            });

            if (!result.length) {
                return;
            }

            var valueSet = [];
            for (var i = 0, len = result.length; i < len; i++) {
                valueSet.push(result[i].value);
            }

            var viewModel = this._viewModel();
            var opt = {
                scrollToTarget: {
                    container: this.$el().find(SELECTOR_TREE_AREA),
                    clientX: 210
                },
                collapseLevel: collapseLevel
            };

            if (selectFirst) {
                viewModel.apiTreeSelected(result[0].value, opt);
            }
            else { // Only highlight
                viewModel.apiTreeHighlighted(valueSet, opt);
            }
        },

        /**
         * @private
         * @param {number=} count null means clear.
         */
        _setResultInfo: function (count) {
            var text = count == null
                ? ''
                : (count === 0
                    ? lang.queryBoxNoResult
                    : dtLib.strTemplate(
                        lang.queryResultInfo, {count: count}
                    )
                );
            this.$el().find(SELECTOR_QUERY_RESULT_INFO)[0].innerHTML = text;
        }

    });

    function getDefaultHTML(descItem) {
        return descItem.defaultValueText
            ? '[ default: ' + descItem.defaultValueText + ' ]'
            : '';
    }

    function log(params) {
        _hmt.push(['_trackEvent', 'doc-' + params.key, pageName, params.data]);
    }

    return api;
});
