(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _componant_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componant/home/home.component */ "./src/app/componant/home/home.component.ts");
/* harmony import */ var _componant_countries_countries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componant/countries/countries.component */ "./src/app/componant/countries/countries.component.ts");
/* harmony import */ var _componant_state_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componant/state/state.component */ "./src/app/componant/state/state.component.ts");







const routes = [
    { path: '', component: _componant_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'countries', component: _componant_countries_countries_component__WEBPACK_IMPORTED_MODULE_3__["CountriesComponent"] },
    { path: 'India', component: _componant_state_state_component__WEBPACK_IMPORTED_MODULE_4__["StateComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _componant_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componant/navbar/navbar.component */ "./src/app/componant/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'coronatracker';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_componant_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componant_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componant/navbar/navbar.component */ "./src/app/componant/navbar/navbar.component.ts");
/* harmony import */ var _componant_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componant/home/home.component */ "./src/app/componant/home/home.component.ts");
/* harmony import */ var _componant_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componant/countries/countries.component */ "./src/app/componant/countries/countries.component.ts");
/* harmony import */ var _componant_state_state_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componant/state/state.component */ "./src/app/componant/state/state.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _componant_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componant/dashboard-card/dashboard-card.component */ "./src/app/componant/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _componant_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _componant_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _componant_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"],
        _componant_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_10__["DashboardCardComponent"],
        _componant_state_state_component__WEBPACK_IMPORTED_MODULE_8__["StateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _componant_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _componant_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _componant_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"],
                    _componant_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_10__["DashboardCardComponent"],
                    _componant_state_state_component__WEBPACK_IMPORTED_MODULE_8__["StateComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/componant/countries/countries.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componant/countries/countries.component.ts ***!
  \************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data-service.service */ "./src/app/service/data-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard-card/dashboard-card.component */ "./src/app/componant/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");









function CountriesComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const con_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", con_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](con_r3);
} }
function CountriesComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cs_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, cs_r4.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cs_r4.cases);
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class CountriesComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.countries = [];
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeath = 0;
        this.totalRecovred = 0;
        this.todayConfirmed = 0;
        this.todayDeath = 0;
        this.loading = true;
        this.datatable = [];
        this.p = 1;
        this.chart = {
            LineChart: "LineChart",
            height: 500,
            width: 400,
            options: {
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
                is3D: true,
            }
        };
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.dataService.getdateWiseData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            this.DatewiseData = result;
        })), this.dataService.getGlobalData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            this.data = result;
            this.data.forEach(cs => {
                this.countries.push(cs.country);
            });
        }))).subscribe({
            complete: () => {
                this.UpdateValues('India');
                // this.SelectedCountryData = this.DatewiseData['india']
                // this.initChart()
                this.loading = false;
            }
        });
    }
    UpdateValues(country) {
        this.data.forEach(cs => {
            if (cs.country == country) {
                this.totalConfirmed = cs.confirmed;
                this.totalActive = cs.active;
                this.totalRecovred = cs.recovered;
                this.totalDeath = cs.deaths;
            }
        });
        this.SelectedCountryData = this.DatewiseData[country];
        // console.log(this.SelectedCountryData)
        this.initChart();
    }
    get sortData() {
        return this.SelectedCountryData.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    }
    initChart() {
        this.datatable = [];
        this.SelectedCountryData.forEach(cs => {
            this.datatable.push([cs.date, cs.cases]);
        });
    }
}
CountriesComponent.ɵfac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"])); };
CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountriesComponent, selectors: [["app-countries"]], decls: 35, vars: 19, consts: [[1, "ui", "active", "inverted", "dimmer"], [1, "ui", "text", "loader"], [1, "jumbotron", "bg-white", "text-center"], [1, "mx-auto"], [1, "form-group", "col-lg-5", "mx-auto"], ["for", "c"], ["name", "", "id", "c", "placeholder", "India", 1, "form-control", 3, "change"], ["input", ""], ["value", "India"], [3, "value", 4, "ngFor", "ngForOf"], [3, "totalConfirmed", "totalDeath", "totalRecovred", "totalActive", "todayConfirmed", "todayDeath"], [1, "row", 2, "padding", "4px"], [1, "col-md-6", "col-lg-6", "col-sm-12", "col-xs-12"], [1, "card", 2, "box-shadow", "0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"], [2, "width", "100%", 3, "type", "data", "height", "options"], [1, "table", "table-striped"], [2, "background-color", "cadetblue"], [4, "ngFor", "ngForOf"], [1, "text-center"], [3, "pageChange"], [3, "value"]], template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CountriesComponent_Template_select_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.UpdateValues(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CountriesComponent_option_12_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-dashboard-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "google-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sr No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CountriesComponent_tr_30_Template, 8, 5, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pagination-controls", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CountriesComponent_Template_pagination_controls_pageChange_34_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalConfirmed", ctx.totalConfirmed)("totalDeath", ctx.totalDeath)("totalRecovred", ctx.totalRecovred)("totalActive", ctx.totalActive)("todayConfirmed", ctx.todayConfirmed)("todayDeath", ctx.todayDeath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chart.LineChart)("data", ctx.datatable)("height", ctx.chart.height)("options", ctx.chart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 14, ctx.sortData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.p)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_5__["DashboardCardComponent"], angular_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n        border: 1px solid black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uYW50L2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLHVCQUF1QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmFudC9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsLnRhYmxlIHRkLC50YWJsZSB0aHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countries',
                templateUrl: './countries.component.html',
                styleUrls: ['./countries.component.css']
            }]
    }], function () { return [{ type: src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componant/dashboard-card/dashboard-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componant/dashboard-card/dashboard-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardComponent", function() { return DashboardCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DashboardCardComponent {
    // @Input('todayActive')
    // todayActive
    // @Input('todayRecovered')
    // todayRecovered
    constructor() { }
    ngOnInit() {
    }
}
DashboardCardComponent.ɵfac = function DashboardCardComponent_Factory(t) { return new (t || DashboardCardComponent)(); };
DashboardCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardCardComponent, selectors: [["app-dashboard-card"]], inputs: { totalConfirmed: "totalConfirmed", totalDeath: "totalDeath", totalActive: "totalActive", totalRecovred: "totalRecovred", todayConfirmed: "todayConfirmed", todayDeath: "todayDeath" }, decls: 43, vars: 36, consts: [[1, "row"], [1, "col-md-3", "col-lg-3", "col-sm-12", "col-xs-12"], [1, "card", "p-4", "m-4", 2, "background", "linear-gradient(72deg, #e31313, #970707)"], [1, "ui", "statistic"], [1, "label"], [2, "color", "white"], [1, "value", 2, "font-size", "3rem!important", "color", "white"], [1, "value", 2, "font-size", "1rem!important", "color", "white"], [1, "card", "p-4", "m-4", 2, "background", "linear-gradient(72deg,#04c724, #057c15)"], [1, "card", "p-4", "m-4", 2, "background", "linear-gradient(72deg,#396afc, #142fcc)"], [1, "card", "p-4", "m-4", 2, "background", "linear-gradient(72deg,#555758, #2c3e50)"]], template: function DashboardCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Death");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 6, ctx.totalConfirmed, "INR", "", "0.0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](12, 11, ctx.todayConfirmed, "INR", "", "0.0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](21, 16, ctx.totalRecovred, "INR", "", "0.0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](30, 21, ctx.totalActive, "INR", "", "0.0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](39, 26, ctx.totalDeath, "INR", "", "0.0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](42, 31, ctx.todayDeath, "INR", "", "0.0"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".card[_ngcontent-%COMP%]{\r\n    \r\n    height: 160px;\r\n}\r\n.label[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n}\r\n.value[_ngcontent-%COMP%]{\r\n    font-size: 3rem!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uYW50L2Rhc2hib2FyZC1jYXJkL2Rhc2hib2FyZC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25hbnQvZGFzaGJvYXJkLWNhcmQvZGFzaGJvYXJkLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcbi5sYWJlbHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi52YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogM3JlbSFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-card',
                templateUrl: './dashboard-card.component.html',
                styleUrls: ['./dashboard-card.component.css']
            }]
    }], function () { return []; }, { totalConfirmed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalConfirmed']
        }], totalDeath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalDeath']
        }], totalActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalActive']
        }], totalRecovred: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalRecovred']
        }], todayConfirmed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['todayConfirmed']
        }], todayDeath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['todayDeath']
        }] }); })();


