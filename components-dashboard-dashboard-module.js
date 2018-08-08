(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module"],{

/***/ "./src/app/content/pages/components/dashboard/dashboard.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Begin::Section-->\r\n<m-stat></m-stat>\r\n<!--End::Section-->\r\n\r\n<!--Begin::Section-->\r\n<m-pipeline-breakup></m-pipeline-breakup>\r\n<!--End::Section-->\r\n\r\n<!--Begin::Section-->\r\n<m-sales-performance></m-sales-performance>\r\n<!--End::Section-->\r\n\r\n<!--Begin::Section-->\r\n<m-deal-stage-funnel></m-deal-stage-funnel>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/layout-config.service */ "./src/app/core/services/layout-config.service.ts");
/* harmony import */ var _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/layout/subheader.service */ "./src/app/core/services/layout/subheader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, configService, subheaderService) {
        this.router = router;
        this.configService = configService;
        this.subheaderService = subheaderService;
        // this.subheaderService.setTitle('Dashboard');
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/content/pages/components/dashboard/dashboard.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"],
            _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/dashboard/dashboard.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/dashboard.module.ts ***!
  \************************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/content/pages/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/layout.module */ "./src/app/content/layout/layout.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _partials_layout_quick_sidebar_list_timeline_list_timeline_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module */ "./src/app/content/partials/layout/quick-sidebar/list-timeline/list-timeline.module.ts");
/* harmony import */ var _partials_content_widgets_charts_widget_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/content/widgets/charts/widget-charts.module */ "./src/app/content/partials/content/widgets/charts/widget-charts.module.ts");
/* harmony import */ var _pipeline_breakup_pipeline_breakup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipeline-breakup/pipeline-breakup.component */ "./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _sales_performance_sales_performance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales-performance/sales-performance.component */ "./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.ts");
/* harmony import */ var _deal_stage_funnel_deal_stage_funnel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deal-stage-funnel/deal-stage-funnel.component */ "./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _partials_layout_quick_sidebar_list_timeline_list_timeline_module__WEBPACK_IMPORTED_MODULE_6__["ListTimelineModule"],
                _partials_content_widgets_charts_widget_charts_module__WEBPACK_IMPORTED_MODULE_7__["WidgetChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
                    }
                ])
            ],
            providers: [],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _pipeline_breakup_pipeline_breakup_component__WEBPACK_IMPORTED_MODULE_8__["PipelineBreakupComponent"], _sales_performance_sales_performance_component__WEBPACK_IMPORTED_MODULE_10__["SalesPerformanceComponent"], _deal_stage_funnel_deal_stage_funnel_component__WEBPACK_IMPORTED_MODULE_11__["DealStageFunnelComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Begin::Section-->\n<div class=\"row\">\n\t<div class=\"col-xl-6\">\n\t\t<m-portlet>\n\t\t\t<!-- use ng-container[mPortletHeadTitle] for the title -->\n\t\t\t<ng-container mPortletHeadTitle>\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tDeal Stage Funnel\n\t\t\t\t\t\t<i class=\"flaticon-exclamation m--font-primary\"></i>\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\n\t\t\t<!-- use ng-container[mPortletHeadTools] for the top right toolbar content -->\n\t\t\t<ng-container mPortletHeadTools>\n\t\t\t\t<ul class=\"m-portlet__nav\">\n\t\t\t\t\t<li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle\">\n\t\t\t\t\t\t\t<i class=\"la la-ellipsis-h m--font-brand\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\" style=\"z-index: 101;\">\n\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 21.5px;\"></span>\n\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">Quick Actions</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Activity</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Messages</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">FAQ</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Support</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\">\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">Cancel</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container mPortletBody>\n\n\t\t\t\t<div class=\"m-widget4 m-widget4--progress\">\n\t\t\t\t\t<div class=\"m-widget4__item\">\n\t\t\t\t\t\t<div class=\"m-widget4__progress_flex\">\n\t\t\t\t\t\t\t<div class=\"m-widget4__progress-wrapper\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__progress-number\">Deal Stage</span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__progress-label\">Count of Deals</span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-widget4__ext\">\n\t\t\t\t\t\t\tConversion\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-widget4__item\" *ngFor=\"let deal of dealsData\">\n\t\t\t\t\t\t<div class=\"m-widget4__progress_flex\">\n\t\t\t\t\t\t\t<div class=\"m-widget4__progress-wrapper\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__progress-number\">{{ deal.count / 100 | percent }}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__progress-label\"> {{ deal.stage }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ngb-progressbar type=\"danger\" [value]=\"deal.count\"></ngb-progressbar>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-widget4__ext\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn m-btn--pill    btn-outline-danger m-btn m-btn--custom m-btn--outline-2x\"> {{ deal.conversion }} %</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</ng-container>\n\n\n\t\t</m-portlet>\n\n\t</div>\n\t<div class=\"col-xl-6\">\n\n\t</div>\n</div>\n<!--End::Section-->\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-widget4 .m-widget4__item {\n  display: flex !important;\n  flex-wrap: nowrap;\n  padding-top: 1.15rem;\n  padding-bottom: 1.25rem;\n  align-content: space-between; }\n\n.m-widget4.m-widget4--progress .m-widget4__progress_flex {\n  flex: 1 1 70%;\n  vertical-align: middle;\n  padding-left: 2rem;\n  padding-right: 2rem; }\n\n.m-widget4 .m-widget4__item .m-widget4__ext {\n  margin-top: 3px; }\n\n.m-widget4.m-widget4--progress .m-widget4__progress_flex .m-widget4__progress-wrapper {\n  flex: 1 1 100%;\n  flex-wrap: wrap;\n  align-content: space-between;\n  display: flex;\n  flex-direction: column; }\n\n.m-widget4__progress-wrapper div {\n  display: flex;\n  align-content: space-between;\n  flex-wrap: wrap; }\n\n.m-widget17__progress-number {\n  flex: 1 1; }\n\n.m-widget4__ext .btn {\n  padding: 20px;\n  margin-top: 5px; }\n\n.m-widget4__ext {\n  display: block;\n  flex: 1 1 10%;\n  text-align: center;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DealStageFunnelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealStageFunnelComponent", function() { return DealStageFunnelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealStageFunnelComponent = /** @class */ (function () {
    function DealStageFunnelComponent(config) {
        config.max = 100;
        // config.striped = true;
        config.animated = true;
        config.type = 'danger';
        config.height = '37px';
        this.dealsData = [
            {
                stage: 'Created',
                count: 29,
                conversion: 95.55
            },
            {
                stage: 'In Follow-up',
                count: 28,
                conversion: 21.55
            },
            {
                stage: 'Face 2 face ',
                count: 6,
                conversion: 50
            },
            {
                stage: 'Doc Collection',
                count: 3,
                conversion: 33.33
            },
            {
                stage: 'File processing',
                count: 1,
                conversion: 100
            },
            {
                stage: 'Closed won',
                count: 1,
                conversion: 100
            }
        ];
    }
    DealStageFunnelComponent.prototype.ngOnInit = function () { };
    DealStageFunnelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-deal-stage-funnel',
            template: __webpack_require__(/*! ./deal-stage-funnel.component.html */ "./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.html"),
            styles: [__webpack_require__(/*! ./deal-stage-funnel.component.scss */ "./src/app/content/pages/components/dashboard/deal-stage-funnel/deal-stage-funnel.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])
    ], DealStageFunnelComponent);
    return DealStageFunnelComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-portlet>\n\t<!-- use ng-container[mPortletHeadTitle] for the title -->\n\t<ng-container mPortletHeadTitle>\n\t\t<div class=\"m-portlet__head-title\">\n\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\tPipeLine\n\t\t\t</h3>\n\t\t</div>\n\t</ng-container>\n\n\t<!-- use ng-container[mPortletHeadTools] for the top right toolbar content -->\n\t<ng-container mPortletHeadTools>\n\t\t<ul class=\"m-portlet__nav\">\n\t\t\t<li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-ellipsis-h m--font-brand\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\" style=\"z-index: 101;\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 21.5px;\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">Quick Actions</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Activity</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Messages</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">FAQ</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Support</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\">\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">Cancel</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</ng-container>\n\n\t<ng-container mPortletBody>\n\t\t<div class=\"m-widget2\">\n\t\t\t<h3 class=\"total\">$1,213,252</h3>\n\n\t\t\t<div class=\"m-portlet \">\n\t\t\t\t<div class=\"m-portlet__body  m-portlet__body--no-padding\">\n\t\t\t\t\t<div class=\"row m-row--no-padding m-row--col-separator-xl\">\n\t\t\t\t\t\t<div class=\"col-xl\" *ngFor=\"let deal of pipeLineData\">\n\n\t\t\t\t\t\t\t<div class=\"m-widget24 box-shadow\">\n\t\t\t\t\t\t\t\t<div class=\"m-widget24__item \">\n\t\t\t\t\t\t\t\t\t<h4 class=\"m-widget24__title m--font-brand\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget24__stats \">\n\t\t\t\t\t\t\t\t\t\t\t{{ deal.amount | currency : 'INR':true}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<ngb-progressbar [type]=\"deal.type\" [value]=\"100\"></ngb-progressbar>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<strong class=\"m-widget24__change\">\n\t\t\t\t\t\t\t\t\t\t{{ deal.stage }}\n\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget24__number\">\n\t\t\t\t\t\t\t\t\t\t{{ deal.percent / 100 | percent }}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--end::Total Profit-->\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n\n\n</m-portlet>\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total {\n  font-size: 24px;\n  font-weight: 500;\n  color: #516f90; }\n\n.box-shadow {\n  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1); }\n\n.m-widget24 .m-widget24__item .m-widget24__change {\n  color: #516f90; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PipelineBreakupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineBreakupComponent", function() { return PipelineBreakupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PipelineBreakupComponent = /** @class */ (function () {
    function PipelineBreakupComponent(config) {
        config.max = 100;
        // config.striped = true;
        config.animated = true;
        // config.type = 'success';
        config.height = '87px';
    }
    PipelineBreakupComponent.prototype.ngOnInit = function () {
        this.pipeLineData = [
            {
                amount: 234455,
                stage: 'Follow up ',
                percent: 35,
                type: 'danger'
            },
            {
                amount: 23855,
                stage: 'Contacted ',
                percent: 23,
                type: 'warning'
            },
            { amount: 234525, stage: 'F2F ', percent: 55, type: 'high deal' },
            {
                amount: 23785,
                stage: 'Doc Collection ',
                percent: 27,
                type: 'info'
            },
            {
                amount: 15255,
                stage: 'File Processing ',
                percent: 88,
                type: 'success'
            }
        ];
    };
    PipelineBreakupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-pipeline-breakup',
            template: __webpack_require__(/*! ./pipeline-breakup.component.html */ "./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.html"),
            styles: [__webpack_require__(/*! ./pipeline-breakup.component.scss */ "./src/app/content/pages/components/dashboard/pipeline-breakup/pipeline-breakup.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])
    ], PipelineBreakupComponent);
    return PipelineBreakupComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-portlet class=\"m--bg-accent\">\n\t<!-- use ng-container[mPortletHeadTitle] for the title -->\n\t<ng-container mPortletHeadTitle>\n\t\t<div class=\"m-portlet__head-title\">\n\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\tSales Performance\n\t\t\t</h3>\n\t\t</div>\n\t</ng-container>\n\n\t<!-- use ng-container[mPortletHeadTools] for the top right toolbar content -->\n\t<ng-container mPortletHeadTools>\n\t\t<ul class=\"m-portlet__nav\">\n\t\t\t<li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-ellipsis-h m--font-brand\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\" style=\"z-index: 101;\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 21.5px;\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">Quick Actions</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Activity</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Messages</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">FAQ</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Support</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\">\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">Cancel</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</ng-container>\n\n\t<ng-container mPortletBody>\n\t\t<h3 class=\"total\">$1,213,252</h3>\n\t\t<div class=\"d-flex flex-column\">\n\t\t\t<div>\n\t\t\t\t<ul class=\"sales-well sales-well--nowrap\">\n\t\t\t\t\t<li class=\"sales-well__item sales-well__item--small m-y-2\" *ngFor=\"let sale of salesPerformanceData\">\n\t\t\t\t\t\t<div class=\"sales-well__inner\">\n\t\t\t\t\t\t\t<span class=\"sales-well__label\"> {{ sale.name }} </span>\n\n\t\t\t\t\t\t\t<span class=\"sales-well__big-number m--font-primary\">{{ sale.value }}</span>\n\t\t\t\t\t\t\t<span class=\"sales-well__connector\">\n\t\t\t\t\t\t\t\t<span class=\"sales-chevron sales-chevron--right\">\n\t\t\t\t\t\t\t\t\t<span class=\"sales-chevron__inner\"></span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t</ng-container>\n\n\n</m-portlet>\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total {\n  font-size: 24px;\n  font-weight: 500;\n  color: #516f90; }\n\n.sales-well {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  list-style-type: none;\n  margin: 0;\n  padding: 2rem 0 0 .75rem; }\n\n.sales-well--nowrap {\n  display: flex;\n  flex-wrap: nowrap; }\n\n.m-y-2 {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important; }\n\n.sales-well__item {\n  flex: 1 1 180px;\n  margin-bottom: 2rem;\n  margin-top: 1.125rem;\n  padding: 0 .75rem 0 0;\n  position: relative; }\n\n.sales-well__inner {\n  max-width: none;\n  text-align: center; }\n\n.sales-well__help-text, .sales-well__label {\n  display: block;\n  font-size: .75rem; }\n\n.sales-well__label {\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  display: block;\n  font-size: 1rem;\n  line-height: normal;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  text-shadow: 0 0 1px transparent;\n  margin-top: 0;\n  color: #33475b; }\n\n.sales-well__item--small .sales-well__big-number {\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 0 0 1px transparent;\n  margin-bottom: 1.25rem;\n  margin-top: 0;\n  display: block;\n  font-size: 1.85rem;\n  line-height: normal;\n  margin-bottom: 0;\n  line-height: 2.375rem;\n  color: #33475b; }\n\n.sales-well__big-number, .sales-well__label {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 0 0 1px transparent;\n  margin-top: -21px; }\n\n.sales-well__connector {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(50%);\n          transform: translateY(-50%) translateX(50%);\n  z-index: 1; }\n\n.sales-chevron {\n  align-items: center;\n  display: inline-flex;\n  font-size: 12px;\n  font-size: .75rem;\n  color: #eaf0f6;\n  min-height: 2.5rem;\n  padding: .25rem .25rem .25rem .75rem;\n  position: relative;\n  text-align: center; }\n\n.sales-chevron--right:after, .sales-chevron--right:before {\n  left: -5%;\n  background-color: currentColor;\n  content: \" \";\n  height: 50%;\n  position: absolute;\n  width: 110%; }\n\n.sales-chevron--right:before {\n  top: 0;\n  -webkit-transform: skew(30deg);\n          transform: skew(30deg); }\n\n.sales-chevron__inner {\n  color: #33475b;\n  min-width: 1.875rem;\n  position: relative;\n  z-index: 1; }\n\n.sales-chevron--right:after {\n  bottom: 0;\n  -webkit-transform: skew(-30deg);\n          transform: skew(-30deg); }\n\n.sales-chevron--right:after, .sales-chevron--right:before {\n  left: -5%;\n  background-color: currentColor;\n  content: \" \";\n  height: 50%;\n  position: absolute;\n  width: 110%; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SalesPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPerformanceComponent", function() { return SalesPerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesPerformanceComponent = /** @class */ (function () {
    function SalesPerformanceComponent() {
        this.salesPerformanceData = [
            { name: 'Contacts Assigned', value: 24 },
            { name: 'Contacts Worked', value: 2 },
            { name: 'In Follow-up', value: 0 },
            { name: 'Face 2 face', value: 4 },
            { name: 'File processing', value: 24 },
            { name: 'Sales closed', value: 24 },
        ];
    }
    SalesPerformanceComponent.prototype.ngOnInit = function () { };
    SalesPerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-sales-performance',
            template: __webpack_require__(/*! ./sales-performance.component.html */ "./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.html"),
            styles: [__webpack_require__(/*! ./sales-performance.component.scss */ "./src/app/content/pages/components/dashboard/sales-performance/sales-performance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesPerformanceComponent);
    return SalesPerformanceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module.js.map