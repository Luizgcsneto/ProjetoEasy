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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pessoas></app-pessoas>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pessoas/pessoas.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pessoas/pessoas.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-5\" *ngIf=\"visibilidadeTabela\">\n  <div class=\"border border-light rounded p-5\" >\n    <div>\n    <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"ExibirFormularioCadastro()\">\n      Nova Pessoa\n    </button>\n  </div>\n\n\n  <hr>\n\n  <table class=\"table table-striped table-hover table-sm\" *ngIf=\"pessoas\">\n    <tr class=\"thead-light\">\n      <th>Nome</th>\n      <th>Sobrenome</th>\n      <th>Idade</th>\n      <th>Profissão</th>\n      <th>Ações</th>\n    </tr>\n\n    <tr *ngFor=\"let pessoa of pessoas\">\n      <td>{{pessoa.nome}}</td>\n      <td>{{pessoa.sobreNome}}</td>\n      <td>{{pessoa.idade}}</td>\n      <td>{{pessoa.profissao}}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-sm btn-outline-info\">Atualizar</button> |\n        <button type=\"button\" class=\"btn btn-sm btn-outline-danger\">Excluir</button>\n      </td>\n    </tr>\n  </table>\n  </div>\n</div>\n\n\n<div class=\"container p-5\" *ngIf=\"visibilidadeFormulario\">\n  <div class=\"row\">\n    <div class=\"col-6 bourd bourd-light rounded p-5 shadow\" *ngIf=\"formulario\">\n      <h6>{{tituloFormulario}}</h6>\n      <hr>\n      <form [formGroup]=\"formulario\" (ngSubmit)=\"EnviarFormulario()\">\n\n        <div class=\"formGroup\">\n          <label>Nome:</label>\n          <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"nome\">\n        </div>\n\n        <div class=\"formGroup\">\n          <label>Sobrenome:</label>\n          <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"sobreNome\">\n        </div>\n\n        <div class=\"formGroup\">\n          <label>Idade:</label>\n          <input type=\"number\" class=\"form-control form-control-sm\" formControlName=\"idade\">\n        </div>\n\n        <div class=\"formGroup\">\n          <label>Profissão:</label>\n          <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"profissao\">\n        </div>\n        <br>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div>\n              <button type=\"submit\" class=\"btn btn-sm btn-outline-secondary\">Enviar</button>\n            </div>\n\n            <div class=\"pl-1\">\n              <button type=button class=\"btn btn-sm btn-light\" (click)=\"Voltar()\">Voltar</button>\n            </div>\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pessoas/pessoas.component */ "./src/app/components/pessoas/pessoas.component.ts");




const routes = [{
        path: 'pessoas', component: _components_pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_3__["PessoasComponent"]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AppAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pessoas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pessoas.service */ "./src/app/pessoas.service.ts");
/* harmony import */ var _components_pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pessoas/pessoas.component */ "./src/app/components/pessoas/pessoas.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_9__["PessoasComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _pessoas_service__WEBPACK_IMPORTED_MODULE_8__["PessoasService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/pessoas/pessoas.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pessoas/pessoas.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzL3Blc3NvYXMvcGVzc29hcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pessoas/pessoas.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pessoas/pessoas.component.ts ***!
  \*********************************************************/
/*! exports provided: PessoasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoasComponent", function() { return PessoasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_pessoas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pessoas.service */ "./src/app/pessoas.service.ts");




let PessoasComponent = class PessoasComponent {
    constructor(pessoasService) {
        this.pessoasService = pessoasService;
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
    }
    ngOnInit() {
        this.pessoasService.pegartodos().subscribe(resultado => {
            this.pessoas = resultado;
        });
    }
    ExibirFormularioCadastro() {
        this.visibilidadeTabela = false;
        this.visibilidadeFormulario = true;
        this.tituloFormulario = "Nova Pessoa";
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            sobreNome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            profissao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    EnviarFormulario() {
        const pessoa = this.formulario.value;
        this.pessoasService.salvarPessoa(pessoa).subscribe(resultado => {
            this.visibilidadeTabela = true;
            this.visibilidadeFormulario = false;
            alert("pessoa inserida com sucesso");
            this.pessoasService.pegartodos().subscribe(registros => {
                this.pessoas = registros;
            });
        });
    }
    ;
    Voltar() {
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
    }
};
PessoasComponent.ctorParameters = () => [
    { type: src_app_pessoas_service__WEBPACK_IMPORTED_MODULE_3__["PessoasService"] }
];
PessoasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pessoas',
        template: __webpack_require__(/*! raw-loader!./pessoas.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pessoas/pessoas.component.html"),
        styles: [__webpack_require__(/*! ./pessoas.component.css */ "./src/app/components/pessoas/pessoas.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pessoas_service__WEBPACK_IMPORTED_MODULE_3__["PessoasService"]])
], PessoasComponent);



/***/ }),

/***/ "./src/app/pessoas.service.ts":
/*!************************************!*\
  !*** ./src/app/pessoas.service.ts ***!
  \************************************/
/*! exports provided: PessoasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoasService", function() { return PessoasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PessoasService = class PessoasService {
    constructor(http) {
        this.http = http;
        this.url = 'https://localhost:5001/api/pessoas';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    pegartodos() {
        return this.http.get(this.url);
    }
    pegarPeloId(pessoaId) {
        const apiUrl = `${this.url}/${pessoaId}`;
        return this.http.get(apiUrl);
    }
    salvarPessoa(pessoa) {
        return this.http.post(this.url, pessoa, this.httpOptions);
    }
    atualizarPessoa(pessoa) {
        return this.http.put(this.url, pessoa, this.httpOptions);
    }
    excluirPessoa(pessoaId) {
        const apiUrl = `${this.url}/${pessoaId}`;
        return this.http.delete(apiUrl, this.httpOptions);
    }
};
PessoasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PessoasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PessoasService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Luiz  Neto\Desktop\CRUDAngularWEBAPI\AppAngular8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map