/***/ }),

/***/ "./src/app/componant/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/componant/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/data-service.service */ "./src/app/service/data-service.service.ts");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-card/dashboard-card.component */ "./src/app/componant/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");





class HomeComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeath = 0;
        this.totalRecovred = 0;
        this.todayConfirmed = 0;
        this.todayActive = 0;
        this.todayDeath = 0;
        this.todayRecovered = 0;
        this.datatable = [];
        this.chart = {
            PieChart: "PieChart",
            ColumnChart: "GeoChart",
            height: 500,
            width: 400,
            options: {
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
                is3D: true,
            }
        };
        this.loading = true;
    }
    initChart(casetype) {
        // this.datatable.push(['Country', 'Cases'])
        this.datatable = [];
        //  var tempdata= this.worlddata
        //  tempdata.splice(0,1)
        // console.log(tempdata);
        this.tempdata.forEach(cs => {
            let value;
            let ct;
            if (casetype == 'c') {
                value = cs.cases;
            }
            else if (casetype == 'r') {
                value = cs.recovered;
                console.log(value);
                console.log(cs.country);
            }
            else if (casetype == 'a') {
                value = cs.active;
            }
            else if (casetype == 'd') {
                value = cs.deaths;
            }
            this.datatable.push([
                cs.country, value
            ]);
        });
    }
    ngOnInit() {
        this.dataService.Getdata().subscribe((data) => {
            this.worlddata = data;
            this.tempdata = data;
            this.totalConfirmed = data[0].cases;
            this.totalActive = data[0].active;
            this.totalRecovred = data[0].recovered;
            this.totalDeath = data[0].deaths;
            // this.todayActive = data[0].todayActive;
            this.todayConfirmed = data[0].todayCases;
            this.todayDeath = data[0].todayDeaths;
            // this.todayRecovered = data[0].todayRecovered;
            this.tempdata.splice(0, 1);
            this.initChart('c');
            this.loading = false;
        });
        // this.dataService.getGlobalData().subscribe(
        //   {
        //     next: (result) => {
        //       this.GlobalData = result;
        //       result.forEach(cs => {
        //         if (!Number.isNaN(cs.confirmed)) {
        //           this.totalConfirmed += cs.confirmed;
        //           this.totalActive += cs.active;
        //           this.totalRecovred += cs.recovered;
        //           this.totalDeath += cs.deaths;
        //         }
        //       })
        //       this.initChart('c');
        //       this.loading= false;
        //     }
        //   }
        // )
    }
    UpdateCharts(input) {
        this.initChart(input.value);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 43, vars: 16, consts: [[1, "ui", "active", "inverted", "dimmer"], [1, "ui", "text", "loader"], [1, "bg-white", "text-center"], [3, "totalConfirmed", "totalDeath", "totalRecovred", "totalActive", "todayConfirmed", "todayDeath"], [1, "ui", "form", 2, "padding-left", "20px"], [1, "inline", "fields"], [1, "field"], [1, "ui", "radio", "checkbox"], ["type", "radio", "name", "casetype", "id", "c", "value", "c", "checked", "", "tabindex", "0", 1, "hidden", 3, "click"], ["c", ""], ["for", "c", 2, "color", "red"], ["type", "radio", "name", "casetype", "id", "r", "value", "r", "tabindex", "0", 1, "hidden", 3, "click"], ["r", ""], ["for", "r", 2, "color", "green"], ["type", "radio", "name", "casetype", "id", "d", "value", "d", "tabindex", "0", 1, "hidden", 3, "click"], ["d", ""], ["for", "d", 2, "color", "gray"], ["type", "radio", "name", "casetype", "id", "a", "value", "a", "tabindex", "0", 1, "hidden", 3, "click"], ["a", ""], ["for", "a", 2, "color", "blue"], [1, "row", 2, "padding", "4px"], [1, "col-md-6", "col-lg-6", "col-sm-12", "col-xs-12"], [1, "card", 2, "box-shadow", "0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"], [2, "width", "100%", 3, "type", "data", "height", "options"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-dashboard-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.UpdateCharts(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.UpdateCharts(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.UpdateCharts(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Death");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.UpdateCharts(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "google-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "google-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalConfirmed", ctx.totalConfirmed)("totalDeath", ctx.totalDeath)("totalRecovred", ctx.totalRecovred)("totalActive", ctx.totalActive)("todayConfirmed", ctx.todayConfirmed)("todayDeath", ctx.todayDeath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chart.PieChart)("data", ctx.datatable)("height", ctx.chart.height)("options", ctx.chart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chart.ColumnChart)("data", ctx.datatable)("height", ctx.chart.height)("options", ctx.chart.options);
    } }, directives: [_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__["DashboardCardComponent"], angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartComponent"]], styles: [".ui.form[_ngcontent-%COMP%]   .inline.fields[_ngcontent-%COMP%] {\r\n    margin: 0 0 1em;\r\n  \r\n    align-items: center;\r\n    \r\n}\r\n.img-responsive[_ngcontent-%COMP%]{\r\n    padding-left: 430px;\r\n    padding-right: 430px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uYW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksZUFBZTs7SUFJZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9COztBQUV4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmFudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi51aS5mb3JtIC5pbmxpbmUuZmllbGRzIHtcclxuICAgIG1hcmdpbjogMCAwIDFlbTtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogNTcxcHg7ICovXHJcbn1cclxuLmltZy1yZXNwb25zaXZle1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQzMHB4O1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componant/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componant/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["is-active"]; };
class NavbarComponent {
    constructor() {
        this.isShown = false;
    }
    ngOnInit() {
    }
    closeMenu() {
        var isMobile = /iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Android/i.test(navigator.userAgent);
        if (isMobile) {
            document.getElementById('navButton').click();
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "static-top", 2, "background", "linear-gradient(72deg,#5a2a82, #80539c)"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link", 3, "routerLinkActive"], [1, "sr-only"], ["routerLink", "countries", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "India", 1, "nav-link", 3, "routerLinkActive"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Apna Corona Tracker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n  }\r\n\r\n.navbar-brand[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding: 15px;\r\n    width: auto;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.example2[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    padding: 7px 15px;\r\n  }\r\n\r\n\r\n\r\n.example3[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n  }\r\n\r\n.example3[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n  }\r\n\r\n.example3[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin: 25px 15px 25px 0;\r\n  }\r\n\r\n.navbar-primary[_ngcontent-%COMP%] {\r\n        box-shadow: 1px 1px 1px rgba(0,0,0,0.1);\r\n      border-bottom: 2px solid rgba(221, 221, 221, 0.82);\r\n      border-top: 3px solid #3e476d;\r\n        text-transform: uppercase;\r\n      color: #6d6d6d!important;\r\n  }\r\n\r\n.navbar-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      color: #6d6d6d!important;\r\n  }\r\n\r\n\r\n\r\n.example4[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    padding: 7px 14px;\r\n  }\r\n\r\n\r\n\r\n.example5[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n.example5[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    padding: 7px 14px;\r\n  }\r\n\r\n\r\n\r\n.example6[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{ \r\n    background: url(https://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png) center / contain no-repeat;\r\n    width: 200px;\r\n  }\r\n\r\n\r\n\r\n@media only screen and (max-width : 768px){\r\n    .example-8[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n    position: absolute;\r\n  }\r\n  .example-8[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: auto;\r\n    padding: 7px 14px; \r\n  }\r\n  }\r\n\r\n\r\n\r\n.example-8[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    background: url(https://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png) center / contain no-repeat;\r\n    width: 200px;\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n    position: absolute;\r\n  }\r\n\r\n\r\n\r\n.brand-centered[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n\r\n.brand-centered[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n.navbar-toggle[_ngcontent-%COMP%] {\r\n      z-index: 1;\r\n  }\r\n\r\n\r\n\r\n.navbar-alignit[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\r\n    transform-style: preserve-3d;\r\n    height: 50px;\r\n  }\r\n\r\n.navbar-alignit[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n      top: 50%;\r\n      display: block;\r\n      position: relative;\r\n      height: auto;\r\n      transform: translate(0,-50%);\r\n      margin-right: 15px;\r\n    margin-left: 15px;\r\n  }\r\n\r\n.navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] {\r\n      z-index: 9999;\r\n  }\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\";\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uYW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzttQ0FJbUM7O0FBRW5DO0lBQ0ksWUFBWTtFQUNkOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0FBT0E7OzRCQUUwQjs7QUFHMUIsbUZBQW1GOztBQUVuRjtJQUNFLGlCQUFpQjtFQUNuQjs7QUFLQTs7eUdBRXVHOztBQUV2RztJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0FBQ0E7SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0VBQzFCOztBQUNBO1FBQ00sdUNBQXVDO01BQ3pDLGtEQUFrRDtNQUNsRCw2QkFBNkI7UUFDM0IseUJBQXlCO01BQzNCLHdCQUF3QjtFQUM1Qjs7QUFDQTtNQUNJLHdCQUF3QjtFQUM1Qjs7QUFPQSxpQ0FBaUM7O0FBQ2pDO0lBQ0UsaUJBQWlCO0VBQ25COztBQUdBLDhCQUE4Qjs7QUFDOUI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUdBLCtCQUErQjs7QUFDL0I7SUFDRSx3SUFBd0k7SUFDeEksWUFBWTtFQUNkOztBQU1BLGdDQUFnQzs7QUFDNUI7SUFDRjtJQUNBLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7RUFDQTs7QUFHQSxrQ0FBa0M7O0FBQ2xDO0lBQ0Usd0lBQXdJO0lBQ3hJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGtCQUFrQjtFQUNwQjs7QUFNQSw0Q0FBNEM7O0FBQzVDO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0VBQ1I7O0FBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUNBO01BQ0ksVUFBVTtFQUNkOztBQUtBLG1HQUFtRzs7QUFDbkc7SUFHRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkOztBQUNBO01BQ0ksUUFBUTtNQUNSLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLDRCQUE0QjtNQUM1QixrQkFBa0I7SUFDcEIsaUJBQWlCO0VBQ25COztBQUlBO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmFudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5SZXNwb25zaXZlIG5hdmJhci1icmFuZCBpbWFnZSBDU1NcclxuLSBSZW1vdmUgbmF2YmFyLWJyYW5kIHBhZGRpbmcgZm9yIGZpcmVmb3ggYnVnIHdvcmthcm91bmRcclxuLSBhZGQgMTAwJSBoZWlnaHQgYW5kIHdpZHRoIGF1dG8gLi4uIHNpbWlsYXIgdG8gaG93IGJvb3RzdHJhcCBpbWctcmVzcG9uc2l2ZSBjbGFzcyB3b3Jrc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWJyYW5kPmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgRVhBTVBMRVMgMi03IEJFTE9XIFxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIFxyXG4gIFxyXG4gIC8qIEVYQU1QTEUgMiAobGFyZ2VyIGxvZ28pIC0gc2ltcGx5IGFkanVzdCB0b3AgYm90dG9tIHBhZGRpbmcgdG8gbWFrZSBsb2dvIGxhcmdlciAqL1xyXG4gIFxyXG4gIC5leGFtcGxlMiAubmF2YmFyLWJyYW5kPmltZyB7XHJcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRVhBTVBMRSAzIC0gTUJJIFN0YWZmaW5nIE5hdmJhclxyXG4gIFxyXG4gIGxpbmUgaGVpZ2h0IGlzIDIwcHggYnkgZGVmYXVsdCBzbyBhZGQgMzBweCB0b3AgYW5kIGJvdHRvbSB0byBlcXVhbCB0aGUgbmV3IC5uYXZiYXItYnJhbmQgODBweCBoZWlnaHQgICovXHJcbiAgXHJcbiAgLmV4YW1wbGUzIC5uYXZiYXItYnJhbmQge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZTMgLm5hdiA+bGkgPmEge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUzIC5uYXZiYXItdG9nZ2xlIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggMTVweCAyNXB4IDA7XHJcbiAgfVxyXG4gIC5uYXZiYXItcHJpbWFyeSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjgyKTtcclxuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzZTQ3NmQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICM2ZDZkNmQhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLXByaW1hcnkgYSB7XHJcbiAgICAgIGNvbG9yOiAjNmQ2ZDZkIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRVhBTVBMRSA0IC0gU21hbGwgTmFycm93IExvZ28qL1xyXG4gIC5leGFtcGxlNCAubmF2YmFyLWJyYW5kPmltZyB7XHJcbiAgICBwYWRkaW5nOiA3cHggMTRweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogRVhBTVBMRSA1IC0gTG9nbyB3aXRoIFRleHQqL1xyXG4gIC5leGFtcGxlNSAubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuZXhhbXBsZTUgLm5hdmJhci1icmFuZD5pbWcge1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEVYQU1QTEUgNiAtIEJhY2tncm91bmQgTG9nbyovXHJcbiAgLmV4YW1wbGU2IC5uYXZiYXItYnJhbmR7IFxyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2NhbmRpZGJ1c2luZXNzL2ltYWdlL3VwbG9hZC92MTQ1NTQwNjMwNC9kaXNwdXRlLWJpbGxzLWNoaWNhZ28ucG5nKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRVhBTVBMRSA4IC0gQ2VudGVyIG9uIG1vYmlsZSovXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KXtcclxuICAgIC5leGFtcGxlLTggLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLTggLm5hdmJhci1icmFuZD5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA3cHggMTRweDsgXHJcbiAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBFWEFNUExFIDggLSBDZW50ZXIgQmFja2dyb3VuZCAqL1xyXG4gIC5leGFtcGxlLTggLm5hdmJhci1icmFuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY2FuZGlkYnVzaW5lc3MvaW1hZ2UvdXBsb2FkL3YxNDU1NDA2MzA0L2Rpc3B1dGUtYmlsbHMtY2hpY2Fnby5wbmcpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvKiBFWEFNUExFIDkgLSBDZW50ZXIgd2l0aCBGbGV4Ym94IGFuZCBUZXh0Ki9cclxuICAuYnJhbmQtY2VudGVyZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAuYnJhbmQtY2VudGVyZWQgLm5hdmJhci1icmFuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGUge1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvKiBDU1MgVHJhbnNmb3JtIEFsaWduIE5hdmJhciBCcmFuZCBUZXh0IC4uLiBUaGlzIGNvdWxkIGFsc28gYmUgYWNoaWV2ZWQgd2l0aCB0YWJsZSAvIHRhYmxlLWNlbGxzICovXHJcbiAgLm5hdmJhci1hbGlnbml0IC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWFsaWduaXQgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTUwJSk7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLm5hdmJhci1uYXY+bGk+LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componant/state/state.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componant/state/state.component.ts ***!
  \****************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/data-service.service */ "./src/app/service/data-service.service.ts");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-card/dashboard-card.component */ "./src/app/componant/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");






function StateComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r1.state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r1.confirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", state_r1.cchanges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r1.recovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", state_r1.rChanges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", state_r1.aChanges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r1.deaths);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", state_r1.dChanges, "");
} }
const _c0 = function (a1) { return { itemsPerPage: 40, currentPage: a1 }; };
class StateComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeath = 0;
        this.totalRecovred = 0;
        this.loading = true;
        this.todayConfirmed = 0;
        this.todayDeath = 0;
        this.p = 1;
        this.population = 1381327800;
    }
    ngOnInit() {
        this.dataService.Getstatewisedata().subscribe((data) => {
            this.Statewisedata = data;
            console.log(this.Statewisedata);
            this.loading = false;
        });
        this.dataService.Getdata().subscribe((data) => {
            data.forEach(cs => {
                if (cs.country == 'India') {
                    this.totalConfirmed = cs.cases;
                    this.totalActive = cs.active;
                    this.totalRecovred = cs.recovered;
                    this.totalDeath = cs.deaths;
                    this.todayConfirmed = cs.todayCases;
                    this.todayDeath = cs.todayDeaths;
                }
            });
            this.confirmedratio = (this.totalConfirmed / this.population) * 1000000;
            this.recoveredratio = (this.totalRecovred / this.totalConfirmed) * 100;
            this.activeratio = (this.totalActive / this.totalConfirmed) * 100;
            this.deathratio = (this.totalDeath / this.totalConfirmed) * 100;
            this.loading = false;
        });
    }
}
StateComponent.ɵfac = function StateComponent_Factory(t) { return new (t || StateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"])); };
StateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateComponent, selectors: [["app-state"]], decls: 79, vars: 46, consts: [[1, "ui", "active", "inverted", "dimmer"], [1, "ui", "text", "loader"], [1, "bg-white", "text-center"], [3, "totalConfirmed", "totalDeath", "totalRecovred", "totalActive", "todayConfirmed", "todayDeath"], [1, "row"], [1, "col-md-7", "col-lg-7", "col-sm-12", "col-xs-12"], [2, "margin", "20px"], [1, "table-responsive"], [1, "table", "table-striped"], [2, "background-color", "cadetblue", "position", "sticky"], [1, "fixed", 2, "min-width", "150px"], [2, "min-width", "130px"], [4, "ngFor", "ngForOf"], [1, "col-md-1", "col-lg-1", "col-sm-12", "col-xs-12"], [1, "col-md-4", "col-lg-4", "col-sm-12", "col-xs-12", "pad"], [1, "card", 2, "background", "rgba(219, 24, 24, 0.363)"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "color", "red", "font-size", "30px"], [1, "card-text"], [1, "card", 2, "background", "rgba(28, 24, 238, 0.397)"], [1, "card-text", 2, "color", "blue", "font-size", "30px"], [1, "card", 2, "background", "rgba(32, 240, 5, 0.377)"], [1, "card-text", 2, "color", "green", "font-size", "30px"], [1, "card", 2, "background", "rgba(98, 100, 98, 0.377)"], [1, "card-text", 2, "color", "rgb(48, 47, 47)", "font-size", "30px"], [1, "fixed"], [2, "float", "left"], [2, "float", "right", "color", "red"], [2, "float", "right", "color", "green"], [2, "float", "right", "color", "blue"], [2, "float", "right", "color", "gray"]], template: function StateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-dashboard-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Death");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, StateComponent_tr_23_Template, 23, 9, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Confirmed Per Million");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Active Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Recovery Ratio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Case Fatality Ratio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalConfirmed", ctx.totalConfirmed)("totalDeath", ctx.totalDeath)("totalRecovred", ctx.totalRecovred)("totalActive", ctx.totalActive)("todayConfirmed", ctx.todayConfirmed)("todayDeath", ctx.todayDeath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 17, ctx.Statewisedata, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 20, ctx.confirmedratio, "1.0-1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 23, ctx.confirmedratio, "1.0-1"), " out of every 10 lakh people in Maharashtra have tested positive for the virus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 26, ctx.activeratio, "1.0-1"), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("For every 100 confirmed cases, ~", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 29, ctx.activeratio, "1.0-1"), " are currently infected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](62, 32, ctx.recoveredratio, "1.0-1"), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("For every 100 confirmed cases, ~", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 35, ctx.recoveredratio, "1.0-1"), " have recovered from the virus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 38, ctx.deathratio, "1.0-1"), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("For every 100 confirmed cases, ~", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](78, 41, ctx.deathratio, "1.0-1"), " have unfortunately passed away from the virus.");
    } }, directives: [_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__["DashboardCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".card[_ngcontent-%COMP%]{\r\n  width:300px\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 1px;\r\n  z-index: 9999;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: rgb(250, 246, 246);\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  \r\n  word-wrap: break-word;\r\n}\r\n\r\n.pad[_ngcontent-%COMP%]{\r\n  padding: 20px;\r\n}\r\n\r\n.fixed[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  width: 5em;\r\n  left: 0;\r\n  top: auto;\r\n  z-index: 999;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:not(.fixed) {\r\n  z-index: 0;\r\n}\r\n\r\n@media only screen and (max-width:600px){\r\n  .pad[_ngcontent-%COMP%]{\r\n    padding-left: 70px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uYW50L3N0YXRlL3N0YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFHQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRTtxQkFDbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uYW50L3N0YXRlL3N0YXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmR7XHJcbiAgd2lkdGg6MzAwcHhcclxufVxyXG5cclxudGhlYWQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAxcHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDYsIDI0Nik7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgLyogbWluLXdpZHRoOiAxMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMHB4OyAqL1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4ucGFke1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmZpeGVkIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHdpZHRoOiA1ZW07XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IGF1dG87XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG50ZDpub3QoLmZpeGVkKSB7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gIC5wYWR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-state',
                templateUrl: './state.component.html',
                styleUrls: ['./state.component.css']
            }]
    }], function () { return [{ type: src_app_service_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/data-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/data-service.service.ts ***!
  \*************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DataServiceService {
    constructor(http) {
        this.http = http;
        // p rivate date = '07-25-2020'
        // private GlobaldataUrl ='https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/07-24-2020.csv'
        this.baseURL = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/`;
        this.GlobaldataUrl = "";
        this.dateWiseDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`;
        this.GlobalApi = 'https://coronavirus-19-api.herokuapp.com/countries';
        this.extantion = '.csv';
        this.StatewiseApi = 'https://api.covidindiatracker.com/state_data.json';
        let now = new Date();
        this.month = now.getMonth() + 1;
        this.year = now.getFullYear();
        this.date = now.getDate();
        this.date = this.GetDate(this.date);
        this.month = this.GetMonth(this.month);
        this.GlobaldataUrl = ` ${this.baseURL}${this.month}-${this.date}-${this.year}${this.extantion}`;
    }
    GetDate(date) {
        if (date < 10) {
            date -= 1;
            if (date == 0) {
                if (this.month == 4 || this.month == 9 || this.month == 11 || this.month == 6)
                    date = 30;
                else if (this.month == 2)
                    date = 28;
                else
                    date = 31;
                this.month = this.month - 1;
                return date;
            }
            return '0' + (date);
        }
        return date;
    }
    GetMonth(month) {
        if (month < 10) {
            if (month == 0)
                return '01';
            return '0' + month;
        }
        return month;
    }
    // Getglobaldata(){
    //   return this.http.get(this.GlobalApi).pipe(
    //     map(result=>{
    //       console.log("Getglobaldata"+result)
    //     })
    //   )
    // }
    Getdata() {
        return this.http.get(this.GlobalApi, { responseType: 'json' });
    }
    Getstatewisedata() {
        return this.http.get(this.StatewiseApi, { responseType: 'json' });
    }
    getdateWiseData() {
        return this.http.get(this.dateWiseDataUrl, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            let maindata = {};
            let rows = result.split('\n');
            let header = rows[0];
            let dates = header.split(/,(?=\S)/);
            dates.splice(0, 4);
            rows.splice(0, 1);
            rows.forEach(row => {
                let cols = row.split(/,(?=\S)/);
                let con = cols[1];
                cols.splice(0, 4);
                maindata[con] = [];
                cols.forEach((value, index) => {
                    let dw = {
                        cases: +value,
                        country: con,
                        date: new Date(Date.parse(dates[index]))
                    };
                    maindata[con].push(dw);
                });
            });
            return maindata;
        }));
    }
    getGlobalData() {
        return this.http.get(this.GlobaldataUrl, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            let data = [];
            let raw = {};
            let rows = result.split('\n');
            rows.splice(0, 1);
            rows.forEach(row => {
                let cols = row.split(/,(?=\S)/);
                // cols.splice(12, 2);
                let cs = {
                    country: cols[3],
                    confirmed: +cols[7],
                    deaths: +cols[8],
                    recovered: +cols[9],
                    active: +cols[10],
                };
                let temp = raw[cs.country];
                if (temp) {
                    temp.active = cs.active + temp.active;
                    temp.confirmed = cs.confirmed + temp.confirmed;
                    temp.deaths = cs.deaths + temp.deaths;
                    temp.recovered = cs.recovered + temp.recovered;
                    raw[cs.country] = temp;
                }
                else {
                    raw[cs.country] = cs;
                }
            });
            return Object.values(raw);
        })
        // catchError((error : HttpErrorResponse)=>{
        //   if(error.status==404)
        //   {
        //      this.date = this.date-1
        //      this.GlobaldataUrl = `${this.baseURL}${this.month}-${this.GetDate(this.date)}-${this.year}${this.extantion}`
        //      return this.getGlobalData()
        //   }
        // })
        );
    }
}
DataServiceService.ɵfac = function DataServiceService_Factory(t) { return new (t || DataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataServiceService, factory: DataServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\coronatracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map