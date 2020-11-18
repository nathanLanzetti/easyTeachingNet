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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"notification\">\n    <p>Your notification here 😎</p>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/correctifs/correctifs/correctifs.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/correctifs/correctifs/correctifs.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"correctif\">\n    <div class=\"correctif-page\">\n        <div class=\"page-body\">\n            <ng-container *ngIf=\"testComplet\">\n                <div class=\"header-correctif\">\n                    <a (click)=\"backToTest()\">Back to Test</a>\n                    <h2>{{testComplet.test.name}}</h2>\n                </div>\n                <!-- <h2>{{testComplet.questionComplets.question.id}}</h2> -->\n                <div *ngFor=\"let question of testComplet?.questionComplets; let index = index\"\n                    class=\"questions-correctif\">\n                    <h3>{{index + 1}}) {{question.question.name}}</h3>\n                    <div *ngFor=\"let solution of question.solutions\" class=\"solutions-correctif\">\n                        <p *ngIf=\"solution.answer===1\">{{solution.text}}</p>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"main-head\">\n    <nav>\n        <h1 id=\"logo\">EasyTeaching</h1>\n        <ul *ngIf=\"currentUser\">\n            <li><a class=\"n-link\" routerLink=\"/questions\" routerLinkActive=\"active\">Questions</a></li>\n            <li><a class=\"n-link\" routerLink=\"/tests\" routerLinkActive=\"active\">Tests</a></li>\n            <li><a class=\"btn-logout\" (click)=\"logOut()\">Log&nbsp;Out</a></li>\n        </ul>\n    </nav>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/add-question-form/add-question-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions/add-question-form/add-question-form.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-form\">\n    <form [formGroup]=\"addQuestionForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"name-form\">\n            <label for=\"name\">Name :</label>\n            <input type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\">\n        </div>\n\n        <div class=\"cours-form\">\n            <label for=\"cours\">Subject :</label>\n            <div class=\"cours-form-select\">\n                <select name=\"cours\" id=\"cours\" formControlName=\"cours\">\n                    <option *ngFor=\"let c of professeursComplet?.cours\" [value]=\"c?.id\">{{c?.nom_cours}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"question-type-form\">\n            <div class=\"type-checkbox\">\n                <label for=\"check\">Multiple :</label>\n                <span class=\"custom-checkbox\" (click)=\"toggleMultiple()\"\n                    [ngClass]=\"{'checked': isMultiple==true}\">&#10004;</span>\n                <span class=\"message\">Check this for QCM</span>\n            </div>\n            <div class=\"nb-input\">\n                <input [ngClass]=\"{'visible': isMultiple==false}\" formControlName=\"nbSolutions\" (keyup)=\"createArray()\"\n                    type=\"number\" id=\"nbSolutions\" name=\"nbSolutions\" min=\"2\" max=\"5\">\n            </div>\n        </div>\n        <hr>\n        <!-- Solutions  -->\n        <ng-container *ngIf=\"isMultiple==false; else multiple\">\n            <div class=\"solution-form\">\n                <label for=\"\">Solution :</label>\n                <textarea id=\"solution\" name=\"solution\" formControlName=\"solution\" class=\"solution-textarea\"\n                    rows=\"3\"></textarea>\n            </div>\n        </ng-container>\n        <ng-template #multiple>\n            <div *ngFor=\"let i of numberLoop;let index = index\" class=\"solution-form\">\n                <label for=\"\">Solution {{i}} :</label>\n                <textarea [id]=\"'solution'+i\" [name]=\"'solution'+i\" [formControlName]=\"'solution'+i\"\n                    class=\"solution-textarea\" rows=\"3\"></textarea>\n            </div>\n            <div *ngIf=\"numberLoop\" class=\"answer-form\">\n                <label for=\"answer\">Answer : <span>Select the right answer</span></label>\n\n                <select name=\"answer\" id=\"answer\" formControlName=\"answer\">\n                    <option *ngFor=\"let i of numberLoop;let index = index\" [value]=\"i\">{{i}}</option>\n                </select>\n            </div>\n        </ng-template>\n        <button class=\"btn-question\" [disabled]=\"addQuestionForm.invalid\" type=\"submit\">Submit</button>\n\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/question-detail/question-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions/question-detail/question-detail.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"detail-question\"\n    [ngClass]=\"{'full-height' : view !== undefined, 'danger-question': view !== undefined && questionsOccurence > 2}\"\n    (dblclick)=\"editQuestion()\" [id]=\"questionComplet?.question.id\">\n\n    <ng-container *ngIf=\"view === undefined; else viewButton\">\n        <div *ngIf=\"questionComplet?.professeur.id === user.id\" class=\"question-button\">\n            <span (click)=\"onViewQuestion(questionComplet.question.id)\" class=\"edit\">✎</span>\n            <span (click)=\"emitDeletedQuestion()\" class=\"delete\">❌</span>\n        </div>\n    </ng-container>\n\n    <ng-template #viewButton>\n        <div class=\"question-button\">\n            <span *ngIf=\"!view\" (click)=\"emitAddedQuestion()\" class=\"view-button add\">➕</span>\n            <span *ngIf=\"view\" (click)=\"emitRemovedQuestion()\" class=\"view-button remove\">❌</span>\n        </div>\n    </ng-template>\n    <p>Question : {{questionComplet.question.name}}</p>\n    <p>Subject : {{questionComplet.cours.nom_cours}}</p>\n    <p><span>Created by {{questionComplet.professeur.name}}</span></p>\n    <div class=\"detail-solutions\">\n        <p *ngFor=\"let solution of questionComplet.solutions\" class=\"solutions\"\n            [ngClass]=\"{'right-answer': solution.answer === 1}\">{{solution.text}}\n            <span *ngIf=\"solution.answer === 1\">✔</span>\n        </p>\n    </div>\n    <p>Number of occurences : {{questionsOccurence}}</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/question-list/question-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions/question-list/question-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-container\">\r\n    <div class=\"flex box\">\r\n        <div class=\"search\">\r\n            <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"searchInput\" (blur)=\"resetSearch()\" id=\"searchInput\">\r\n            <span>🔍</span>\r\n        </div>\r\n        <h3>All questions</h3>\r\n        <div class=\"flex-select\">\r\n            <select name=\"select-cours\" id=\"select-cours\" [(ngModel)]=\"selectedOption\">\r\n                <option value=0>All</option>\r\n                <option *ngFor=\"let c of professeursComplet?.cours\" [value]=\"c.id\">{{c?.nom_cours}}</option>\r\n            </select>\r\n        </div>\r\n        <!-- <p>Selected option is {{selectedOption}}</p> -->\r\n\r\n        <ng-container *ngIf=\"observable$ | async as ob; else loading\">\r\n            <ng-container\r\n                *ngFor=\"let o of ob | filterProfesseurs: professeursComplet?.cours | filterSearch: searchInput| filterSelect: selectedOption\">\r\n                <app-question-detail [professeurComplet]=\"professeursComplet\" [questionComplet]=\"o\" [user]=\"user\"\r\n                    style=\"width: 100%;\" (questionDeleted)=\"deleteQuestion($event)\">\r\n                </app-question-detail>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n        <!-- Loading template, display animated gif (pacman)-->\r\n        <ng-template #loading>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                style=\"margin: auto; background: rgb(241, 242, 243) none repeat scroll 0% 0%; display: block; shape-rendering: auto;\"\r\n                width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n                <g>\r\n                    <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#1a39a4\">\r\n                        <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"1s\" values=\"95;35\" keyTimes=\"0;1\"\r\n                            begin=\"-0.67s\">\r\n                        </animate>\r\n                        <animate attributeName=\"fill-opacity\" repeatCount=\"indefinite\" dur=\"1s\" values=\"0;1;1\"\r\n                            keyTimes=\"0;0.2;1\" begin=\"-0.67s\"></animate>\r\n                    </circle>\r\n                    <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#1a39a4\">\r\n                        <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"1s\" values=\"95;35\" keyTimes=\"0;1\"\r\n                            begin=\"-0.33s\">\r\n                        </animate>\r\n                        <animate attributeName=\"fill-opacity\" repeatCount=\"indefinite\" dur=\"1s\" values=\"0;1;1\"\r\n                            keyTimes=\"0;0.2;1\" begin=\"-0.33s\"></animate>\r\n                    </circle>\r\n                    <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#1a39a4\">\r\n                        <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"1s\" values=\"95;35\" keyTimes=\"0;1\"\r\n                            begin=\"0s\">\r\n                        </animate>\r\n                        <animate attributeName=\"fill-opacity\" repeatCount=\"indefinite\" dur=\"1s\" values=\"0;1;1\"\r\n                            keyTimes=\"0;0.2;1\" begin=\"0s\"></animate>\r\n                    </circle>\r\n                </g>\r\n                <g transform=\"translate(-15 0)\">\r\n                    <path d=\"M50 50L20 50A30 30 0 0 0 80 50Z\" fill=\"#785471\" transform=\"rotate(90 50 50)\"></path>\r\n                    <path d=\"M50 50L20 50A30 30 0 0 0 80 50Z\" fill=\"#785471\">\r\n                        <animateTransform attributeName=\"transform\" type=\"rotate\" repeatCount=\"indefinite\" dur=\"1s\"\r\n                            values=\"0 50 50;45 50 50;0 50 50\" keyTimes=\"0;0.5;1\"></animateTransform>\r\n                    </path>\r\n                    <path d=\"M50 50L20 50A30 30 0 0 1 80 50Z\" fill=\"#785471\">\r\n                        <animateTransform attributeName=\"transform\" type=\"rotate\" repeatCount=\"indefinite\" dur=\"1s\"\r\n                            values=\"0 50 50;-45 50 50;0 50 50\" keyTimes=\"0;0.5;1\"></animateTransform>\r\n                    </path>\r\n                </g>\r\n            </svg>\r\n        </ng-template>\r\n\r\n    </div>\r\n    <div class=\"flex box add-form\">\r\n        <h3>Add a question</h3>\r\n        <app-add-question-form (questionCreated)=\"createQuestion($event)\" style=\"width: 100%;\"></app-add-question-form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/single-question/single-question.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions/single-question/single-question.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <ng-container *ngIf=\"question$ | async as question\">\n        <div class=\"question-container\">\n            <div class=\"question-single flex-box\">\n                <div class=\"form-question\">\n                    <h3>Modify Question</h3>\n                    <form [formGroup]=\"modifyQuestionForm\" (ngSubmit)=\"onSubmit()\" class=\"question-single\">\n                        <div class=\"name-form form-control\">\n                            <label for=\"nameInput\">Name :</label>\n                            <input type=\"text\" [value]=\"question.name\" name=\"nameInput\" formControlName=\"nameInput\">\n                        </div>\n                        <div class=\"cours-form-select form-control\">\n                            <label for=\"coursSelect\">Subject : </label>\n                            <select name=\"coursSelect\" id=\"coursSelect\" formControlName=\"coursSelect\">\n                                <ng-container *ngIf=\"professeurComplet$ | async as professeurComplet\">\n                                    <option *ngFor=\"let cours of professeurComplet.cours\" [value]=\"cours.id\"\n                                        [selected]=\"cours.id === question.cours\">\n                                        {{cours.nom_cours}}\n                                    </option>\n                                </ng-container>\n                            </select>\n                        </div>\n                        <button type=\"submit\" [disabled]=\"!modifyQuestionForm.dirty\"\n                            class=\"modify-button\">Modify</button>\n                    </form>\n                </div>\n                <ng-container *ngIf=\"solutions$ | async as solutions\">\n                    <ng-container *ngIf=\"solutions.length > 1\">\n                        <div class=\"right-answer form-control\">\n                            <label for=\"solutionSelect\">Modify the right answer :</label>\n                            <div class=\"same-row\">\n                                <select name=\"solutionSelect\" id=\"solutionSelect\" [(ngModel)]=\"rightAnswer\">\n                                    <option *ngFor=\"let solution of solutions; let index = index\" [value]=\"solution.id\">\n                                        {{index+1}}\n                                    </option>\n                                </select>\n                                <button type=\"submit\" (click)=\"onSave()\" [disabled]=\"previousRightAnswer == rightAnswer\"\n                                    class=\"modify-button save-button\" id=\"saveRightSolution\">Save</button>\n                            </div>\n\n                        </div>\n                    </ng-container>\n                </ng-container>\n            </div>\n            <div class=\"flex-solution-container\">\n                <div class=\"solutions-container\">\n                    <ng-container *ngIf=\"solutions$ | async as solutions\">\n                        <app-single-solution *ngFor=\"let solution of solutions; let i = index\" [solution]=\"solution\"\n                            [index]=\"i\" (solutionDeleted)=\"deleteSolution($event)\"\n                            [savedAnswerSelect]=\"previousRightAnswer\"></app-single-solution>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/solutions/single-solution/single-solution.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions/solutions/single-solution/single-solution.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"solution-single flex-box\" [ngClass]=\"{'right-answer' : solution.id == savedAnswerSelect}\">\n    <div class=\"solution-button\">\n        <span (click)=\"emitDeletedSolution()\" class=\"delete\">❌</span>\n    </div>\n    <h3>Modify Solution {{index+1}}</h3>\n\n    <div class=\"text-form form-control\">\n        <label for=\"solution\">Text :</label>\n        <textarea name=\"solution\" [(ngModel)]=\"solution.text\" class=\"solution-textarea\" rows=\"4\">\n            </textarea>\n    </div>\n    <button class=\"modify-button\" type=\"submit\" [disabled]=\"previousText === solution.text\"\n        (click)=\"onSubmit()\">Modify</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin-form/signin-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin-form/signin-form.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"signin-form\">\n    <div class=\"flex-sign\">\n    </div>\n    <div class=\"flex-sign form\">\n        <header class=\"form-head\">\n            <h3>Sign in</h3>\n        </header>\n        <p *ngIf=\"error\" class=\"error-message\">Your credentials don't match. Try again</p>\n        <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"mail-form\">\n                <label for=\"mail\">Email :</label>\n                <input type=\"mail\" id=\"mail\" name=\"mail\" formControlName=\"mail\">\n            </div>\n            <div class=\"password-form\">\n                <label for=\"password\">Password :</label>\n                <input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\">\n            </div>\n            <button type=\"submit\" [disabled]=\"signinForm.invalid\">Log In</button>\n        </form>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/add-test-form/add-test-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests/add-test-form/add-test-form.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-form\">\n    <form [formGroup]=\"addTestForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"name-form form-control\">\n            <label for=\"name\">Name :</label>\n            <input type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\">\n        </div>\n        <div class=\"cours-form form-control\">\n            <label for=\"cours\">Subject :</label>\n            <div class=\"cours-form-select\">\n                <select name=\"cours\" id=\"cours\" formControlName=\"cours\">\n                    <option *ngFor=\"let c of professeursComplet?.cours\" [value]=\"c?.id\">{{c?.nom_cours}}</option>\n                </select>\n            </div>\n        </div>\n        <button class=\"btn-test\" [disabled]=\"addTestForm.invalid\" type=\"submit\">Submit</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/single-test/single-test.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests/single-test/single-test.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <ng-container *ngIf=\"tests$ | async as test\">\n        <div class=\"test-container\">\n            <div class=\"test-single flex-box\">\n                <div class=\"form-test\">\n                    <h3>Modify Test</h3>\n                    <form [formGroup]=\"modifyTestForm\" (ngSubmit)=\"onSubmit()\" class=\"test-single\">\n                        <div class=\"name-form form-control\">\n                            <label for=\"nameInput\">Name :</label>\n                            <input type=\"text\" [value]=\"test.name\" name=\"nameInput\" formControlName=\"nameInput\" />\n                        </div>\n                        <div class=\"cours-form-select form-control\">\n                            <label for=\"coursSelect\">Subject : </label>\n                            <select name=\"coursSelect\" id=\"coursSelect\" formControlName=\"coursSelect\">\n                                <ng-container *ngIf=\"professeurComplet$ | async as professeurComplet\">\n                                    <option *ngFor=\"let cours of professeurComplet.cours\" [value]=\"cours.id\"\n                                        [selected]=\"cours.id === test.cours\">\n                                        {{cours.nom_cours}}\n                                    </option>\n                                </ng-container>\n                            </select>\n                        </div>\n                        <!-- <p>{{this.modifyTestForm.get('coursSelect').value}}</p> -->\n                        <button type=\"submit\" [disabled]=\"!modifyTestForm.dirty\" class=\"modify-button\">Modify</button>\n                    </form>\n                </div>\n                <!-- Save for the questions + link to correctif -->\n                <div class=\"random-menu\">\n                    <p><span style=\"font-size: 1.1rem;\">Enter a number and see what happens !</span></p>\n                    <div class=\"random\">\n                        <input type=\"number\" name=\"numberOfQuestion\" id=\"numberOfQuestion\"\n                            [(ngModel)]=\"numberOfQuestion\">\n                        <button (click)=\"generateRandomTest()\"\n                            [disabled]=\"numberOfQuestion === null || numberOfQuestion === undefined\"\n                            class=\"modify-button generate-random-button\">Surprise me\n                            !</button>\n                    </div>\n                </div>\n                <div class=\"test-action\">\n                    <button (click)=\"navigateToCorrectif()\" class=\"modify-button see-correctif\">See Correctif !\n                    </button>\n                    <button (click)=\"saveTest()\" class=\"modify-button save-button\">Save your test !</button>\n                </div>\n            </div>\n            <div class=\"flex-question-container\">\n                <div class=\"views\">\n                    <div class=\"active-view added-view\" (click)=\"setActiveView($event)\">\n                        <span>Questions Added</span>\n                    </div>\n                    <div class=\"to-add-view\" (click)=\"setActiveView($event)\">\n                        <span>Questions to Add</span>\n                    </div>\n                </div>\n                <div class=\"question-container\">\n\n                    <ng-container *ngIf=\"addedView; else toAdd\">\n                        <app-question-detail\n                            *ngFor=\"let qC of currentTestsComplet?.questionComplets | filterQuestionByCours: unmodifiedTest.cours\"\n                            [professeurComplet]=\"professeursComplet\" [questionComplet]=\"qC\" [user]=\"user\"\n                            style=\"width: 100%;\" [view]=\"addedView\" (questionRemoved)=\"removeQuestion($event)\">\n                        </app-question-detail>\n                    </ng-container>\n                    <ng-template #toAdd>\n                        <app-question-detail\n                            *ngFor=\"let qC of allQuestionsComplets | filterQuestionByCours: unmodifiedTest.cours | filterQuestionDoublon: currentTestsComplet.questionComplets\"\n                            [professeurComplet]=\"professeursComplet\" [questionComplet]=\"qC\" [user]=\"user\"\n                            style=\"width: 100%;\" [view]=\"addedView\" (questionAdded)=\"addQuestion($event)\">\n                        </app-question-detail>\n                    </ng-template>\n\n                    <!-- <div class=\"box\"></div>\n                    <div class=\"box\"></div>\n                    <div class=\"box\"></div>\n                    <div class=\"box\"></div>\n                    <div class=\"box\"></div>\n                    <div class=\"box\"></div>\n                    <div class=\"box\"></div> -->\n\n                    <!-- \n                        <app-question-detail [professeurComplet]=\"professeursComplet\" [questionComplet]=\"o\" [user]=\"user\"\n                    style=\"width: 100%;\" (questionDeleted)=\"deleteQuestion($event)\">\n                </app-question-detail>\n                     -->\n\n                    <!-- Display question to be added (use filter ?) -->\n                    <!-- <ng-container *ngIf=\"solutions$ | async as solutions\">\n                        <app-single-solution *ngFor=\"let solution of solutions; let i = index\" [solution]=\"solution\"\n                            [index]=\"i\" (solutionDeleted)=\"deleteSolution($event)\"\n                            [savedAnswerSelect]=\"previousRightAnswer\"></app-single-solution>\n                    </ng-container> -->\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/test-detail/test-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests/test-detail/test-detail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"detail-test\" [id]=\"test?.id\">\n    <div *ngIf=\"test?.author === user.id\" class=\"test-button\">\n        <span (click)=\"onViewTest(test.id)\" class=\"edit\">✎</span>\n        <span (click)=\"emitDeletedTest()\" class=\"delete\">❌</span>\n    </div>\n    <p>Test : {{test.name}}</p>\n    <p *ngIf=\"cours$ | async as cours\">Subject : {{cours.nom_cours}}</p>\n    <p *ngIf=\"professeurs$ | async as professeurs\"><span>Created by {{professeurs.name}}</span></p>\n\n    <div class=\"detail-solutions\">\n        <ng-container *ngIf=\"questions_tests$ | async as qT\">\n            <p *ngIf=\"qT.length; else noQuestion\" class=\"question no-question\">\n                This test contains {{qT.length}} questions ! 💪\n            </p>\n            <ng-template #noQuestion>\n                <div class=\"question question-not-empty\">\n                    <p>This test is empty 😢 Start adding questions !</p>\n                </div>\n            </ng-template>\n        </ng-container>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/test-list/test-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests/test-list/test-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-container\">\n    <div class=\"flex box\">\n        <div class=\"search\">\n            <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"searchInput\" (blur)=\"resetSearch()\" id=\"searchInput\">\n            <span>🔍</span>\n        </div>\n        <h3>All Tests</h3>\n        <div class=\"flex-select\">\n            <select name=\"select-cours\" id=\"select-cours\" [(ngModel)]=\"selectedCoursOption\">\n                <option value=0>All</option>\n                <option *ngFor=\"let c of professeursComplet?.cours\" [value]=\"c.id\">{{c?.nom_cours}}</option>\n            </select>\n        </div>\n        <!-- <p>Selected option is {{selectedOption}}</p> -->\n\n        <ng-container *ngIf=\"tests$ | async as tests; else loading\">\n            <ng-container\n                *ngFor=\"let test of tests | filterProfesseursTests: professeursComplet?.cours | filterSearchTest: searchInput | filterCoursTests: selectedCoursOption\">\n                <app-test-detail [professeurComplet]=\"professeursComplet\" [test]=\"test\" [user]=\"user\"\n                    (testDeleted)=\"deleteTest($event)\" style=\"width: 100%;\">\n                </app-test-detail>\n            </ng-container>\n        </ng-container>\n\n        <!-- Loading template, display animated gif (pacman)-->\n        <ng-template #loading>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                style=\"margin: auto; background: rgb(241, 242, 243) none repeat scroll 0% 0%; display: block; shape-rendering: auto;\"\n                width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n                <g>\n                    <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#1a39a4\">\n                        <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"1s\" values=\"95;35\" keyTimes=\"0;1\"\n                            begin=\"-0.67s\">\n                        </animate>\n                        <animate attributeName=\"fill-opacity\" repeatCount=\"indefinite\" dur=\"1s\" values=\"0;1;1\"\n                            keyTimes=\"0;0.2;1\" begin=\"-0.67s\"></animate>\n                    </circle>\n                    <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#1a39a4\">\n                        <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"1s\" values=\"95;35\" keyTimes=\"0;1\"\n                            begin=\"-0.33s\">\n                        </animate>\n                        <animate attributeName=\"fill-opacity\" repeatCount=\"indefinite\" dur=\"1s\" values=\"0;1;1\"\n                            keyTimes=\"0;0.2;1\" begin=\"-0.33s\"></animate>\n                    </circle>\n                    <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#1a39a4\">\n                        <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"1s\" values=\"95;35\" keyTimes=\"0;1\"\n                            begin=\"0s\">\n                        </animate>\n                        <animate attributeName=\"fill-opacity\" repeatCount=\"indefinite\" dur=\"1s\" values=\"0;1;1\"\n                            keyTimes=\"0;0.2;1\" begin=\"0s\"></animate>\n                    </circle>\n                </g>\n                <g transform=\"translate(-15 0)\">\n                    <path d=\"M50 50L20 50A30 30 0 0 0 80 50Z\" fill=\"#785471\" transform=\"rotate(90 50 50)\"></path>\n                    <path d=\"M50 50L20 50A30 30 0 0 0 80 50Z\" fill=\"#785471\">\n                        <animateTransform attributeName=\"transform\" type=\"rotate\" repeatCount=\"indefinite\" dur=\"1s\"\n                            values=\"0 50 50;45 50 50;0 50 50\" keyTimes=\"0;0.5;1\"></animateTransform>\n                    </path>\n                    <path d=\"M50 50L20 50A30 30 0 0 1 80 50Z\" fill=\"#785471\">\n                        <animateTransform attributeName=\"transform\" type=\"rotate\" repeatCount=\"indefinite\" dur=\"1s\"\n                            values=\"0 50 50;-45 50 50;0 50 50\" keyTimes=\"0;0.5;1\"></animateTransform>\n                    </path>\n                </g>\n            </svg>\n        </ng-template>\n\n    </div>\n    <div class=\"flex box add-form\">\n        <h3>Add a Test</h3>\n        <app-add-test-form [professeursComplet]=\"professeursComplet\" style=\"width: 100%;\"\n            (testCreated)=\"createTest($event)\"></app-add-test-form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Models/ProfesseursComplet.ts":
/*!**********************************************!*\
  !*** ./src/app/Models/ProfesseursComplet.ts ***!
  \**********************************************/
/*! exports provided: ProfesseursComplet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesseursComplet", function() { return ProfesseursComplet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ProfesseursComplet {
    constructor(professeur = null, cours = []) {
        this._professeur = professeur;
        this._cours = cours;
    }
    toProfesseursCompletDTO() {
        return {
            professeur: this._professeur,
            cours: this._cours
        };
    }
    fromProfesseursCompletDTO(dto) {
        Object.assign(this, dto);
        return this;
    }
    get professeurs() {
        return this._professeur;
    }
    set professeurs(obj) {
        this._professeur = obj;
    }
    get cours() {
        return this._cours;
    }
    set cours(obj) {
        this._cours = obj;
    }
}


/***/ }),

/***/ "./src/app/Models/Questions.ts":
/*!*************************************!*\
  !*** ./src/app/Models/Questions.ts ***!
  \*************************************/
/*! exports provided: Questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Questions {
    constructor(id = -1, name = "", author = -1, cours = -1) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._cours = cours;
    }
    toQuestionsDTO() {
        return {
            id: this._id,
            name: this._name,
            author: this._author,
            cours: this._cours
        };
    }
    fromQuestionsDTO(dto) {
        Object.assign(this, dto);
        return this;
    }
    equals(obj) {
        if (obj instanceof Questions) {
            return this._id === obj._id;
        }
        return false;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get cours() {
        return this._cours;
    }
    set cours(value) {
        this._cours = value;
    }
}


/***/ }),

/***/ "./src/app/Models/QuestionsComplet.ts":
/*!********************************************!*\
  !*** ./src/app/Models/QuestionsComplet.ts ***!
  \********************************************/
/*! exports provided: QuestionsComplet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComplet", function() { return QuestionsComplet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class QuestionsComplet {
    constructor(question = null, professeur = null, cours = null, solutions = []) {
        this._question = question;
        this._professeur = professeur;
        this._cours = cours;
        this._solutions = solutions;
    }
    toQuestionsCompletDTO() {
        return {
            question: this._question,
            professeur: this._professeur,
            cours: this._cours,
            solutions: this._solutions
        };
    }
    fromQuestionsCompletDTO(dto) {
        Object.assign(this, dto);
        return this;
    }
    get question() {
        return this._question;
    }
    set question(obj) {
        this._question = obj;
    }
    get professeur() {
        return this._professeur;
    }
    set professeur(obj) {
        this._professeur = obj;
    }
    get cours() {
        return this._cours;
    }
    set cours(obj) {
        this._cours = obj;
    }
    get solutions() {
        return this._solutions;
    }
    set solutions(obj) {
        this._solutions = obj;
    }
}


/***/ }),

/***/ "./src/app/Models/Questions_Tests.ts":
/*!*******************************************!*\
  !*** ./src/app/Models/Questions_Tests.ts ***!
  \*******************************************/
/*! exports provided: Questions_Tests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions_Tests", function() { return Questions_Tests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Questions_Tests {
    constructor(id_questions = -1, id_tests = -1) {
        this._id_questions = id_questions;
        this._id_tests = id_tests;
    }
    toQuestions_TestsDTO() {
        return {
            id_questions: this._id_questions,
            id_tests: this._id_tests
        };
    }
    fromQuestion_TestsDTO(dto) {
        Object.assign(this, dto);
        return this;
    }
    get id_questions() {
        return this._id_questions;
    }
    set id_questions(value) {
        this._id_questions = value;
    }
    get id_tests() {
        return this._id_tests;
    }
    set id_tests(value) {
        this._id_tests = value;
    }
}


/***/ }),

/***/ "./src/app/Models/Solutions.ts":
/*!*************************************!*\
  !*** ./src/app/Models/Solutions.ts ***!
  \*************************************/
/*! exports provided: Solutions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solutions", function() { return Solutions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Solutions {
    constructor(id = -1, text = "", id_questions = -1, answer = -1) {
        this._id = id;
        this._text = text;
        this._id_questions = id_questions;
        this._answer = answer;
    }
    toSolutionsDTO() {
        return {
            id: this._id,
            text: this._text,
            id_questions: this._id_questions,
            answer: this._answer
        };
    }
    fromSolutionsDTO(dto) {
        Object.assign(this, dto);
        return this;
    }
    equals(obj) {
        if (obj instanceof Solutions) {
            return this._id === obj._id;
        }
        return false;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get id_questions() {
        return this._id_questions;
    }
    set id_questions(value) {
        this._id_questions = value;
    }
    get answer() {
        return this._answer;
    }
    set answer(value) {
        this._answer = value;
    }
}


/***/ }),

/***/ "./src/app/Models/Tests.ts":
/*!*********************************!*\
  !*** ./src/app/Models/Tests.ts ***!
  \*********************************/
/*! exports provided: Tests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tests", function() { return Tests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Tests {
    constructor(id = -1, name = "", author = -1, cours = -1) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._cours = cours;
    }
    toTestsDTO() {
        return {
            id: this._id,
            name: this._name,
            author: this._author,
            cours: this._cours
        };
    }
    fromTestsDTO(dto) {
        Object.assign(this, dto);
        return this;
    }
    equals(obj) {
        if (obj instanceof Tests) {
            return this._id === obj._id;
        }
        return false;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get cours() {
        return this._cours;
    }
    set cours(value) {
        this._cours = value;
    }
}


/***/ }),

/***/ "./src/app/Models/TestsComplet.ts":
/*!****************************************!*\
  !*** ./src/app/Models/TestsComplet.ts ***!
  \****************************************/
/*! exports provided: TestsComplet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComplet", function() { return TestsComplet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TestsComplet {
    constructor(test = null, questionsComplets = []) {
        this._test = test;
        this._questionComplets = questionsComplets;
    }
    toTestsCompletDTO() {
        return {
            test: this._test,
            questionComplets: this._questionComplets
        };
    }
    fromTestsCompletDTO(dto) {
        Object.assign(this, dto);
        return this;
    }
    get test() {
        return this._test;
    }
    set test(value) {
        this._test = value;
    }
    get questionComplets() {
        return this._questionComplets;
    }
    set questionComplets(value) {
        this._questionComplets = value;
    }
}


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
/* harmony import */ var _signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-form/signin-form.component */ "./src/app/signin-form/signin-form.component.ts");
/* harmony import */ var _questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/question-list/question-list.component */ "./src/app/questions/question-list/question-list.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/auth.guard */ "./src/app/helpers/auth.guard.ts");
/* harmony import */ var _questions_single_question_single_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions/single-question/single-question.component */ "./src/app/questions/single-question/single-question.component.ts");
/* harmony import */ var _tests_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tests/test-list/test-list.component */ "./src/app/tests/test-list/test-list.component.ts");
/* harmony import */ var _tests_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tests/single-test/single-test.component */ "./src/app/tests/single-test/single-test.component.ts");
/* harmony import */ var _correctifs_correctifs_correctifs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./correctifs/correctifs/correctifs.component */ "./src/app/correctifs/correctifs/correctifs.component.ts");










const routes = [
    { path: 'auth/signin', component: _signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_3__["SigninFormComponent"] },
    { path: 'questions', canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_4__["QuestionListComponent"] },
    { path: 'questions/view/:id', canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _questions_single_question_single_question_component__WEBPACK_IMPORTED_MODULE_6__["SingleQuestionComponent"] },
    { path: 'tests', canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _tests_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_7__["TestListComponent"] },
    { path: 'tests/view/:id', canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _tests_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_8__["SingleTestComponent"] },
    { path: 'correctifs/:id', canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _correctifs_correctifs_correctifs_component__WEBPACK_IMPORTED_MODULE_9__["CorrectifsComponent"] },
    { path: '', redirectTo: 'questions', pathMatch: 'full' /*prevent bugs on empty paths*/ },
    { path: '**', redirectTo: 'questions' }
];
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification {\r\n  width: 200px;\r\n  height: 70px;\r\n  background: #35d75a;\r\n  position: fixed;\r\n  top: 10rem;\r\n  z-index: 900;\r\n  left: 5rem;\r\n  border-radius: 5px;\r\n  padding: 1.8rem 1rem;\r\n  transform: translateX(-150%);\r\n  opacity: 1;\r\n  transition: transform 0.5s ease;\r\n}\r\n.visible {\r\n  transform: translateX(0%);\r\n}\r\n.danger {\r\n  background: rgb(253, 92, 92);\r\n}\r\n.warning {\r\n  background: rgb(255, 144, 70);\r\n}\r\n.info {\r\n  background: rgb(91, 139, 255);\r\n}\r\n.success {\r\n  background: #35d75a;\r\n}\r\n.random {\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(211, 52, 255) 17%,\r\n    rgb(105, 85, 159) 79%\r\n  );\r\n}\r\np {\r\n  font-size: 1.4rem;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFOzs7O0dBSUM7QUFDSDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiYWNrZ3JvdW5kOiAjMzVkNzVhO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwcmVtO1xyXG4gIHotaW5kZXg6IDkwMDtcclxuICBsZWZ0OiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxLjhyZW0gMXJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxufVxyXG4udmlzaWJsZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgOTIsIDkyKTtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE0NCwgNzApO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDkxLCAxMzksIDI1NSk7XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjMzVkNzVhO1xyXG59XHJcbi5yYW5kb20ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEzMmRlZyxcclxuICAgIHJnYigyMTEsIDUyLCAyNTUpIDE3JSxcclxuICAgIHJnYigxMDUsIDg1LCAxNTkpIDc5JVxyXG4gICk7XHJcbn1cclxucCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

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
        this.title = 'bloc3-projet-aout-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin-form/signin-form.component */ "./src/app/signin-form/signin-form.component.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./questions/question-list/question-list.component */ "./src/app/questions/question-list/question-list.component.ts");
/* harmony import */ var _questions_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./questions/question-detail/question-detail.component */ "./src/app/questions/question-detail/question-detail.component.ts");
/* harmony import */ var _questions_add_question_form_add_question_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./questions/add-question-form/add-question-form.component */ "./src/app/questions/add-question-form/add-question-form.component.ts");
/* harmony import */ var _questions_single_question_single_question_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./questions/single-question/single-question.component */ "./src/app/questions/single-question/single-question.component.ts");
/* harmony import */ var _questions_filter_select_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./questions/filter-select.pipe */ "./src/app/questions/filter-select.pipe.ts");
/* harmony import */ var _questions_filter_professeurs_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./questions/filter-professeurs.pipe */ "./src/app/questions/filter-professeurs.pipe.ts");
/* harmony import */ var _questions_solutions_single_solution_single_solution_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./questions/solutions/single-solution/single-solution.component */ "./src/app/questions/solutions/single-solution/single-solution.component.ts");
/* harmony import */ var _tests_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tests/test-list/test-list.component */ "./src/app/tests/test-list/test-list.component.ts");
/* harmony import */ var _tests_add_test_form_add_test_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tests/add-test-form/add-test-form.component */ "./src/app/tests/add-test-form/add-test-form.component.ts");
/* harmony import */ var _tests_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tests/test-detail/test-detail.component */ "./src/app/tests/test-detail/test-detail.component.ts");
/* harmony import */ var _tests_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tests/single-test/single-test.component */ "./src/app/tests/single-test/single-test.component.ts");
/* harmony import */ var _tests_filter_professeurs_tests_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tests/filter-professeurs-tests.pipe */ "./src/app/tests/filter-professeurs-tests.pipe.ts");
/* harmony import */ var _tests_filter_cours_tests_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tests/filter-cours-tests.pipe */ "./src/app/tests/filter-cours-tests.pipe.ts");
/* harmony import */ var _tests_filter_question_by_cours_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tests/filter-question-by-cours.pipe */ "./src/app/tests/filter-question-by-cours.pipe.ts");
/* harmony import */ var _tests_filter_question_doublon_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tests/filter-question-doublon.pipe */ "./src/app/tests/filter-question-doublon.pipe.ts");
/* harmony import */ var _correctifs_correctifs_correctifs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./correctifs/correctifs/correctifs.component */ "./src/app/correctifs/correctifs/correctifs.component.ts");
/* harmony import */ var _questions_filter_search_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./questions/filter-search.pipe */ "./src/app/questions/filter-search.pipe.ts");
/* harmony import */ var _tests_filter_search_test_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tests/filter-search-test.pipe */ "./src/app/tests/filter-search-test.pipe.ts");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_8__["SigninFormComponent"],
            _questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_11__["QuestionListComponent"],
            _questions_question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_12__["QuestionDetailComponent"],
            _questions_add_question_form_add_question_form_component__WEBPACK_IMPORTED_MODULE_13__["AddQuestionFormComponent"],
            _questions_single_question_single_question_component__WEBPACK_IMPORTED_MODULE_14__["SingleQuestionComponent"],
            _questions_filter_select_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterSelectPipe"],
            _questions_filter_professeurs_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterProfesseursPipe"],
            _questions_solutions_single_solution_single_solution_component__WEBPACK_IMPORTED_MODULE_17__["SingleSolutionComponent"],
            _tests_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_18__["TestListComponent"],
            _tests_add_test_form_add_test_form_component__WEBPACK_IMPORTED_MODULE_19__["AddTestFormComponent"],
            _tests_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_20__["TestDetailComponent"],
            _tests_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_21__["SingleTestComponent"],
            _tests_filter_professeurs_tests_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterProfesseursTestsPipe"],
            _tests_filter_cours_tests_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterProfesseursCoursPipe"],
            _tests_filter_question_by_cours_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterQuestionByCoursPipe"],
            _tests_filter_question_doublon_pipe__WEBPACK_IMPORTED_MODULE_25__["FilterQuestionDoublonPipe"],
            _correctifs_correctifs_correctifs_component__WEBPACK_IMPORTED_MODULE_26__["CorrectifsComponent"],
            _questions_filter_search_pipe__WEBPACK_IMPORTED_MODULE_27__["FilterSearchPipe"],
            _tests_filter_search_test_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterSearchTestPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/correctifs/correctifs/correctifs.component.css":
/*!****************************************************************!*\
  !*** ./src/app/correctifs/correctifs/correctifs.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#correctif {\r\n  min-height: 90vh;\r\n  /* background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center; */\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(52, 130, 255) 17%,\r\n    rgba(255, 176, 176, 1) 79%\r\n  );\r\n}\r\n.correctif-page {\r\n  position: relative;\r\n  min-height: 85vh;\r\n  width: 75%;\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  background: white;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n.page-body {\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n.header-correctif a {\r\n  cursor: pointer;\r\n  border: 2px solid #52275f;\r\n  display: inline-block;\r\n  color: white;\r\n  background: #52275f;\r\n  font-size: 1.8rem;\r\n  padding: 1.5rem;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 0;\r\n  left: -3rem;\r\n  transform: translateY(35%);\r\n  transition: all 0.2s ease;\r\n}\r\n.header-correctif a:hover {\r\n  transform: translateY(30%) translateX(-5%);\r\n  background: #7d3c91;\r\n}\r\n.page-body h2 {\r\n  text-align: center;\r\n  padding: 2rem;\r\n}\r\n.questions-correctif {\r\n  margin: 2rem 0rem;\r\n}\r\n.questions-correctif h3 {\r\n  margin: 2rem 0rem;\r\n}\r\n.solutions-correctif {\r\n  background: lightgreen;\r\n  text-align: start;\r\n  border-radius: 5px;\r\n}\r\n.solutions-correctif p {\r\n  padding: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycmVjdGlmcy9jb3JyZWN0aWZzL2NvcnJlY3RpZnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQjs7Z0NBRThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCOzs7O0dBSUM7QUFDSDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBR2xCLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvcnJlY3RpZnMvY29ycmVjdGlmcy9jb3JyZWN0aWZzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29ycmVjdGlmIHtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxMzJkZWcsXHJcbiAgICByZ2IoNTIsIDEzMCwgMjU1KSAxNyUsXHJcbiAgICByZ2JhKDI1NSwgMTc2LCAxNzYsIDEpIDc5JVxyXG4gICk7XHJcbn1cclxuLmNvcnJlY3RpZi1wYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogODV2aDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLnBhZ2UtYm9keSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmhlYWRlci1jb3JyZWN0aWYgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MjI3NWY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjNTIyNzVmO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtM3JlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzUlKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcbi5oZWFkZXItY29ycmVjdGlmIGE6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMCUpIHRyYW5zbGF0ZVgoLTUlKTtcclxuICBiYWNrZ3JvdW5kOiAjN2QzYzkxO1xyXG59XHJcbi5wYWdlLWJvZHkgaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi5xdWVzdGlvbnMtY29ycmVjdGlmIHtcclxuICBtYXJnaW46IDJyZW0gMHJlbTtcclxufVxyXG4ucXVlc3Rpb25zLWNvcnJlY3RpZiBoMyB7XHJcbiAgbWFyZ2luOiAycmVtIDByZW07XHJcbn1cclxuLnNvbHV0aW9ucy1jb3JyZWN0aWYge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5zb2x1dGlvbnMtY29ycmVjdGlmIHAge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/correctifs/correctifs/correctifs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/correctifs/correctifs/correctifs.component.ts ***!
  \***************************************************************/
/*! exports provided: CorrectifsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrectifsComponent", function() { return CorrectifsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_tests_complet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tests-complet.service */ "./src/app/services/tests-complet.service.ts");
/* harmony import */ var src_app_Models_TestsComplet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/TestsComplet */ "./src/app/Models/TestsComplet.ts");





let CorrectifsComponent = class CorrectifsComponent {
    constructor(route, router, testsCompletService) {
        this.route = route;
        this.router = router;
        this.testsCompletService = testsCompletService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.getTestsCompletObservable(this.id);
        this.getTestsComplet(this.id);
    }
    ngOnDestroy() {
        for (let i = this.subscriptions.length - 1; i >= 0; i--) {
            const subscription = this.subscriptions[i];
            subscription && subscription.unsubscribe();
            this.subscriptions.pop();
        }
    }
    getTestsCompletObservable(id) {
        this.testsComplet$ = this.testsCompletService.get(id);
    }
    getTestsComplet(id) {
        const sub = this.testsCompletService
            .get(id)
            .subscribe(testCompletDTO => {
            this.testComplet = new src_app_Models_TestsComplet__WEBPACK_IMPORTED_MODULE_4__["TestsComplet"]().fromTestsCompletDTO(testCompletDTO);
            console.log(this.testComplet);
        });
        this.subscriptions.push(sub);
    }
    backToTest() {
        this.router.navigate(['/tests', 'view', this.id]);
    }
};
CorrectifsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_tests_complet_service__WEBPACK_IMPORTED_MODULE_3__["TestsCompletService"] }
];
CorrectifsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-correctifs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./correctifs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/correctifs/correctifs/correctifs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./correctifs.component.css */ "./src/app/correctifs/correctifs/correctifs.component.css")).default]
    })
], CorrectifsComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-head {\r\n  background: #52275f;\r\n  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.3);\r\n  color: white;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0px;\r\n  z-index: 15;\r\n}\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  min-height: 10vh;\r\n  padding: 1rem 2rem;\r\n  flex-wrap: wrap;\r\n}\r\nnav > h1 {\r\n  font-size: 2rem;\r\n}\r\nnav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex: 1 1 40rem;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.n-link {\r\n  position: relative;\r\n  overflow: hidden;\r\n  transition: transform 1s, opacity 0.5s ease-in-out 0.5s, font-weight 0.2s,\r\n    font-size 0.2s;\r\n  text-align: center;\r\n  justify-content: center;\r\n  padding: 1em 2em;\r\n  font-size: 1.5rem;\r\n}\r\n.n-link::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: -10%;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: white;\r\n  transition: 0.2s transform;\r\n  z-index: -1;\r\n  opacity: 0;\r\n}\r\n.n-link:hover::before {\r\n  transform: translateX(10%);\r\n  opacity: 1;\r\n}\r\n.btn-logout {\r\n  font-size: 1.5rem;\r\n  padding: 0.75rem 1.5rem;\r\n  border: 2px solid #52275f;\r\n  background: white;\r\n  transition: all 0.2s ease;\r\n  color: #52275f;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n.btn-logout:hover {\r\n  background: rgb(255, 44, 44);\r\n  color: white;\r\n  border-color: rgb(255, 44, 44);\r\n}\r\n#logo {\r\n  flex: 5 1 30rem;\r\n}\r\n.active {\r\n  font-weight: bold;\r\n  font-size: 1.8rem;\r\n}\r\n/* \r\n.active {\r\n  border-radius: 10px;\r\n  color: #52275f;\r\n  background: #fff;\r\n} */\r\n.active.n-link:hover::before {\r\n  height: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtrQkFDZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBOzs7OztHQUtHO0FBRUg7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkIHtcclxuICBiYWNrZ3JvdW5kOiAjNTIyNzVmO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogMTU7XHJcbn1cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxubmF2ID4gaDEge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAxIDQwcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubi1saW5rIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMC41cyBlYXNlLWluLW91dCAwLjVzLCBmb250LXdlaWdodCAwLjJzLFxyXG4gICAgZm9udC1zaXplIDAuMnM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLm4tbGluazo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogLTEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubi1saW5rOmhvdmVyOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG4tbG9nb3V0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgY29sb3I6ICM1MjI3NWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1sb2dvdXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDQ0LCA0NCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgNDQsIDQ0KTtcclxufVxyXG4jbG9nbyB7XHJcbiAgZmxleDogNSAxIDMwcmVtO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxufVxyXG4vKiBcclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogIzUyMjc1ZjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59ICovXHJcblxyXG4uYWN0aXZlLm4tbGluazpob3Zlcjo6YmVmb3JlIHtcclxuICBoZWlnaHQ6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.currentUserSub.subscribe(x => this.currentUser = x);
    }
    logOut() {
        this.authService.logout();
        this.router.navigate(["/auth", "signin"]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(next, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so true
            return true;
        }
        // isn't logged in => go back to singin page
        this.router.navigate(["/auth", "signin"]);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/questions/add-question-form/add-question-form.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/questions/add-question-form/add-question-form.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-form {\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n.name-form {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.cours-form {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.question-type-form {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n.custom-checkbox {\r\n  border: 2px solid #52275f;\r\n  /* padding: 1.8rem; */\r\n  width: 20%;\r\n  border-radius: 3px;\r\n  transition: all 0.2s ease;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-size: 2.7rem;\r\n  text-align: center;\r\n}\r\n.custom-checkbox:hover {\r\n  background: #52275f;\r\n}\r\n.checked {\r\n  background: #52275f;\r\n}\r\n.visible {\r\n  visibility: hidden;\r\n}\r\nform hr {\r\n  margin: 3rem 0rem;\r\n  width: 100%;\r\n  color: #52275f;\r\n}\r\n.type-checkbox {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 2 20rem;\r\n  position: relative;\r\n}\r\n.type-checkbox span.message {\r\n  position: absolute;\r\n  color: #474747;\r\n  margin: 0.5rem 0rem;\r\n  bottom: 0;\r\n  left: 25%;\r\n  font-size: 1.1rem;\r\n}\r\n.nb-input {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 2 1 20rem;\r\n  justify-items: flex-end;\r\n}\r\n.solution-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.solution-form > textarea {\r\n  border: solid 2px #52275f;\r\n  border-radius: 3px;\r\n  resize: vertical;\r\n  padding: 1.5rem;\r\n}\r\n/* Select */\r\n.cours-form-select {\r\n  width: 100%;\r\n  display: flex;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n/* overwrite select */\r\nselect {\r\n  -webktit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  color: black;\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\n.cours-form-select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: #52275f;\r\n  overflow: hidden;\r\n  /* transform: translateY(50%); */\r\n}\r\ninput {\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\nlabel {\r\n  font-size: 1.4rem;\r\n  color: black;\r\n  padding: 1rem 0rem;\r\n}\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.answer-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n.answer-form::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: #52275f;\r\n  overflow: hidden;\r\n  transform: translateY(90%);\r\n}\r\n.answer-form > label > span {\r\n  float: right;\r\n  font-size: 1.1rem;\r\n  text-align: center;\r\n  margin-top: 0.3rem;\r\n  color: #474747;\r\n}\r\n.btn-question {\r\n  margin-top: 1.5rem;\r\n  width: 100%;\r\n  background: #52275f;\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 1.3rem;\r\n  border: 2px solid #52275f;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease;\r\n}\r\n.btn-question:hover {\r\n  border: 2px solid #7c408e;\r\n  background: #7c408e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL2FkZC1xdWVzdGlvbi1mb3JtL2FkZC1xdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUEsV0FBVztBQUNYO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3QkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL2FkZC1xdWVzdGlvbi1mb3JtL2FkZC1xdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWZvcm0ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5uYW1lLWZvcm0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNvdXJzLWZvcm0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5xdWVzdGlvbi10eXBlLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG4gIC8qIHBhZGRpbmc6IDEuOHJlbTsgKi9cclxuICB3aWR0aDogMjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTIyNzVmO1xyXG59XHJcblxyXG4uY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZjtcclxufVxyXG5cclxuLnZpc2libGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuZm9ybSBociB7XHJcbiAgbWFyZ2luOiAzcmVtIDByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM1MjI3NWY7XHJcbn1cclxuXHJcbi50eXBlLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMSAyIDIwcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnR5cGUtY2hlY2tib3ggc3Bhbi5tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICM0NzQ3NDc7XHJcbiAgbWFyZ2luOiAwLjVyZW0gMHJlbTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMjUlO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ubmItaW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAyIDEgMjByZW07XHJcbiAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1mb3JtID4gdGV4dGFyZWEge1xyXG4gIGJvcmRlcjogc29saWQgMnB4ICM1MjI3NWY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4vKiBTZWxlY3QgKi9cclxuLmNvdXJzLWZvcm0tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBvdmVyd3JpdGUgc2VsZWN0ICovXHJcbnNlbGVjdCB7XHJcbiAgLXdlYmt0aXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxufVxyXG5cclxuLmNvdXJzLWZvcm0tc2VsZWN0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcXDI1QkNcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGNvbG9yOiAjNTIyNzVmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7ICovXHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxufVxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYW5zd2VyLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hbnN3ZXItZm9ybTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNUJDXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBjb2xvcjogIzUyMjc1ZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MCUpO1xyXG59XHJcblxyXG4uYW5zd2VyLWZvcm0gPiBsYWJlbCA+IHNwYW4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gIGNvbG9yOiAjNDc0NzQ3O1xyXG59XHJcblxyXG4uYnRuLXF1ZXN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDEuM3JlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1xdWVzdGlvbjpob3ZlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzdjNDA4ZTtcclxuICBiYWNrZ3JvdW5kOiAjN2M0MDhlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/questions/add-question-form/add-question-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/questions/add-question-form/add-question-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddQuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionFormComponent", function() { return AddQuestionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/professeurs-complet.service */ "./src/app/services/professeurs-complet.service.ts");
/* harmony import */ var src_app_Models_ProfesseursComplet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/ProfesseursComplet */ "./src/app/Models/ProfesseursComplet.ts");
/* harmony import */ var src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var src_app_services_solutions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/solutions.service */ "./src/app/services/solutions.service.ts");
/* harmony import */ var src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Questions */ "./src/app/Models/Questions.ts");
/* harmony import */ var src_app_Models_Solutions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Solutions */ "./src/app/Models/Solutions.ts");









let AddQuestionFormComponent = class AddQuestionFormComponent {
    constructor(formBuilder, professeurCompletService, questionsService, solutionsService) {
        this.formBuilder = formBuilder;
        this.professeurCompletService = professeurCompletService;
        this.questionsService = questionsService;
        this.solutionsService = solutionsService;
        this.isMultiple = false;
        this.questionCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NB_SOLUTIONS_MAX = 5;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        this.subscriptions = [];
    }
    ngOnInit() {
        this.initForm();
        this.getProfesseurComplet();
    }
    ngOnDestroy() {
        for (let i = this.subscriptions.length - 1; i >= 0; i--) {
            const subscription = this.subscriptions[i];
            subscription && subscription.unsubscribe();
            this.subscriptions.pop();
        }
    }
    emitCreatedQuestion(question) {
        this.questionCreated.next(question);
    }
    getProfesseurComplet() {
        const id = JSON.parse(localStorage.getItem("currentUser")).id; //id of logged in prof
        const sub = this.professeurCompletService
            .get(id)
            .subscribe(profC => {
            this._professeursComplet = new src_app_Models_ProfesseursComplet__WEBPACK_IMPORTED_MODULE_4__["ProfesseursComplet"]().fromProfesseursCompletDTO(profC);
            console.log(profC);
        });
        this.subscriptions.push(sub);
    }
    initForm() {
        this.addQuestionForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nbSolutions: [''],
            solution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    toggleMultiple() {
        this.isMultiple = !this.isMultiple;
        if (this.isMultiple) {
            this.addQuestionForm.removeControl('solution');
            this.addQuestionForm.addControl('answer', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        }
        else {
            this.addQuestionForm.addControl('solution', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.addQuestionForm.removeControl('answer');
            this.removePreviousControls();
        }
    }
    createArray() {
        console.log(this.addQuestionForm.get('nbSolutions').value);
        let nbSol = this.addQuestionForm.get('nbSolutions').value;
        this.removePreviousControls();
        if (nbSol == null || nbSol < 2) {
            nbSol = 2;
        }
        else if (nbSol > 5) {
            nbSol = 5;
        }
        this.addNewControls(nbSol);
        this.numberLoop = Array(nbSol).fill(0).map((x, i) => i + 1);
    }
    removePreviousControls() {
        for (let index = 0; index < this.NB_SOLUTIONS_MAX; index++) {
            let controlName = `solution${index + 1}`;
            if (this.addQuestionForm.contains(controlName)) {
                this.addQuestionForm.removeControl(controlName);
            }
        }
    }
    addNewControls(controlNumber) {
        for (let index = 0; index < controlNumber; index++) {
            let controlName = `solution${index + 1}`;
            this.addQuestionForm.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        }
    }
    onSubmit() {
        console.log(this.addQuestionForm.controls);
        this.getAllField();
    }
    getAllField() {
        const name = this.addQuestionForm.get('name').value;
        const cours = +this.addQuestionForm.get('cours').value;
        console.log(cours);
        const author = this.user.id;
        let answer = 1;
        let solutions = [];
        if (this.isMultiple) {
            for (let index = 0; index < this.numberLoop.length; index++) {
                let controlName = `solution${index + 1}`;
                solutions.push(this.addQuestionForm.get(controlName).value);
            }
            answer = this.addQuestionForm.get('answer').value;
        }
        else {
            solutions.push(this.addQuestionForm.get('solution').value);
        }
        this.postQuestion(name, cours, author, solutions, answer);
    }
    postQuestion(name, cours, author, solutions, answer) {
        const question = this.buildQuestion(name, cours, author);
        const sub = this.questionsService
            .post(question.toQuestionsDTO())
            .subscribe(questionDto => {
            const listSolutions = this.buildSolutions(solutions, answer, questionDto.id);
            let i = 0;
            listSolutions.forEach(solution => {
                let subSolution = this.solutionsService
                    .post(solution.toSolutionsDTO())
                    .subscribe(solution => {
                    if (listSolutions.length == i + 1) {
                        this.emitCreatedQuestion(new src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_7__["Questions"]().fromQuestionsDTO(questionDto));
                    }
                    i++;
                });
                this.subscriptions.push(subSolution);
            });
        });
        this.addQuestionForm.reset();
        this.subscriptions.push(sub);
    }
    buildSolutions(solutions, answer, id) {
        let listSolutions = [];
        for (let index = 0; index < solutions.length; index++) {
            let sol = new src_app_Models_Solutions__WEBPACK_IMPORTED_MODULE_8__["Solutions"]();
            sol.text = solutions[index];
            sol.id_questions = id;
            if (index + 1 == answer) {
                sol.answer = 1;
            }
            else {
                sol.answer = 0;
            }
            listSolutions.push(sol);
        }
        return listSolutions;
    }
    buildQuestion(name, cours, author) {
        const question = new src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_7__["Questions"]();
        question.name = name;
        question.cours = cours;
        question.author = author;
        return question;
    }
    get professeursComplet() {
        return this._professeursComplet;
    }
    set professeursComplet(obj) {
        this._professeursComplet = obj;
    }
};
AddQuestionFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_3__["ProfesseursCompletService"] },
    { type: src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_5__["QuestionsService"] },
    { type: src_app_services_solutions_service__WEBPACK_IMPORTED_MODULE_6__["SolutionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddQuestionFormComponent.prototype, "questionCreated", void 0);
AddQuestionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-question-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-question-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/add-question-form/add-question-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-question-form.component.css */ "./src/app/questions/add-question-form/add-question-form.component.css")).default]
    })
], AddQuestionFormComponent);



/***/ }),

/***/ "./src/app/questions/filter-professeurs.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/questions/filter-professeurs.pipe.ts ***!
  \******************************************************/
/*! exports provided: FilterProfesseursPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProfesseursPipe", function() { return FilterProfesseursPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterProfesseursPipe = class FilterProfesseursPipe {
    transform(questionsComplets, cours) {
        let qC = [];
        questionsComplets.forEach(q => {
            cours.forEach(c => {
                if (q.cours.id == c.id) {
                    qC.push(q);
                }
            });
        });
        console.log(qC);
        return qC;
    }
};
FilterProfesseursPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterProfesseurs',
    })
], FilterProfesseursPipe);



/***/ }),

/***/ "./src/app/questions/filter-search.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/questions/filter-search.pipe.ts ***!
  \*************************************************/
/*! exports provided: FilterSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSearchPipe", function() { return FilterSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterSearchPipe = class FilterSearchPipe {
    transform(questionsComplets, searchInput) {
        let qC = [];
        console.log(questionsComplets);
        console.log(searchInput);
        if (searchInput == '') {
            return questionsComplets;
        }
        questionsComplets.forEach(q => {
            console.log(q.question.name.toLowerCase());
            if (q.question.name.toLowerCase().includes(searchInput.toLowerCase())) {
                qC.push(q);
                console.log(q.question.name);
            }
        });
        console.log(qC);
        return qC;
    }
};
FilterSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterSearch'
    })
], FilterSearchPipe);



/***/ }),

/***/ "./src/app/questions/filter-select.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/questions/filter-select.pipe.ts ***!
  \*************************************************/
/*! exports provided: FilterSelectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSelectPipe", function() { return FilterSelectPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterSelectPipe = class FilterSelectPipe {
    transform(questionsComplets, selectedOption) {
        console.log(questionsComplets);
        let qC = [];
        if (selectedOption == 0) {
            return questionsComplets;
        }
        questionsComplets.forEach(q => {
            if (q.cours.id == selectedOption) {
                qC.push(q);
            }
        });
        console.log(qC);
        return qC;
    }
};
FilterSelectPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterSelect',
    })
], FilterSelectPipe);



/***/ }),

/***/ "./src/app/questions/question-detail/question-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/questions/question-detail/question-detail.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detail-question {\r\n  width: 90%;\r\n  margin: 0.5rem auto;\r\n  padding: 1rem 2rem;\r\n  background: #80808021;\r\n  line-height: 2rem;\r\n  border-radius: 2px;\r\n  transition: all 0.2s ease;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 10;\r\n}\r\n\r\n.detail-question:hover {\r\n  background: #9748af3d;\r\n}\r\n\r\n/* .detail-question:last-child {\r\n  margin-bottom: 2rem;\r\n} */\r\n\r\n.question-button {\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  right: 2rem;\r\n}\r\n\r\n.question-button span {\r\n  padding: 0.7rem 1rem;\r\n  border-radius: 2px;\r\n  opacity: 0.8;\r\n  transition: all 0.2s;\r\n  font-size: 1.8rem !important;\r\n}\r\n\r\n.question-button span:hover {\r\n  padding: 0.7rem 1rem;\r\n  border-radius: 2px;\r\n  opacity: 1;\r\n  transform: scale(110%);\r\n  cursor: pointer;\r\n}\r\n\r\n.question-button span.edit {\r\n  margin-right: 0.5rem;\r\n  background: rgb(250, 135, 68);\r\n  color: white;\r\n}\r\n\r\n.question-button span.delete {\r\n  background: rgb(219, 52, 52);\r\n  color: white;\r\n  border: none;\r\n}\r\n\r\n.detail-question span {\r\n  font-size: 1.1rem;\r\n  color: grey;\r\n}\r\n\r\n.not-teached {\r\n  visibility: hidden;\r\n  height: 0;\r\n  display: none;\r\n}\r\n\r\n.detail-solutions span {\r\n  color: white;\r\n  font-size: 1.3rem;\r\n  float: right;\r\n}\r\n\r\n.solutions {\r\n  /* border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  margin: 0.5rem 0rem;\r\n  background-color: #dc3545; */\r\n  color: white;\r\n  background-color: rgb(70, 70, 70);\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  margin: 0.5rem 0rem;\r\n}\r\n\r\n.right-answer {\r\n  background: #28a745;\r\n}\r\n\r\np {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.full-height {\r\n  height: 100%;\r\n}\r\n\r\n.question-button span.view-button {\r\n  transform: translate(50%, -50%);\r\n  cursor: pointer;\r\n  color: white;\r\n  position: absolute;\r\n  right: -0.3rem;\r\n  top: 0.5rem;\r\n  padding: 0.5rem;\r\n  font-size: 1.4rem;\r\n  opacity: 0.6;\r\n  background: white;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.question-button span.view-button:hover {\r\n  transform: translate(50%, -40%) scale(120%);\r\n  opacity: 1;\r\n}\r\n\r\n.view-button.remove:hover {\r\n  background: rgb(219, 52, 52) !important;\r\n}\r\n\r\n.view-button.add:hover {\r\n  background: #58d775 !important;\r\n}\r\n\r\n.danger-question {\r\n  background: rgba(255, 82, 82, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9uLWRldGFpbC9xdWVzdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTs7R0FFRzs7QUFDSDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRTs7OzhCQUc0QjtFQUM1QixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb24tZGV0YWlsL3F1ZXN0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbC1xdWVzdGlvbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjODA4MDgwMjE7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5kZXRhaWwtcXVlc3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM5NzQ4YWYzZDtcclxufVxyXG4vKiAuZGV0YWlsLXF1ZXN0aW9uOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn0gKi9cclxuLnF1ZXN0aW9uLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tYnV0dG9uIHNwYW4ge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWJ1dHRvbiBzcGFuOmhvdmVyIHtcclxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDExMCUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWJ1dHRvbiBzcGFuLmVkaXQge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTAsIDEzNSwgNjgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWJ1dHRvbiBzcGFuLmRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxOSwgNTIsIDUyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZGV0YWlsLXF1ZXN0aW9uIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ubm90LXRlYWNoZWQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZGV0YWlsLXNvbHV0aW9ucyBzcGFuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zb2x1dGlvbnMge1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBtYXJnaW46IDAuNXJlbSAwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW0gMHJlbTtcclxufVxyXG4ucmlnaHQtYW5zd2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4uZnVsbC1oZWlnaHQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWJ1dHRvbiBzcGFuLnZpZXctYnV0dG9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMC4zcmVtO1xyXG4gIHRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWJ1dHRvbiBzcGFuLnZpZXctYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC00MCUpIHNjYWxlKDEyMCUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi52aWV3LWJ1dHRvbi5yZW1vdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMTksIDUyLCA1MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZXctYnV0dG9uLmFkZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU4ZDc3NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFuZ2VyLXF1ZXN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgODIsIDgyLCAwLjE5KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/questions/question-detail/question-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/questions/question-detail/question-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: QuestionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailComponent", function() { return QuestionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Questions */ "./src/app/Models/Questions.ts");
/* harmony import */ var src_app_services_questions_tests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/questions-tests.service */ "./src/app/services/questions-tests.service.ts");





let QuestionDetailComponent = class QuestionDetailComponent {
    constructor(router, questionsTestsService) {
        this.router = router;
        this.questionsTestsService = questionsTestsService;
        this.questionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.questionRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.questionAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
    }
    ngOnInit() {
        console.log(this.view);
        this.getQuestions_Tests();
    }
    getQuestions_Tests() {
        this.questionsTestsService
            .getByQuestion(this.questionComplet.question.id)
            .subscribe(questions_tests => {
            this.questionsOccurence = questions_tests.length;
        });
    }
    emitDeletedQuestion() {
        const question = new src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_3__["Questions"]().fromQuestionsDTO(this.questionComplet.question);
        this.questionDeleted.next(question);
    }
    editQuestion() {
        if (this.questionComplet.professeur.id === this.user.id && this.view !== undefined) {
            this.onViewQuestion(this.questionComplet.question.id);
        }
    }
    emitAddedQuestion() {
        const question = new src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_3__["Questions"]().fromQuestionsDTO(this.questionComplet.question);
        if (this.questionsOccurence > 2) {
            if (confirm('This question is has already been used at least 3 times. Are you sure you want to add it ?')) {
                this.questionAdded.next(question);
                this.questionsOccurence++;
            }
        }
        else {
            this.questionAdded.next(question);
            this.questionsOccurence++;
        }
        console.log(this.questionsOccurence);
    }
    emitRemovedQuestion() {
        const question = new src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_3__["Questions"]().fromQuestionsDTO(this.questionComplet.question);
        this.questionRemoved.next(question);
    }
    onViewQuestion(id) {
        this.router.navigate(['/questions', 'view', id]);
    }
};
QuestionDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_questions_tests_service__WEBPACK_IMPORTED_MODULE_4__["QuestionsTestsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuestionDetailComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuestionDetailComponent.prototype, "questionComplet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuestionDetailComponent.prototype, "professeurComplet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuestionDetailComponent.prototype, "view", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuestionDetailComponent.prototype, "questionDeleted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuestionDetailComponent.prototype, "questionRemoved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuestionDetailComponent.prototype, "questionAdded", void 0);
QuestionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/question-detail/question-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-detail.component.css */ "./src/app/questions/question-detail/question-detail.component.css")).default]
    })
], QuestionDetailComponent);



/***/ }),

/***/ "./src/app/questions/question-list/question-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/questions/question-list/question-list.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1 1 40rem;\r\n  min-height: 90vh;\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(52, 130, 255) 17%,\r\n    rgba(255, 176, 176, 1) 79%\r\n  );\r\n}\r\n\r\n.flex-container {\r\n  align-items: start;\r\n}\r\n\r\n.flex.box {\r\n  position: relative;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  width: 90%;\r\n  margin: 1rem 2rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.2);\r\n  background: white;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.flex-select {\r\n  width: 90%;\r\n  display: flex;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.search {\r\n  position: absolute;\r\n  top: 1.5rem;\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n\r\n#searchInput {\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n  position: relative;\r\n  width: 4rem;\r\n  transition: width 0.5s ease-in-out, padding 0.01s ease 0.2s,\r\n    border-color 0.2s ease 0.1s;\r\n  float: right;\r\n  /* padding-right: 5rem; */\r\n}\r\n\r\n.search:hover #searchInput {\r\n  width: 30%;\r\n  padding-right: 5rem;\r\n  border-color: #327cf4;\r\n}\r\n\r\n#searchInput:focus {\r\n  width: 30%;\r\n  padding-right: 5rem;\r\n}\r\n\r\n/* \r\n#searchInput:focus + span {\r\n  background: #52275f;\r\n} */\r\n\r\n.search span {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.25rem;\r\n  transform: translateY(-50%);\r\n  font-size: 1.8rem;\r\n  border-radius: 5px;\r\n  background: #327cf4;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.flex h3 {\r\n  padding: 2rem 2rem;\r\n  color: #52275f;\r\n  font-weight: 500;\r\n}\r\n\r\n/* overwrite select */\r\n\r\nselect {\r\n  -webktit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 1.5rem;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-radius: 3px;\r\n  background-color: #52275f;\r\n}\r\n\r\n.flex-select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: white;\r\n  overflow: hidden;\r\n  /* transform: translateY(50%); */\r\n}\r\n\r\nsvg {\r\n  background: transparent !important;\r\n  height: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9uLWxpc3QvcXVlc3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYOytCQUM2QjtFQUM3QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUNBOzs7R0FHRzs7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsd0JBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbi1saXN0L3F1ZXN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleDogMSAxIDQwcmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTMyZGVnLFxyXG4gICAgcmdiKDUyLCAxMzAsIDI1NSkgMTclLFxyXG4gICAgcmdiYSgyNTUsIDE3NiwgMTc2LCAxKSA3OSVcclxuICApO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmZsZXguYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAxcmVtIDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mbGV4LXNlbGVjdCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxLjVyZW07XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNzZWFyY2hJbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MjI3NWY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmcgMC4wMXMgZWFzZSAwLjJzLFxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSAwLjFzO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvKiBwYWRkaW5nLXJpZ2h0OiA1cmVtOyAqL1xyXG59XHJcbi5zZWFyY2g6aG92ZXIgI3NlYXJjaElucHV0IHtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzI3Y2Y0O1xyXG59XHJcblxyXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcclxufVxyXG4vKiBcclxuI3NlYXJjaElucHV0OmZvY3VzICsgc3BhbiB7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZjtcclxufSAqL1xyXG5cclxuLnNlYXJjaCBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDAuMjVyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjMzI3Y2Y0O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4uZmxleCBoMyB7XHJcbiAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gIGNvbG9yOiAjNTIyNzVmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIG92ZXJ3cml0ZSBzZWxlY3QgKi9cclxuc2VsZWN0IHtcclxuICAtd2Via3RpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjI3NWY7XHJcbn1cclxuXHJcbi5mbGV4LXNlbGVjdDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNUJDXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMC41cmVtO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpOyAqL1xyXG59XHJcblxyXG5zdmcge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/questions/question-list/question-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/questions/question-list/question-list.component.ts ***!
  \********************************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_questions_complet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/questions-complet.service */ "./src/app/services/questions-complet.service.ts");
/* harmony import */ var src_app_Models_QuestionsComplet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/QuestionsComplet */ "./src/app/Models/QuestionsComplet.ts");
/* harmony import */ var src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/professeurs-complet.service */ "./src/app/services/professeurs-complet.service.ts");
/* harmony import */ var src_app_Models_ProfesseursComplet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/ProfesseursComplet */ "./src/app/Models/ProfesseursComplet.ts");
/* harmony import */ var src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/questions.service */ "./src/app/services/questions.service.ts");







let QuestionListComponent = class QuestionListComponent {
    constructor(questionsCompletService, professeursCompletService, questionsService) {
        this.questionsCompletService = questionsCompletService;
        this.professeursCompletService = professeursCompletService;
        this.questionsService = questionsService;
        this.subscriptionsQuestions = [];
        this.searchInput = '';
        this.selectedOption = 0;
        this.coursTeached = false;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
    ngOnInit() {
        this.getProfesseursComplet();
        //this.loadQuestionsComplets();
        this.getObservable();
    }
    getObservable() {
        this.observable$ = this.questionsCompletService
            .query();
    }
    getProfesseursComplet() {
        const id = JSON.parse(localStorage.getItem("currentUser")).id; //id of logged in prof
        const sub = this.professeursCompletService
            .get(id)
            .subscribe(profC => {
            this._professeursComplet = new src_app_Models_ProfesseursComplet__WEBPACK_IMPORTED_MODULE_5__["ProfesseursComplet"]().fromProfesseursCompletDTO(profC);
            console.log(profC);
        });
        this.subscriptionProfesseur = sub;
    }
    loadQuestionsComplets() {
        const sub = this.questionsCompletService
            .query()
            .subscribe(qcs => {
            this._questionsComplets = qcs.map(qc => new src_app_Models_QuestionsComplet__WEBPACK_IMPORTED_MODULE_3__["QuestionsComplet"]().fromQuestionsCompletDTO(qc));
            console.log(this._questionsComplets);
        });
        this.subscriptionsQuestions.push(sub);
    }
    ngOnDestroy() {
        for (let i = this.subscriptionsQuestions.length - 1; i >= 0; i--) {
            const subscription = this.subscriptionsQuestions[i];
            subscription && subscription.unsubscribe();
            this.subscriptionsQuestions.pop();
        }
        this.subscriptionProfesseur.unsubscribe();
    }
    launchNotification() {
        const notification = document.querySelector('.notification');
        const message = document.querySelector('.notification > p');
        console.log(message.textContent);
        message.textContent = 'Question has been successfully created ! 😎';
        notification.classList.add('visible');
        const delay = 3500;
        setTimeout(function () {
            notification.classList.remove('visible');
        }, delay);
    }
    deleteQuestion($event) {
        console.log($event);
        if (confirm("Do you want to delete this question ?")) {
            const sub = this.questionsService
                .delete($event.id)
                .subscribe(whatev => {
                /* Recall Observable to refresh */
                this.getObservable();
            });
            this.subscriptionsQuestions.push(sub);
        }
    }
    createQuestion($event) {
        console.log($event);
        this.launchNotification();
        this.getObservable();
    }
    // resetSearch() {
    //   // reset after animation ends
    //   this.searchInput = ''
    // }
    get questionsComplets() {
        return this._questionsComplets;
    }
    set questionsComplets(obj) {
        this._questionsComplets = obj;
    }
    get professeursComplet() {
        return this._professeursComplet;
    }
    set professeursComplet(obj) {
        this._professeursComplet = obj;
    }
};
QuestionListComponent.ctorParameters = () => [
    { type: src_app_services_questions_complet_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsCompletService"] },
    { type: src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_4__["ProfesseursCompletService"] },
    { type: src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_6__["QuestionsService"] }
];
QuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/question-list/question-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-list.component.css */ "./src/app/questions/question-list/question-list.component.css")).default]
    })
], QuestionListComponent);



/***/ }),

/***/ "./src/app/questions/single-question/single-question.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/questions/single-question/single-question.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  display: flex;\r\n  min-height: 90vh;\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(52, 130, 255) 17%,\r\n    rgba(255, 176, 176, 1) 79%\r\n  );\r\n}\r\n\r\n.question-container {\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  width: 95%;\r\n  margin: 2rem auto;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.2);\r\n  background: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.form-control.right-answer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 3rem;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n\r\n.right-answer::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: #52275f;\r\n  overflow: hidden;\r\n  transform: translateY(90%);\r\n}\r\n\r\n.question-single h3 {\r\n  text-align: center;\r\n  color: white;\r\n  width: 100%;\r\n}\r\n\r\n.flex-box {\r\n  display: flex;\r\n  width: 30%;\r\n  flex-direction: column;\r\n  background: #80808021;\r\n  border-radius: 5px;\r\n  margin: 2rem;\r\n  padding: 2rem;\r\n  height: 33rem;\r\n}\r\n\r\n.question-single.flex-box {\r\n  background-color: #52275f;\r\n}\r\n\r\n.question-single label {\r\n  color: white;\r\n}\r\n\r\n.question-single .modify-button {\r\n  color: #52275f;\r\n  background: white;\r\n  border: 2px solid white;\r\n}\r\n\r\n.question-single .modify-button:hover {\r\n  color: #ffffff;\r\n  background: #52275f;\r\n  border: 2px solid white;\r\n}\r\n\r\n.form-control {\r\n  margin: 1rem 0rem;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n\r\n.right-answer label {\r\n  color: black;\r\n}\r\n\r\n/* overwrite select */\r\n\r\nselect {\r\n  -webktit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  color: black;\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\n\r\n.cours-form-select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: #52275f;\r\n  overflow: hidden;\r\n  transform: translateY(90%);\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\n\r\nlabel {\r\n  font-size: 1.4rem;\r\n  color: black;\r\n  padding: 1rem 0rem;\r\n}\r\n\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.modify-button {\r\n  width: 100%;\r\n  background: #52275f;\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 1.3rem;\r\n  border: 2px solid #52275f;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.modify-button:hover {\r\n  border: 2px solid #7c408e;\r\n  background: #7c408e;\r\n}\r\n\r\n.same-row {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 4rem;\r\n}\r\n\r\n#saveRightSolution.modify-button.save-button {\r\n  font-size: 1.4rem;\r\n  padding: 1rem;\r\n  width: 50%;\r\n  position: relative;\r\n  right: 0;\r\n  margin-left: 2rem;\r\n  color: white;\r\n  background: #52275f;\r\n  border: 2px solid #52275f;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n#saveRightSolution.modify-button.save-button:hover {\r\n  background: #7c408e;\r\n}\r\n\r\n#solutionSelect {\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: end;\r\n}\r\n\r\n.flex-solution-container {\r\n  /* display: flex; */\r\n  flex: 1 1 40rem;\r\n  margin: 2rem 0rem;\r\n}\r\n\r\n.solutions-container {\r\n  display: grid;\r\n  width: 95%;\r\n  margin: 0rem auto;\r\n  grid-template-columns: repeat(2, minmax(250px, 1fr));\r\n  grid-template-rows: minmax(100px, auto);\r\n  grid-auto-flow: dense;\r\n  grid-gap: 2rem;\r\n  grid-template-areas:\r\n    \"s1 s2\"\r\n    \"s3 s4\"\r\n    \"s5 .\";\r\n}\r\n\r\napp-single-solution {\r\n  display: grid;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  place-self: center;\r\n  width: 100%;\r\n}\r\n\r\napp-single-solution:nth-child(1) {\r\n  grid-area: s1;\r\n}\r\n\r\napp-single-solution:nth-child(2) {\r\n  grid-area: s2;\r\n}\r\n\r\napp-single-solution:nth-child(3) {\r\n  grid-area: s3;\r\n}\r\n\r\napp-single-solution:nth-child(4) {\r\n  grid-area: s4;\r\n}\r\n\r\napp-single-solution:nth-child(5) {\r\n  grid-area: s5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3NpbmdsZS1xdWVzdGlvbi9zaW5nbGUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3QkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCx1Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZDs7O1VBR1E7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvc2luZ2xlLXF1ZXN0aW9uL3NpbmdsZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEzMmRlZyxcclxuICAgIHJnYig1MiwgMTMwLCAyNTUpIDE3JSxcclxuICAgIHJnYmEoMjU1LCAxNzYsIDE3NiwgMSkgNzklXHJcbiAgKTtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IDJyZW0gYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wucmlnaHQtYW5zd2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yaWdodC1hbnN3ZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcMjVCQ1wiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBjb2xvcjogIzUyMjc1ZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MCUpO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tc2luZ2xlIGgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmxleC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6ICM4MDgwODAyMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgaGVpZ2h0OiAzM3JlbTtcclxufVxyXG5cclxuLnF1ZXN0aW9uLXNpbmdsZS5mbGV4LWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMjc1ZjtcclxufVxyXG4ucXVlc3Rpb24tc2luZ2xlIGxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1zaW5nbGUgLm1vZGlmeS1idXR0b24ge1xyXG4gIGNvbG9yOiAjNTIyNzVmO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tc2luZ2xlIC5tb2RpZnktYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNTIyNzVmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJpZ2h0LWFuc3dlciBsYWJlbCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBvdmVyd3JpdGUgc2VsZWN0ICovXHJcbnNlbGVjdCB7XHJcbiAgLXdlYmt0aXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxufVxyXG5cclxuLmNvdXJzLWZvcm0tc2VsZWN0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcXDI1QkNcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGNvbG9yOiAjNTIyNzVmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxufVxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubW9kaWZ5LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDEuM3JlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLm1vZGlmeS1idXR0b246aG92ZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3YzQwOGU7XHJcbiAgYmFja2dyb3VuZDogIzdjNDA4ZTtcclxufVxyXG5cclxuLnNhbWUtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHJlbTtcclxufVxyXG4jc2F2ZVJpZ2h0U29sdXRpb24ubW9kaWZ5LWJ1dHRvbi5zYXZlLWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4jc2F2ZVJpZ2h0U29sdXRpb24ubW9kaWZ5LWJ1dHRvbi5zYXZlLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzdjNDA4ZTtcclxufVxyXG5cclxuI3NvbHV0aW9uU2VsZWN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4uZmxleC1zb2x1dGlvbi1jb250YWluZXIge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgZmxleDogMSAxIDQwcmVtO1xyXG4gIG1hcmdpbjogMnJlbSAwcmVtO1xyXG59XHJcblxyXG4uc29sdXRpb25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogMHJlbSBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcclxuICBncmlkLWdhcDogMnJlbTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJzMSBzMlwiXHJcbiAgICBcInMzIHM0XCJcclxuICAgIFwiczUgLlwiO1xyXG59XHJcblxyXG5hcHAtc2luZ2xlLXNvbHV0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hcHAtc2luZ2xlLXNvbHV0aW9uOm50aC1jaGlsZCgxKSB7XHJcbiAgZ3JpZC1hcmVhOiBzMTtcclxufVxyXG5hcHAtc2luZ2xlLXNvbHV0aW9uOm50aC1jaGlsZCgyKSB7XHJcbiAgZ3JpZC1hcmVhOiBzMjtcclxufVxyXG5hcHAtc2luZ2xlLXNvbHV0aW9uOm50aC1jaGlsZCgzKSB7XHJcbiAgZ3JpZC1hcmVhOiBzMztcclxufVxyXG5hcHAtc2luZ2xlLXNvbHV0aW9uOm50aC1jaGlsZCg0KSB7XHJcbiAgZ3JpZC1hcmVhOiBzNDtcclxufVxyXG5hcHAtc2luZ2xlLXNvbHV0aW9uOm50aC1jaGlsZCg1KSB7XHJcbiAgZ3JpZC1hcmVhOiBzNTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/questions/single-question/single-question.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/questions/single-question/single-question.component.ts ***!
  \************************************************************************/
/*! exports provided: SingleQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleQuestionComponent", function() { return SingleQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var src_app_services_solutions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/solutions.service */ "./src/app/services/solutions.service.ts");
/* harmony import */ var src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/professeurs-complet.service */ "./src/app/services/professeurs-complet.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Questions */ "./src/app/Models/Questions.ts");








let SingleQuestionComponent = class SingleQuestionComponent {
    constructor(route, professeurCompletService, questionsService, solutionsService, formBuilder) {
        this.route = route;
        this.professeurCompletService = professeurCompletService;
        this.questionsService = questionsService;
        this.solutionsService = solutionsService;
        this.formBuilder = formBuilder;
        this.subscriptions = [];
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.getProfesseurComplet(this.user.id);
        this.getQuestionObservable(id);
        this.getSolutionsObservable(id);
        this.initForm();
    }
    ngOnDestroy() {
        for (let i = this.subscriptions.length - 1; i >= 0; i--) {
            const subscription = this.subscriptions[i];
            subscription && subscription.unsubscribe();
            this.subscriptions.pop();
        }
    }
    initForm() {
        this.modifyQuestionForm = this.formBuilder.group({
            nameInput: null,
            coursSelect: null,
        });
    }
    getProfesseurComplet(id) {
        this.professeurComplet$ = this.professeurCompletService.get(id);
    }
    getQuestionObservable(id) {
        this.question$ = this.questionsService.get(id);
        const sub = this.questionsService
            .get(id)
            .subscribe(questionDTO => {
            this.unmodifiedQuestion = new src_app_Models_Questions__WEBPACK_IMPORTED_MODULE_7__["Questions"]().fromQuestionsDTO(questionDTO);
            this.modifyQuestionForm.get('coursSelect').setValue(this.unmodifiedQuestion.cours);
            console.log(this.unmodifiedQuestion);
        });
        this.subscriptions.push(sub);
    }
    getSolutionsObservable(idQuestion) {
        this.solutions$ = this.solutionsService.getByQuestion(idQuestion);
        const sub = this.solutionsService
            .getByQuestion(idQuestion)
            .subscribe(solutionsDTO => {
            let i = 0;
            solutionsDTO.forEach(solution => {
                i++;
                if (solution.answer == 1) {
                    this.rightAnswer = solution.id;
                    this.previousRightAnswer = solution.id;
                }
            });
            console.log(this.rightAnswer);
        });
        this.subscriptions.push(sub);
    }
    onSubmit() {
        const updatedQuestion = this.updatedQuestion(this.unmodifiedQuestion);
        console.log(updatedQuestion);
        const sub = this.questionsService
            .put(updatedQuestion.toQuestionsDTO())
            .subscribe(() => {
            this.launchNotification('This question has been modified ! 👌', 'success');
        });
        this.unmodifiedQuestion = updatedQuestion;
        this.subscriptions.push(sub);
    }
    onSave() {
        console.log(this.rightAnswer);
        /* Update Right Answer */
        const sub = this.solutionsService
            .get(this.rightAnswer)
            .subscribe(solution => {
            solution.answer = 1;
            const subSolution = this.solutionsService
                .put(solution)
                .subscribe(whatev => {
                console.log(solution);
                this.previousRightAnswer = solution.id;
            });
            this.subscriptions.push(subSolution);
        });
        this.subscriptions.push(sub);
        /* Remove previous right answer */
        const subPrevious = this.solutionsService
            .get(this.previousRightAnswer)
            .subscribe(solution => {
            solution.answer = 0;
            const subSolution = this.solutionsService
                .put(solution)
                .subscribe(whatev => {
                console.log(solution);
                this.launchNotification('The right answer has been modified ! 👌', 'success');
            });
            this.subscriptions.push(subSolution);
        });
        this.subscriptions.push(sub);
    }
    updatedQuestion(unmodifiedQuestion) {
        unmodifiedQuestion.name = (this.modifyQuestionForm.get('nameInput').value == null ? unmodifiedQuestion.name : this.modifyQuestionForm.get('nameInput').value);
        unmodifiedQuestion.cours = (this.modifyQuestionForm.get('coursSelect').value == null ? unmodifiedQuestion.cours : +this.modifyQuestionForm.get('coursSelect').value);
        return unmodifiedQuestion;
    }
    deleteSolution($event) {
        console.log($event);
        if (confirm("Do you want to delete this solution ?")) {
            const sub = this.solutionsService
                .delete($event.id)
                .subscribe(whatev => {
                /* Recall get to refresh solutions[] */
                /* Works */
                const idQuestion = +this.route.snapshot.params['id'];
                this.getSolutionsObservable(idQuestion);
                this.launchNotification('This solution has been deleted ! 💥', 'danger');
            });
            this.subscriptions.push(sub);
        }
        this.launchNotification('This solution has been deleted ! 💥', 'danger');
    }
    launchNotification(notificationMessage, type) {
        const notification = document.querySelector('.notification');
        const message = document.querySelector('.notification > p');
        console.log(message.textContent);
        message.textContent = notificationMessage;
        notification.classList.add('visible');
        notification.classList.add(type);
        const delay = 3500;
        setTimeout(function () {
            notification.classList.remove('visible');
        }, delay);
        setTimeout(function () {
            notification.classList.remove(type);
        }, 4000);
    }
};
SingleQuestionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_5__["ProfesseursCompletService"] },
    { type: src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] },
    { type: src_app_services_solutions_service__WEBPACK_IMPORTED_MODULE_4__["SolutionsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
SingleQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/single-question/single-question.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-question.component.css */ "./src/app/questions/single-question/single-question.component.css")).default]
    })
], SingleQuestionComponent);



/***/ }),

/***/ "./src/app/questions/solutions/single-solution/single-solution.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/questions/solutions/single-solution/single-solution.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".solution-single {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: relative;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.solution-single.right-answer {\r\n  background: #2ee64333;\r\n}\r\n\r\n.solution-single:hover {\r\n  background: #317aef38;\r\n}\r\n\r\n.solution-single > h3 {\r\n  text-align: center;\r\n  color: #52275f;\r\n  width: 100%;\r\n}\r\n\r\n.flex-box {\r\n  background: #80808021;\r\n  border-radius: 5px;\r\n  /* margin: 2rem; */\r\n  padding: 2rem;\r\n  width: 100%;\r\n  /* height: 60%; */\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n}\r\n\r\n.form-control {\r\n  margin: 1rem 0rem;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\nlabel {\r\n  font-size: 1.4rem;\r\n  color: black;\r\n  padding: 1rem 0rem;\r\n}\r\n\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  border: none;\r\n  outline: none;\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.5rem;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n  resize: vertical;\r\n}\r\n\r\n.modify-button {\r\n  margin-top: 1.5rem;\r\n  width: 100%;\r\n  background: #52275f;\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 1.3rem;\r\n  border: 2px solid #52275f;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.modify-button:hover {\r\n  border: 2px solid #7c408e;\r\n  background: #7c408e;\r\n}\r\n\r\n.delete {\r\n  transform: translate(50%, -50%);\r\n  cursor: pointer;\r\n  color: white;\r\n  position: absolute;\r\n  right: 0rem;\r\n  top: 0rem;\r\n  padding: 1rem;\r\n  border-radius: 50%;\r\n  font-size: 1.4rem;\r\n  opacity: 0.8;\r\n  background: white;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.delete:hover {\r\n  opacity: 1;\r\n  background: rgb(219, 52, 52);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3NvbHV0aW9ucy9zaW5nbGUtc29sdXRpb24vc2luZ2xlLXNvbHV0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3NvbHV0aW9ucy9zaW5nbGUtc29sdXRpb24vc2luZ2xlLXNvbHV0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sdXRpb24tc2luZ2xlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1zaW5nbGUucmlnaHQtYW5zd2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjMmVlNjQzMzM7XHJcbn1cclxuXHJcbi5zb2x1dGlvbi1zaW5nbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMTdhZWYzODtcclxufVxyXG5cclxuLnNvbHV0aW9uLXNpbmdsZSA+IGgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM1MjI3NWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LWJveCB7XHJcbiAgYmFja2dyb3VuZDogIzgwODA4MDIxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBtYXJnaW46IDJyZW07ICovXHJcbiAgcGFkZGluZzogMnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBoZWlnaHQ6IDYwJTsgKi9cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4ubW9kaWZ5LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM1MjI3NWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiAxLjNyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2RpZnktYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjN2M0MDhlO1xyXG4gIGJhY2tncm91bmQ6ICM3YzQwOGU7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDByZW07XHJcbiAgdG9wOiAwcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZGVsZXRlOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMTksIDUyLCA1Mik7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/questions/solutions/single-solution/single-solution.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/questions/solutions/single-solution/single-solution.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SingleSolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSolutionComponent", function() { return SingleSolutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/solutions.service */ "./src/app/services/solutions.service.ts");




let SingleSolutionComponent = class SingleSolutionComponent {
    constructor(formBuilder, solutionsService) {
        this.formBuilder = formBuilder;
        this.solutionsService = solutionsService;
        this.solutionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
    }
    ngOnInit() {
        this.previousText = this.solution.text;
        console.log(this.solution);
        console.log(this.previousText);
        console.log(this.index);
        this.initForm();
    }
    ngOnDestroy() {
        for (let i = this.subscriptions.length - 1; i >= 0; i--) {
            const subscription = this.subscriptions[i];
            subscription && subscription.unsubscribe();
            this.subscriptions.pop();
        }
    }
    emitDeletedSolution() {
        this.solutionDeleted.next(this.solution);
    }
    initForm() {
        this.modifySolutionForm = this.formBuilder.group({
            solution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit() {
        console.log(this.solution);
        const sub = this.solutionsService
            .put(this.solution)
            .subscribe(() => {
            this.launchNotification('Solution has been modified with success ! ');
        });
        this.subscriptions.push(sub);
    }
    launchNotification(notificationMessage) {
        const notification = document.querySelector('.notification');
        const message = document.querySelector('.notification > p');
        console.log(message.textContent);
        message.textContent = notificationMessage;
        notification.classList.add('visible');
        const delay = 2000;
        setTimeout(function () {
            notification.classList.remove('visible');
        }, delay);
    }
};
SingleSolutionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_solutions_service__WEBPACK_IMPORTED_MODULE_3__["SolutionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SingleSolutionComponent.prototype, "solution", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SingleSolutionComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SingleSolutionComponent.prototype, "savedAnswerSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SingleSolutionComponent.prototype, "solutionDeleted", void 0);
SingleSolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-solution',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-solution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/solutions/single-solution/single-solution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-solution.component.css */ "./src/app/questions/solutions/single-solution/single-solution.component.css")).default]
    })
], SingleSolutionComponent);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    get currentUserSub() {
        return this.currentUserSubject;
    }
    login(mail, password) {
        return this.http.post("api/professeurs/authenticate", { mail, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(prof => {
            localStorage.setItem('currentUser', JSON.stringify(prof));
            this.currentUserSubject.next(prof);
            return prof;
        }));
    }
    logout() {
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/cours.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/cours.service.ts ***!
  \*******************************************/
/*! exports provided: CoursService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursService", function() { return CoursService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/cours";
let CoursService = class CoursService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
};
CoursService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CoursService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CoursService);



/***/ }),

/***/ "./src/app/services/professeurs-complet.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/professeurs-complet.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfesseursCompletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesseursCompletService", function() { return ProfesseursCompletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/professeursComplet";
let ProfesseursCompletService = class ProfesseursCompletService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
};
ProfesseursCompletService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfesseursCompletService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfesseursCompletService);



/***/ }),

/***/ "./src/app/services/professeurs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/professeurs.service.ts ***!
  \*************************************************/
/*! exports provided: ProfesseursService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesseursService", function() { return ProfesseursService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/professeurs";
let ProfesseursService = class ProfesseursService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    getAll() {
        return this.http.get(`${URL_API}/token/authorized`);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
    post(professeursDTO) {
        return this.http.post(URL_API, professeursDTO);
    }
    put(professeursDTO) {
        return this.http.put(URL_API, professeursDTO);
    }
    delete(id) {
        return this.http.delete(`${URL_API}/${id}`);
    }
};
ProfesseursService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfesseursService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfesseursService);



/***/ }),

/***/ "./src/app/services/questions-complet.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/questions-complet.service.ts ***!
  \*******************************************************/
/*! exports provided: QuestionsCompletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsCompletService", function() { return QuestionsCompletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/questionsComplet";
let QuestionsCompletService = class QuestionsCompletService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
};
QuestionsCompletService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionsCompletService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionsCompletService);



/***/ }),

/***/ "./src/app/services/questions-tests.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/questions-tests.service.ts ***!
  \*****************************************************/
/*! exports provided: QuestionsTestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsTestsService", function() { return QuestionsTestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/questions_tests";
let QuestionsTestsService = class QuestionsTestsService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    get(idQ, idT) {
        return this.http.get(`${URL_API}/${idQ}/${idT}`);
    }
    getByTest(idT) {
        return this.http.get(`${URL_API}/bytest/${idT}`);
    }
    getByQuestion(idQ) {
        return this.http.get(`${URL_API}/byquestion/${idQ}`);
    }
    post(dto) {
        return this.http.post(URL_API, dto);
    }
    delete(id_questions, id_tests) {
        return this.http.delete(`${URL_API}/${id_questions}/${id_tests}`);
    }
    deleteByTest(id_tests) {
        return this.http.delete(`${URL_API}/bytest/${id_tests}`);
    }
};
QuestionsTestsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionsTestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionsTestsService);



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/questions";
let QuestionsService = class QuestionsService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
    post(questionDTO) {
        return this.http.post(URL_API, questionDTO);
    }
    put(questionDTO) {
        return this.http.put(URL_API, questionDTO);
    }
    delete(id) {
        return this.http.delete(`${URL_API}/${id}`);
    }
};
QuestionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionsService);



/***/ }),

/***/ "./src/app/services/solutions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/solutions.service.ts ***!
  \***********************************************/
/*! exports provided: SolutionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsService", function() { return SolutionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/solutions";
let SolutionsService = class SolutionsService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    getByQuestion(idQuestion) {
        return this.http.get(`${URL_API}/byquestion/${idQuestion}`);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
    post(solutionsDTO) {
        return this.http.post(URL_API, solutionsDTO);
    }
    put(solutionsDTO) {
        return this.http.put(URL_API, solutionsDTO);
    }
    delete(id) {
        return this.http.delete(`${URL_API}/${id}`);
    }
};
SolutionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SolutionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SolutionsService);



/***/ }),

/***/ "./src/app/services/tests-complet.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tests-complet.service.ts ***!
  \***************************************************/
/*! exports provided: TestsCompletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsCompletService", function() { return TestsCompletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/testscomplet";
let TestsCompletService = class TestsCompletService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
};
TestsCompletService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TestsCompletService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TestsCompletService);



/***/ }),

/***/ "./src/app/services/tests.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tests.service.ts ***!
  \*******************************************/
/*! exports provided: TestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsService", function() { return TestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL_API = "api/tests";
let TestsService = class TestsService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(URL_API);
    }
    get(id) {
        return this.http.get(`${URL_API}/${id}`);
    }
    post(testsDTO) {
        return this.http.post(URL_API, testsDTO);
    }
    put(testsDTO) {
        return this.http.put(URL_API, testsDTO);
    }
    delete(id) {
        return this.http.delete(`${URL_API}/${id}`);
    }
};
TestsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TestsService);



/***/ }),

/***/ "./src/app/signin-form/signin-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signin-form/signin-form.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#signin-form {\r\n  min-height: 90vh;\r\n  /* background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(52, 130, 255) 17%,\r\n    rgba(255, 176, 176, 1) 79%\r\n  );\r\n}\r\n.flex-sign.form {\r\n  background: rgb(59, 58, 58);\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n.form header {\r\n  padding: 3rem 0rem 1rem 0rem;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.form header h3 {\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgba(188, 112, 228, 1) 13%,\r\n    rgba(255, 104, 104, 1) 87%\r\n  );\r\n  -webkit-background-clip: text;\r\n          background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  display: inline-block;\r\n}\r\n.password-form,\r\n.mail-form {\r\n  padding: 0rem 3rem;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.password-form {\r\n  padding-bottom: 4rem;\r\n}\r\n.form input {\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n}\r\n.form label {\r\n  font-size: 1.4rem;\r\n  color: white;\r\n  padding: 1rem 0rem;\r\n}\r\nbutton {\r\n  background: rgb(59, 58, 58);\r\n  padding: 2rem 15rem;\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1.8rem;\r\n  width: 100%;\r\n  transition: all 0.3s ease /*2s delay */;\r\n  border-top: 2px solid white;\r\n}\r\nbutton:hover {\r\n  background: white;\r\n  color: rgb(41, 40, 40);\r\n  border-top: 2px solid rgb(59, 58, 58);\r\n}\r\n.error-message {\r\n  font-size: 1.2rem;\r\n  margin: 1.5rem 3rem;\r\n  padding: 1rem;\r\n  background: rgb(253, 92, 92);\r\n  color: white;\r\n  border-radius: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluLWZvcm0vc2lnbmluLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQjs7Z0NBRThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCOzs7O0dBSUM7QUFDSDtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFHaEIsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0U7Ozs7R0FJQztFQUNELDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHVDQUF1QztFQUN2QywyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi1mb3JtL3NpZ25pbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lnbmluLWZvcm0ge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTMyZGVnLFxyXG4gICAgcmdiKDUyLCAxMzAsIDI1NSkgMTclLFxyXG4gICAgcmdiYSgyNTUsIDE3NiwgMTc2LCAxKSA3OSVcclxuICApO1xyXG59XHJcbi5mbGV4LXNpZ24uZm9ybSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU5LCA1OCwgNTgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uZm9ybSBoZWFkZXIge1xyXG4gIHBhZGRpbmc6IDNyZW0gMHJlbSAxcmVtIDByZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZm9ybSBoZWFkZXIgaDMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkwZGVnLFxyXG4gICAgcmdiYSgxODgsIDExMiwgMjI4LCAxKSAxMyUsXHJcbiAgICByZ2JhKDI1NSwgMTA0LCAxMDQsIDEpIDg3JVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnBhc3N3b3JkLWZvcm0sXHJcbi5tYWlsLWZvcm0ge1xyXG4gIHBhZGRpbmc6IDByZW0gM3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5wYXNzd29yZC1mb3JtIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxufVxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvcm0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDByZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU5LCA1OCwgNTgpO1xyXG4gIHBhZGRpbmc6IDJyZW0gMTVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIC8qMnMgZGVsYXkgKi87XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiByZ2IoNDEsIDQwLCA0MCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYig1OSwgNTgsIDU4KTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMS41cmVtIDNyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCA5MiwgOTIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/signin-form/signin-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signin-form/signin-form.component.ts ***!
  \******************************************************/
/*! exports provided: SigninFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninFormComponent", function() { return SigninFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SigninFormComponent = class SigninFormComponent {
    constructor(formBuilder, authenticationService, router) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.router = router;
        this.submitted = false;
        this.error = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.initForm();
        // this.professeursService
        //   .query()
        //   .subscribe(profs => {
        //     this.professeurs = profs.map(prof => new Professeurs().fromProfesseursDTO(prof));
        //     console.log(this.professeurs);
        //   });
    }
    initForm() {
        this.signinForm = this.formBuilder.group({
            mail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.signinForm.get('mail').value);
        console.log(this.signinForm.get('password').value);
        console.log(this.signinForm.status);
        this.authenticationService.login(this.signinForm.get('mail').value, this.signinForm.get('password').value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.router.navigate(["/"]);
            console.log(data);
            this.error = false;
        }, error => {
            this.error = true;
            this.signinForm.reset();
        });
    }
};
SigninFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SigninFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin-form/signin-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin-form.component.css */ "./src/app/signin-form/signin-form.component.css")).default]
    })
], SigninFormComponent);



/***/ }),

/***/ "./src/app/tests/add-test-form/add-test-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tests/add-test-form/add-test-form.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-form {\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n.form-control {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n/* Select */\r\n.cours-form-select {\r\n  width: 100%;\r\n  display: flex;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n/* overwrite select */\r\nselect {\r\n  -webktit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  color: black;\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\n.cours-form-select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: #52275f;\r\n  overflow: hidden;\r\n  /* transform: translateY(50%); */\r\n}\r\ninput {\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\nlabel {\r\n  font-size: 1.4rem;\r\n  color: black;\r\n  padding: 1rem 0rem;\r\n}\r\n.btn-test {\r\n  margin-top: 1.5rem;\r\n  width: 100%;\r\n  background: #52275f;\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 1.3rem;\r\n  border: 2px solid #52275f;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease;\r\n}\r\n.btn-test:hover {\r\n  border: 2px solid #7c408e;\r\n  background: #7c408e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvYWRkLXRlc3QtZm9ybS9hZGQtdGVzdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBRUEsV0FBVztBQUNYO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3QkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL2FkZC10ZXN0LWZvcm0vYWRkLXRlc3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1mb3JtIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBTZWxlY3QgKi9cclxuLmNvdXJzLWZvcm0tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBvdmVyd3JpdGUgc2VsZWN0ICovXHJcbnNlbGVjdCB7XHJcbiAgLXdlYmt0aXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxufVxyXG5cclxuLmNvdXJzLWZvcm0tc2VsZWN0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcXDI1QkNcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGNvbG9yOiAjNTIyNzVmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7ICovXHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxufVxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxufVxyXG5cclxuLmJ0bi10ZXN0IHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDEuM3JlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bi10ZXN0OmhvdmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjN2M0MDhlO1xyXG4gIGJhY2tncm91bmQ6ICM3YzQwOGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/tests/add-test-form/add-test-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tests/add-test-form/add-test-form.component.ts ***!
  \****************************************************************/
/*! exports provided: AddTestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTestFormComponent", function() { return AddTestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_Models_Tests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Tests */ "./src/app/Models/Tests.ts");




let AddTestFormComponent = class AddTestFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.testCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.addTestForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSubmit() {
        this.emitCreatedTest();
    }
    emitCreatedTest() {
        const test = this.buildTests();
        this.testCreated.next(test);
        this.addTestForm.reset();
    }
    buildTests() {
        const name = this.addTestForm.get('name').value;
        const cours = +this.addTestForm.get('cours').value;
        const author = this.professeursComplet.professeur.id;
        const test = new src_app_Models_Tests__WEBPACK_IMPORTED_MODULE_3__["Tests"]();
        test.name = name;
        test.cours = cours;
        test.author = author;
        return test;
    }
};
AddTestFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddTestFormComponent.prototype, "professeursComplet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddTestFormComponent.prototype, "testCreated", void 0);
AddTestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-test-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-test-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/add-test-form/add-test-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-test-form.component.css */ "./src/app/tests/add-test-form/add-test-form.component.css")).default]
    })
], AddTestFormComponent);



/***/ }),

/***/ "./src/app/tests/filter-cours-tests.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/tests/filter-cours-tests.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterProfesseursCoursPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProfesseursCoursPipe", function() { return FilterProfesseursCoursPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterProfesseursCoursPipe = class FilterProfesseursCoursPipe {
    transform(tests, selectedOption) {
        let filteredTests = [];
        if (selectedOption == 0) {
            return tests;
        }
        tests.forEach(test => {
            if (test.cours == selectedOption) {
                filteredTests.push(test);
            }
        });
        console.log(filteredTests);
        return filteredTests;
    }
};
FilterProfesseursCoursPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterCoursTests'
    })
], FilterProfesseursCoursPipe);



/***/ }),

/***/ "./src/app/tests/filter-professeurs-tests.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/tests/filter-professeurs-tests.pipe.ts ***!
  \********************************************************/
/*! exports provided: FilterProfesseursTestsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProfesseursTestsPipe", function() { return FilterProfesseursTestsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterProfesseursTestsPipe = class FilterProfesseursTestsPipe {
    transform(tests, cours) {
        let filteredTests = [];
        tests.forEach(test => {
            cours.forEach(c => {
                // console.log(`Cours of test : ${test.cours}`);
                // console.log(`Id of cours : ${c.id}`);
                if (test.cours == c.id) {
                    filteredTests.push(test);
                    // console.log('true');
                }
                // console.log('---------------');
            });
        });
        console.log(filteredTests);
        return filteredTests;
    }
};
FilterProfesseursTestsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterProfesseursTests',
    })
], FilterProfesseursTestsPipe);



/***/ }),

/***/ "./src/app/tests/filter-question-by-cours.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/tests/filter-question-by-cours.pipe.ts ***!
  \********************************************************/
/*! exports provided: FilterQuestionByCoursPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterQuestionByCoursPipe", function() { return FilterQuestionByCoursPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterQuestionByCoursPipe = class FilterQuestionByCoursPipe {
    transform(questionsComplets, selectedOption) {
        console.log(questionsComplets);
        let qC = [];
        questionsComplets.forEach(q => {
            if (q.cours.id == selectedOption) {
                qC.push(q);
            }
        });
        console.log(qC);
        return qC;
    }
};
FilterQuestionByCoursPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterQuestionByCours'
    })
], FilterQuestionByCoursPipe);



/***/ }),

/***/ "./src/app/tests/filter-question-doublon.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/tests/filter-question-doublon.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FilterQuestionDoublonPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterQuestionDoublonPipe", function() { return FilterQuestionDoublonPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterQuestionDoublonPipe = class FilterQuestionDoublonPipe {
    transform(allquestionsComplets, questionsOfTest) {
        console.log(allquestionsComplets);
        console.log(questionsOfTest);
        if (questionsOfTest.length === 0) {
            console.log('empty');
            return allquestionsComplets;
        }
        let qC = [];
        allquestionsComplets.forEach(question => {
            let i = 0;
            let occurence = false;
            questionsOfTest.forEach(testQuestion => {
                if (question.question.id == testQuestion.question.id) {
                    occurence = true;
                }
                i++;
                if (questionsOfTest.length === i && !occurence) {
                    qC.push(question);
                }
            });
        });
        return qC;
    }
};
FilterQuestionDoublonPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterQuestionDoublon'
    })
], FilterQuestionDoublonPipe);



/***/ }),

/***/ "./src/app/tests/filter-search-test.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/tests/filter-search-test.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterSearchTestPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSearchTestPipe", function() { return FilterSearchTestPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterSearchTestPipe = class FilterSearchTestPipe {
    transform(allTests, searchInput) {
        let tests = [];
        if (searchInput == '') {
            return allTests;
        }
        allTests.forEach(t => {
            console.log(t.name.toLowerCase());
            if (t.name.toLowerCase().includes(searchInput.toLowerCase())) {
                tests.push(t);
            }
        });
        return tests;
    }
};
FilterSearchTestPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterSearchTest'
    })
], FilterSearchTestPipe);



/***/ }),

/***/ "./src/app/tests/single-test/single-test.component.css":
/*!*************************************************************!*\
  !*** ./src/app/tests/single-test/single-test.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  display: flex;\r\n  min-height: 90vh;\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(52, 130, 255) 17%,\r\n    rgba(255, 176, 176, 1) 79%\r\n  );\r\n}\r\n\r\n.test-container {\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  width: 95%;\r\n  margin: 2rem auto;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.2);\r\n  background: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.test-single h3 {\r\n  text-align: center;\r\n  color: white;\r\n  width: 100%;\r\n}\r\n\r\n.flex-box {\r\n  display: flex;\r\n  width: 30%;\r\n  flex-direction: column;\r\n  background: #80808021;\r\n  border-radius: 5px;\r\n  margin: 2rem;\r\n  padding: 2rem;\r\n  height: 33rem;\r\n}\r\n\r\n.test-single.flex-box {\r\n  background-color: #52275f;\r\n}\r\n\r\n.test-single label {\r\n  color: white;\r\n}\r\n\r\n.test-single .modify-button {\r\n  color: #52275f;\r\n  background: white;\r\n  border: 2px solid white;\r\n}\r\n\r\n.test-single .modify-button:hover {\r\n  color: #ffffff;\r\n  background: #52275f;\r\n  border: 2px solid white;\r\n}\r\n\r\n.form-control {\r\n  margin: 1rem 0rem;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n\r\n/* overwrite select */\r\n\r\nselect {\r\n  -webktit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  color: black;\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\n\r\n.cours-form-select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: #52275f;\r\n  overflow: hidden;\r\n  transform: translateY(90%);\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n}\r\n\r\nlabel {\r\n  font-size: 1.4rem;\r\n  color: black;\r\n  padding: 1rem 0rem;\r\n}\r\n\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.modify-button {\r\n  width: 100%;\r\n  background: #52275f;\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 1.3rem;\r\n  border: 2px solid #52275f;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.modify-button:hover {\r\n  border: 2px solid #7c408e;\r\n  background: #7c408e;\r\n}\r\n\r\n.flex-question-container {\r\n  /* display: flex; */\r\n  flex: 1 1 40rem;\r\n  margin: 2rem 0rem;\r\n  margin: 2rem 3rem;\r\n  border-radius: 10px;\r\n  background: #e9e9e9;\r\n  overflow: hidden;\r\n}\r\n\r\n.question-container {\r\n  display: grid;\r\n  width: 95%;\r\n  margin: auto;\r\n  grid-template-columns: repeat(2, minmax(250px, 1fr));\r\n  grid-auto-flow: dense;\r\n  grid-gap: 2rem;\r\n  overflow-y: scroll;\r\n  max-height: 65vh;\r\n}\r\n\r\n/* app-single-solution {\r\n  display: grid;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  place-self: center;\r\n  width: 100%;\r\n} */\r\n\r\n/* Replace with question detail ?  */\r\n\r\n/* QUESTION GRID */\r\n\r\n.views {\r\n  display: flex;\r\n  position: relative;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.views div {\r\n  flex: 1 1 40rem;\r\n  text-align: center;\r\n  font-size: 2.3rem;\r\n  position: relative;\r\n  padding: 1.5rem;\r\n  border-bottom: solid 5px transparent;\r\n  color: #52275f;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n\r\n.added-view > span,\r\n.to-add-view > span {\r\n  position: relative;\r\n  transition: color 0.2s ease 0.4s;\r\n  z-index: 20;\r\n}\r\n\r\n.added-view::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  transition: transform 0.5s ease-in-out, color 0.2s ease 0.4s;\r\n  background: #52275fc2;\r\n}\r\n\r\n.added-view:hover::after {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.added-view:hover span {\r\n  color: white;\r\n}\r\n\r\n.to-add-view::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  transition: transform 0.5s ease-in-out, color 0.2s ease 0.4s;\r\n  background: #52275fc2;\r\n}\r\n\r\n.to-add-view:hover::after {\r\n  transform: translateX(100%);\r\n}\r\n\r\n.to-add-view:hover span {\r\n  color: white;\r\n}\r\n\r\ndiv .active-view {\r\n  border-bottom: 5px solid #52275f;\r\n}\r\n\r\n/* .active-view::after {\r\n  width: 0;\r\n  height: 0;\r\n} */\r\n\r\n/* \r\n.views > div.active-view > span {\r\n  transition: none;\r\n  color: white;\r\n} */\r\n\r\n/* .added-view:hover {\r\n  transform: translateX(100%);\r\n} */\r\n\r\n/* .to-add-view::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  background: #52275fc2;\r\n  transform: translateX(-100%);\r\n} */\r\n\r\n/* \r\n.box {\r\n  background: green;\r\n  width: 95%;\r\n  height: 300px;\r\n  align-self: start;\r\n  justify-self: center;\r\n}\r\n.box:nth-child(3) {\r\n  height: 250px;\r\n}\r\n.box:last-child {\r\n  margin-bottom: 2rem;\r\n} */\r\n\r\n.test-action {\r\n  margin-top: 3rem;\r\n  display: flex;\r\n}\r\n\r\n.test-action .modify-button.see-correctif {\r\n  background: #f7aaaa;\r\n  color: white;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  transition: all 0.2s;\r\n  border: 2px solid #f7aaaa;\r\n}\r\n\r\n.test-action .modify-button.see-correctif:hover {\r\n  background: #d48080;\r\n  border-color: white;\r\n}\r\n\r\n.test-action .modify-button.save-button {\r\n  background: #3079ee;\r\n  color: white;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  transition: all 0.2s;\r\n  border: 2px solid #3079ee;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.test-action .modify-button.save-button:hover {\r\n  background: #265db6;\r\n  border-color: white;\r\n}\r\n\r\n.random-menu {\r\n  margin-top: 5rem;\r\n}\r\n\r\n.random {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  height: 50px;\r\n  align-items: center;\r\n}\r\n\r\n.random-menu p {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.random input {\r\n  max-width: 33%;\r\n  margin-right: 1rem;\r\n  height: 80%;\r\n}\r\n\r\n.random button.generate-random-button {\r\n  flex-grow: 2;\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(211, 52, 255) 17%,\r\n    rgb(105, 85, 159) 79%\r\n  );\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n\r\n.random button.generate-random-button:hover {\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(211, 52, 255) 17%,\r\n    rgb(105, 85, 159) 79%\r\n  );\r\n  -webkit-animation: 2s wiggler infinite;\r\n          animation: 2s wiggler infinite;\r\n}\r\n\r\n@-webkit-keyframes wiggler {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  5% {\r\n    transform: rotate(-5deg);\r\n  }\r\n  10% {\r\n    transform: rotate(+5deg);\r\n  }\r\n  15% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes wiggler {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  5% {\r\n    transform: rotate(-5deg);\r\n  }\r\n  10% {\r\n    transform: rotate(+5deg);\r\n  }\r\n  15% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvc2luZ2xlLXRlc3Qvc2luZ2xlLXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHdCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7R0FNRzs7QUFFSCxvQ0FBb0M7O0FBRXBDLGtCQUFrQjs7QUFDbEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDREQUE0RDtFQUM1RCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNERBQTREO0VBQzVELHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTs7O0dBR0c7O0FBQ0g7Ozs7R0FJRzs7QUFFSDs7R0FFRzs7QUFFSDs7Ozs7Ozs7OztHQVVHOztBQUNIOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBQ0g7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7RUFDWjs7OztHQUlDO0VBQ0QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGOztBQWhCQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL3NpbmdsZS10ZXN0L3NpbmdsZS10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTMyZGVnLFxyXG4gICAgcmdiKDUyLCAxMzAsIDI1NSkgMTclLFxyXG4gICAgcmdiYSgyNTUsIDE3NiwgMTc2LCAxKSA3OSVcclxuICApO1xyXG59XHJcblxyXG4udGVzdC1jb250YWluZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4udGVzdC1zaW5nbGUgaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogIzgwODA4MDIxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBoZWlnaHQ6IDMzcmVtO1xyXG59XHJcblxyXG4udGVzdC1zaW5nbGUuZmxleC1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjI3NWY7XHJcbn1cclxuLnRlc3Qtc2luZ2xlIGxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZXN0LXNpbmdsZSAubW9kaWZ5LWJ1dHRvbiB7XHJcbiAgY29sb3I6ICM1MjI3NWY7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi50ZXN0LXNpbmdsZSAubW9kaWZ5LWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgbWFyZ2luOiAxcmVtIDByZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIG92ZXJ3cml0ZSBzZWxlY3QgKi9cclxuc2VsZWN0IHtcclxuICAtd2Via3RpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG59XHJcblxyXG4uY291cnMtZm9ybS1zZWxlY3Q6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcMjVCQ1wiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgY29sb3I6ICM1MjI3NWY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTAlKTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTIyNzVmO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGlmeS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM1MjI3NWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiAxLjNyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2RpZnktYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjN2M0MDhlO1xyXG4gIGJhY2tncm91bmQ6ICM3YzQwOGU7XHJcbn1cclxuXHJcbi5mbGV4LXF1ZXN0aW9uLWNvbnRhaW5lciB7XHJcbiAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICBmbGV4OiAxIDEgNDByZW07XHJcbiAgbWFyZ2luOiAycmVtIDByZW07XHJcbiAgbWFyZ2luOiAycmVtIDNyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XHJcbiAgZ3JpZC1nYXA6IDJyZW07XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1heC1oZWlnaHQ6IDY1dmg7XHJcbn1cclxuXHJcbi8qIGFwcC1zaW5nbGUtc29sdXRpb24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi8qIFJlcGxhY2Ugd2l0aCBxdWVzdGlvbiBkZXRhaWwgPyAgKi9cclxuXHJcbi8qIFFVRVNUSU9OIEdSSUQgKi9cclxuLnZpZXdzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4udmlld3MgZGl2IHtcclxuICBmbGV4OiAxIDEgNDByZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjNTIyNzVmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYWRkZWQtdmlldyA+IHNwYW4sXHJcbi50by1hZGQtdmlldyA+IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UgMC40cztcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLmFkZGVkLXZpZXc6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCwgY29sb3IgMC4ycyBlYXNlIDAuNHM7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZmMyO1xyXG59XHJcblxyXG4uYWRkZWQtdmlldzpob3Zlcjo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5hZGRlZC12aWV3OmhvdmVyIHNwYW4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvLWFkZC12aWV3OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCwgY29sb3IgMC4ycyBlYXNlIDAuNHM7XHJcbiAgYmFja2dyb3VuZDogIzUyMjc1ZmMyO1xyXG59XHJcblxyXG4udG8tYWRkLXZpZXc6aG92ZXI6OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi50by1hZGQtdmlldzpob3ZlciBzcGFuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmRpdiAuYWN0aXZlLXZpZXcge1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNTIyNzVmO1xyXG59XHJcblxyXG4vKiAuYWN0aXZlLXZpZXc6OmFmdGVyIHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn0gKi9cclxuLyogXHJcbi52aWV3cyA+IGRpdi5hY3RpdmUtdmlldyA+IHNwYW4ge1xyXG4gIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59ICovXHJcblxyXG4vKiAuYWRkZWQtdmlldzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59ICovXHJcblxyXG4vKiAudG8tYWRkLXZpZXc6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICM1MjI3NWZjMjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59ICovXHJcbi8qIFxyXG4uYm94IHtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmJveDpudGgtY2hpbGQoMykge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuLmJveDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59ICovXHJcbi50ZXN0LWFjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi50ZXN0LWFjdGlvbiAubW9kaWZ5LWJ1dHRvbi5zZWUtY29ycmVjdGlmIHtcclxuICBiYWNrZ3JvdW5kOiAjZjdhYWFhO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjdhYWFhO1xyXG59XHJcbi50ZXN0LWFjdGlvbiAubW9kaWZ5LWJ1dHRvbi5zZWUtY29ycmVjdGlmOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZDQ4MDgwO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZXN0LWFjdGlvbiAubW9kaWZ5LWJ1dHRvbi5zYXZlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogIzMwNzllZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzMwNzllZTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnRlc3QtYWN0aW9uIC5tb2RpZnktYnV0dG9uLnNhdmUtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjY1ZGI2O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnJhbmRvbS1tZW51IHtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG59XHJcbi5yYW5kb20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmFuZG9tLW1lbnUgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ucmFuZG9tIGlucHV0IHtcclxuICBtYXgtd2lkdGg6IDMzJTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLnJhbmRvbSBidXR0b24uZ2VuZXJhdGUtcmFuZG9tLWJ1dHRvbiB7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEzMmRlZyxcclxuICAgIHJnYigyMTEsIDUyLCAyNTUpIDE3JSxcclxuICAgIHJnYigxMDUsIDg1LCAxNTkpIDc5JVxyXG4gICk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnJhbmRvbSBidXR0b24uZ2VuZXJhdGUtcmFuZG9tLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTMyZGVnLFxyXG4gICAgcmdiKDIxMSwgNTIsIDI1NSkgMTclLFxyXG4gICAgcmdiKDEwNSwgODUsIDE1OSkgNzklXHJcbiAgKTtcclxuICBhbmltYXRpb246IDJzIHdpZ2dsZXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2lnZ2xlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKCs1ZGVnKTtcclxuICB9XHJcbiAgMTUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tests/single-test/single-test.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tests/single-test/single-test.component.ts ***!
  \************************************************************/
/*! exports provided: SingleTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTestComponent", function() { return SingleTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/professeurs-complet.service */ "./src/app/services/professeurs-complet.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_tests_complet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tests-complet.service */ "./src/app/services/tests-complet.service.ts");
/* harmony import */ var src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tests.service */ "./src/app/services/tests.service.ts");
/* harmony import */ var src_app_services_cours_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cours.service */ "./src/app/services/cours.service.ts");
/* harmony import */ var src_app_Models_Tests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Tests */ "./src/app/Models/Tests.ts");
/* harmony import */ var src_app_Models_TestsComplet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/TestsComplet */ "./src/app/Models/TestsComplet.ts");
/* harmony import */ var src_app_Models_QuestionsComplet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Models/QuestionsComplet */ "./src/app/Models/QuestionsComplet.ts");
/* harmony import */ var src_app_services_questions_complet_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/questions-complet.service */ "./src/app/services/questions-complet.service.ts");
/* harmony import */ var src_app_Models_Questions_Tests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Models/Questions_Tests */ "./src/app/Models/Questions_Tests.ts");
/* harmony import */ var src_app_services_questions_tests_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/questions-tests.service */ "./src/app/services/questions-tests.service.ts");
/* harmony import */ var _filter_question_by_cours_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../filter-question-by-cours.pipe */ "./src/app/tests/filter-question-by-cours.pipe.ts");















let SingleTestComponent = class SingleTestComponent {
    constructor(router, route, professeurCompletService, testsService, testsCompletService, questionsCompletService, coursService, questionsTestsService, formBuilder) {
        this.router = router;
        this.route = route;
        this.professeurCompletService = professeurCompletService;
        this.testsService = testsService;
        this.testsCompletService = testsCompletService;
        this.questionsCompletService = questionsCompletService;
        this.coursService = coursService;
        this.questionsTestsService = questionsTestsService;
        this.formBuilder = formBuilder;
        this.addedView = true;
        this.unmodifiedTestsComplet = null;
        this.currentTestsComplet = null;
        this.allQuestionsComplets = [];
        this.listQuestionSorted = [];
        this.subscriptions = [];
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.getTests(id);
        this.getTestsComplet(id);
        this.getAllQuestionsComplets();
        this.getTestsObservable(id);
        this.getTestsCompletObservable(id);
        this.getProfesseursCompletObservable();
        this.initForm();
    }
    getAllQuestionsComplets() {
        const sub = this.questionsCompletService
            .query()
            .subscribe(qcs => {
            this.allQuestionsComplets = qcs.map(qc => new src_app_Models_QuestionsComplet__WEBPACK_IMPORTED_MODULE_10__["QuestionsComplet"]().fromQuestionsCompletDTO(qc));
            console.log(this.allQuestionsComplets);
        });
        this.subscriptions.push(sub);
    }
    getTestsComplet(id) {
        const sub = this.testsCompletService
            .get(id)
            .subscribe(testCompletDTO => {
            this.currentTestsComplet = new src_app_Models_TestsComplet__WEBPACK_IMPORTED_MODULE_9__["TestsComplet"]().fromTestsCompletDTO(testCompletDTO);
            this.modifyTestForm.get('coursSelect').setValue(this.currentTestsComplet.test.cours);
            this.unmodifiedTestsComplet = this.currentTestsComplet;
            console.log(this.currentTestsComplet);
            console.log(this.currentTestsComplet.questionComplets);
        });
        this.subscriptions.push(sub);
    }
    ngOnDestroy() {
        for (let i = this.subscriptions.length - 1; i >= 0; i--) {
            const subscription = this.subscriptions[i];
            subscription && subscription.unsubscribe();
            this.subscriptions.pop();
        }
    }
    getTests(id) {
        const sub = this.testsService
            .get(id)
            .subscribe(testDTO => {
            this.unmodifiedTest = new src_app_Models_Tests__WEBPACK_IMPORTED_MODULE_8__["Tests"]().fromTestsDTO(testDTO);
            console.log(this.unmodifiedTest);
        });
        this.subscriptions.push(sub);
    }
    getTestsObservable(id) {
        this.tests$ = this.testsService.get(id);
    }
    getTestsCompletObservable(id) {
        this.testsComplet$ = this.testsCompletService.get(id);
        this.testsComplet$.subscribe(test => {
            this.unmodifiedTestsComplet = new src_app_Models_TestsComplet__WEBPACK_IMPORTED_MODULE_9__["TestsComplet"]().fromTestsCompletDTO(test);
        });
    }
    getProfesseursCompletObservable() {
        this.professeurComplet$ = this.professeurCompletService.get(this.user.id);
    }
    initForm() {
        this.modifyTestForm = this.formBuilder.group({
            nameInput: null,
            coursSelect: null
        });
    }
    onSubmit() {
        const updatedTest = this.updatedTest(this.unmodifiedTest);
        console.log(updatedTest.toTestsDTO());
        const sub = this.testsService
            .put(updatedTest.toTestsDTO())
            .subscribe(() => {
            this.unmodifiedTest = updatedTest;
            this.launchNotification('This Test has been modified ! 👌', 'success');
        });
        this.subscriptions.push(sub);
        /* delete previous questions because not the same cours */
        const subdelete = this.questionsTestsService
            .deleteByTest(+this.route.snapshot.params['id'])
            .subscribe();
        this.subscriptions.push(subdelete);
    }
    updatedTest(unmodifiedTest) {
        unmodifiedTest.name = (this.modifyTestForm.get('nameInput').value == null ? this.unmodifiedTest.name : this.modifyTestForm.get('nameInput').value);
        unmodifiedTest.cours = (this.modifyTestForm.get('coursSelect').value == null ? this.unmodifiedTest.cours : +this.modifyTestForm.get('coursSelect').value);
        console.log(unmodifiedTest);
        return unmodifiedTest;
    }
    setActiveView($event) {
        const view = document.querySelector(`.${$event.currentTarget.classList[0]}`);
        document.querySelector('.to-add-view').classList.remove('active-view');
        document.querySelector('.added-view').classList.remove('active-view');
        view.classList.add('active-view');
        if ($event.currentTarget.classList[0] === 'to-add-view') {
            this.addedView = false;
        }
        else {
            this.addedView = true;
        }
    }
    removeQuestion($event) {
        console.log($event);
        this.currentTestsComplet.questionComplets = this.currentTestsComplet.questionComplets.filter(question => {
            if ($event.id != question.question.id) {
                return question;
            }
            else {
                //this.allQuestionsComplets.push(question);
                const questionToPush = this.allQuestionsComplets.find(allQ => allQ.question.id == question.question.id);
                if (questionToPush === undefined) {
                    this.allQuestionsComplets.push(question);
                }
            }
        });
        console.log(this.currentTestsComplet.questionComplets);
    }
    addQuestion($event) {
        console.log($event);
        this.allQuestionsComplets = this.allQuestionsComplets.filter(question => {
            if ($event.id == question.question.id) {
                this.currentTestsComplet.questionComplets.push(question);
            }
            else {
                return question;
            }
        });
    }
    saveTest() {
        /* Get list of ids to delete and post from */
        // let idToDelete: number[] = [];
        // let idToPost: number[] = [];
        console.log(this.unmodifiedTestsComplet.questionComplets);
        console.log(this.currentTestsComplet.questionComplets);
        this.deleteQuestionsOfTest();
        // console.log(this.unmodifiedTestsComplet.questionComplets.length)
        // /* Filter test is called to filter each array with the other to get either the id that needs deleting or posting */
        // if (this.currentTestsComplet.questionComplets.length === 0) {
        //   this.unmodifiedTestsComplet.questionComplets.forEach(question => {
        //     idToDelete.push(question.question.id);
        //   })
        // } else {
        //   console.log("---------------------Tri sur delete---------------------");
        //   idToDelete = this.filterTest(this.unmodifiedTestsComplet.questionComplets, this.currentTestsComplet.questionComplets);
        // }
        // if (this.unmodifiedTestsComplet.questionComplets.length === 0) {
        //   this.currentTestsComplet.questionComplets.forEach(question => {
        //     idToPost.push(question.question.id);
        //   })
        // } else {
        //   console.log("-------------Tri sur Post--------------------");
        //   idToPost = this.filterTest(this.currentTestsComplet.questionComplets, this.unmodifiedTestsComplet.questionComplets);
        // }
        // //idToPost = this.filterTest(this.currentTestsComplet.questionComplets, this.unmodifiedTestsComplet.questionComplets);
        // console.log('-------------Back to saveTest()-----------------')
        // console.log(idToDelete);
        // console.log(idToPost);
        // /* Build Questions_Tests Object from ids list */
        // const questionsToDelete: Questions_Tests[] = this.buildQuestions_Tests(idToDelete);
        // const questionsToPost: Questions_Tests[] = this.buildQuestions_Tests(idToPost);
        // console.log(questionsToDelete);
        // console.log(questionsToPost);
        // // questionsToPost.forEach(q => {
        // //   console.log(q.toQuestions_TestsDTO());
        // // })
        // this.deleteQuestionsOfTest(questionsToDelete);
        // this.postQuestionsOfTest(questionsToPost);
        // this.unmodifiedTestsComplet = this.currentTestsComplet;
        // console.log(this.currentTestsComplet);
        // console.log(this.unmodifiedTestsComplet);
        //this.getTestsComplet(+this.route.snapshot.params['id'])
    }
    postQuestionsOfTest(questionsTests) {
        // this.currentTestsComplet.questionComplets.forEach(question => {
        //   console.log(question.toQuestions_TestsDTO());
        //   let sub = this.questionsTestsService
        //     .post(question.toQuestions_TestsDTO())
        //     .subscribe();
        //   this.subscriptions.push(sub);
        // })
        questionsTests.forEach(qt => {
            let sub = this.questionsTestsService
                .post(qt.toQuestions_TestsDTO())
                .subscribe(() => {
                this.getTestsComplet(+this.route.snapshot.params['id']);
                this.launchNotification('This Test has been saved ! 🌈', 'info');
            });
            this.subscriptions.push(sub);
        });
    }
    deleteQuestionsOfTest() {
        // this.currentTestsComplet.questionComplets.forEach(question => {
        //   let sub = this.questionsTestsService
        //     .deleteByTest(+this.route.snapshot.params['id'])
        //     .subscribe(whatev => {
        //       console.log('Question deleted ..');
        //       this.postQuestionsOfTest();
        //     });
        //   this.subscriptions.push(sub);
        // })
        // const sub = this.questionsService
        //   .delete($event.id)
        //   .subscribe(whatev => {
        //     /* Recall Observable to refresh */
        //     this.getObservable();
        //   })
        // this.subscriptionsQuestions.push(sub);
        const sub = this.questionsTestsService
            .deleteByTest(+this.route.snapshot.params['id'])
            .subscribe(() => {
            const questionsToPost = this.buildQuestions_Tests();
            this.postQuestionsOfTest(questionsToPost);
        }, (error) => {
            const questionsToPost = this.buildQuestions_Tests();
            this.postQuestionsOfTest(questionsToPost);
        });
        this.subscriptions.push(sub);
    }
    buildQuestions_Tests() {
        let questionsTests = [];
        this.currentTestsComplet.questionComplets.forEach(q => {
            questionsTests.push(new src_app_Models_Questions_Tests__WEBPACK_IMPORTED_MODULE_12__["Questions_Tests"](q.question.id, +this.route.snapshot.params['id']));
        });
        return questionsTests;
    }
    // filterTest(list1: QuestionsComplet[], list2: QuestionsComplet[]): number[] {
    //   let listOfId: number[] = [];
    //   list1.forEach(question1 => {
    //     console.log('----Test----');
    //     console.log(question1.question.id);
    //     let i: number = 0;
    //     let occurence: boolean = false;
    //     list2.forEach(question2 => {
    //       console.log(question2.question.id);
    //       if (question1.question.id == question2.question.id) {
    //         occurence = true;
    //       }
    //       i++;
    //       console.log(`Index : ${i}`)
    //       console.log(`Length : ${list2.length}`)
    //       console.log(`Occurence : ${occurence}`)
    //       if (i === list2.length && occurence === false) {
    //         console.log('Hello Again');
    //         console.log(question1.question.id);
    //         listOfId.push(question1.question.id);
    //       }
    //     })
    //   });
    //   console.log(listOfId);
    //   console.log(list1);
    //   console.log(list2);
    //   return listOfId;
    // }
    generateRandomTest() {
        const filter = new _filter_question_by_cours_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterQuestionByCoursPipe"]();
        const filteredArray = filter.transform(this.allQuestionsComplets, this.currentTestsComplet.test.cours);
        const randomQuestions = [];
        let listIndexes = [];
        /* Check selectOption parameter */
        if (this.numberOfQuestion == null || this.numberOfQuestion < 1) {
            this.numberOfQuestion = 1;
        }
        else if (this.numberOfQuestion >= filteredArray.length) {
            this.numberOfQuestion = filteredArray.length;
            this.currentTestsComplet.questionComplets = filteredArray;
            this.launchNotification('Random Test has been generated ! 👾', 'random');
            return;
        }
        listIndexes = this.getIndexesWithoutDuplicate(filteredArray);
        listIndexes.forEach(index => {
            randomQuestions.push(filteredArray[index - 1]);
        });
        this.currentTestsComplet.questionComplets = randomQuestions;
        this.launchNotification('Random Test has been generated ! 👾', 'random');
    }
    getIndexesWithoutDuplicate(filteredArray) {
        const listIndexes = [];
        for (let i = 0; i < this.numberOfQuestion; i++) {
            let randomNumber = Math.floor(Math.random() * filteredArray.length) + 1;
            while (listIndexes.find(index => index === randomNumber) !== undefined) {
                randomNumber = Math.floor(Math.random() * this.numberOfQuestion) + 1;
            }
            listIndexes.push(randomNumber);
        }
        return listIndexes;
    }
    navigateToCorrectif() {
        this.router.navigate(['/correctifs', +this.route.snapshot.params['id']]);
    }
    launchNotification(notificationMessage, type) {
        const notification = document.querySelector('.notification');
        const message = document.querySelector('.notification > p');
        console.log(message.textContent);
        message.textContent = notificationMessage;
        notification.classList.add('visible');
        notification.classList.add(type);
        const delay = 3500;
        setTimeout(function () {
            notification.classList.remove('visible');
        }, delay);
        setTimeout(function () {
            notification.classList.remove(type);
        }, 4000);
    }
};
SingleTestComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_3__["ProfesseursCompletService"] },
    { type: src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_6__["TestsService"] },
    { type: src_app_services_tests_complet_service__WEBPACK_IMPORTED_MODULE_5__["TestsCompletService"] },
    { type: src_app_services_questions_complet_service__WEBPACK_IMPORTED_MODULE_11__["QuestionsCompletService"] },
    { type: src_app_services_cours_service__WEBPACK_IMPORTED_MODULE_7__["CoursService"] },
    { type: src_app_services_questions_tests_service__WEBPACK_IMPORTED_MODULE_13__["QuestionsTestsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SingleTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/single-test/single-test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-test.component.css */ "./src/app/tests/single-test/single-test.component.css")).default]
    })
], SingleTestComponent);



/***/ }),

/***/ "./src/app/tests/test-detail/test-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/tests/test-detail/test-detail.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detail-test {\r\n  width: 90%;\r\n  margin: 0.5rem auto;\r\n  padding: 1rem 2rem;\r\n  background: #80808021;\r\n  line-height: 2rem;\r\n  border-radius: 2px;\r\n  transition: all 0.2s ease;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 10;\r\n}\r\n\r\n.detail-test:hover {\r\n  background: #9748af3d;\r\n}\r\n\r\n/* .detail-question:last-child {\r\n  margin-bottom: 2rem;\r\n} */\r\n\r\n.test-button {\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  right: 2rem;\r\n}\r\n\r\n.test-button span {\r\n  padding: 0.7rem 1rem;\r\n  border-radius: 2px;\r\n  opacity: 0.8;\r\n  transition: all 0.2s;\r\n  font-size: 1.8rem !important;\r\n}\r\n\r\n.test-button span:hover {\r\n  padding: 0.7rem 1rem;\r\n  border-radius: 2px;\r\n  opacity: 1;\r\n  transform: scale(110%);\r\n  cursor: pointer;\r\n}\r\n\r\n.test-button span.edit {\r\n  margin-right: 0.5rem;\r\n  background: rgb(250, 135, 68);\r\n  color: white;\r\n}\r\n\r\n.test-button span.delete {\r\n  background: rgb(219, 52, 52);\r\n  color: white;\r\n  border: none;\r\n}\r\n\r\n.detail-test span {\r\n  font-size: 1.1rem;\r\n  color: grey;\r\n}\r\n\r\n.question {\r\n  /* border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  margin: 0.5rem 0rem;\r\n  background-color: #dc3545; */\r\n  color: white;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  margin: 0.5rem 0rem;\r\n}\r\n\r\n.question.no-question {\r\n  background: #f9c6c6;\r\n  color: black;\r\n}\r\n\r\n.question.question-not-empty {\r\n  background: #3179ee;\r\n}\r\n\r\np {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdGVzdC1kZXRhaWwvdGVzdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTs7R0FFRzs7QUFDSDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFOzs7OEJBRzRCO0VBQzVCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC90ZXN0cy90ZXN0LWRldGFpbC90ZXN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbC10ZXN0IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMC41cmVtIGF1dG87XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICM4MDgwODAyMTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmRldGFpbC10ZXN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjOTc0OGFmM2Q7XHJcbn1cclxuLyogLmRldGFpbC1xdWVzdGlvbjpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59ICovXHJcbi50ZXN0LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4udGVzdC1idXR0b24gc3BhbiB7XHJcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGVzdC1idXR0b24gc3Bhbjpob3ZlciB7XHJcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXN0LWJ1dHRvbiBzcGFuLmVkaXQge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTAsIDEzNSwgNjgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlc3QtYnV0dG9uIHNwYW4uZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCA1MiwgNTIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5kZXRhaWwtdGVzdCBzcGFuIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICAvKiBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW0gMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1OyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW0gMHJlbTtcclxufVxyXG4ucXVlc3Rpb24ubm8tcXVlc3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmOWM2YzY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucXVlc3Rpb24ucXVlc3Rpb24tbm90LWVtcHR5IHtcclxuICBiYWNrZ3JvdW5kOiAjMzE3OWVlO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tests/test-detail/test-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tests/test-detail/test-detail.component.ts ***!
  \************************************************************/
/*! exports provided: TestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDetailComponent", function() { return TestDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Models_Tests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/Tests */ "./src/app/Models/Tests.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_questions_tests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/questions-tests.service */ "./src/app/services/questions-tests.service.ts");
/* harmony import */ var src_app_services_cours_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cours.service */ "./src/app/services/cours.service.ts");
/* harmony import */ var src_app_services_professeurs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/professeurs.service */ "./src/app/services/professeurs.service.ts");







let TestDetailComponent = class TestDetailComponent {
    constructor(router, questions_testsService, coursService, professeursService) {
        this.router = router;
        this.questions_testsService = questions_testsService;
        this.coursService = coursService;
        this.professeursService = professeursService;
        this.testDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.getQuestionsTestsObservable();
        this.getCoursObservable();
        this.getProfesseursObservable();
    }
    getProfesseursObservable() {
        this.cours$ = this.coursService.get(this.test.cours);
    }
    getCoursObservable() {
        this.professeurs$ = this.professeursService.get(this.test.author);
    }
    getQuestionsTestsObservable() {
        this.questions_tests$ = this.questions_testsService.getByTest(this.test.id);
    }
    emitDeletedTest() {
        const test = new src_app_Models_Tests__WEBPACK_IMPORTED_MODULE_2__["Tests"]().fromTestsDTO(this.test);
        this.testDeleted.next(test);
    }
    onViewTest(id) {
        this.router.navigate(['/tests', 'view', id]);
    }
};
TestDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_questions_tests_service__WEBPACK_IMPORTED_MODULE_4__["QuestionsTestsService"] },
    { type: src_app_services_cours_service__WEBPACK_IMPORTED_MODULE_5__["CoursService"] },
    { type: src_app_services_professeurs_service__WEBPACK_IMPORTED_MODULE_6__["ProfesseursService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TestDetailComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TestDetailComponent.prototype, "test", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TestDetailComponent.prototype, "professeurComplet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TestDetailComponent.prototype, "testDeleted", void 0);
TestDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/test-detail/test-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-detail.component.css */ "./src/app/tests/test-detail/test-detail.component.css")).default]
    })
], TestDetailComponent);



/***/ }),

/***/ "./src/app/tests/test-list/test-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tests/test-list/test-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1 1 40rem;\r\n  min-height: 90vh;\r\n  background: linear-gradient(\r\n    132deg,\r\n    rgb(52, 130, 255) 17%,\r\n    rgba(255, 176, 176, 1) 79%\r\n  );\r\n}\r\n\r\n.flex-container {\r\n  align-items: start;\r\n}\r\n\r\n.flex.box {\r\n  position: relative;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  width: 90%;\r\n  margin: 1rem 2rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.2);\r\n  background: white;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.search {\r\n  position: absolute;\r\n  top: 1.5rem;\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n\r\n#searchInput {\r\n  border: none;\r\n  outline: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid #52275f;\r\n  position: relative;\r\n  width: 4rem;\r\n  transition: width 0.5s ease-in-out, padding 0.01s ease 0.2s,\r\n    border-color 0.2s ease 0.1s;\r\n  float: right;\r\n  /* padding-right: 5rem; */\r\n}\r\n\r\n.search:hover #searchInput {\r\n  width: 30%;\r\n  padding-right: 5rem;\r\n  border-color: #327cf4;\r\n}\r\n\r\n#searchInput:focus {\r\n  width: 30%;\r\n  padding-right: 5rem;\r\n}\r\n\r\n/* \r\n#searchInput:focus + span {\r\n  background: #52275f;\r\n} */\r\n\r\n.search span {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.25rem;\r\n  transform: translateY(-50%);\r\n  font-size: 1.8rem;\r\n  border-radius: 5px;\r\n  background: #327cf4;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.add-form {\r\n  min-height: 0;\r\n}\r\n\r\n.flex-select {\r\n  width: 90%;\r\n  display: flex;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.flex h3 {\r\n  padding: 2rem 2rem;\r\n  color: #52275f;\r\n  font-weight: 500;\r\n}\r\n\r\n/* overwrite select */\r\n\r\nselect {\r\n  -webktit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 1.5rem;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-radius: 3px;\r\n  background-color: #52275f;\r\n}\r\n\r\n.flex-select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 0;\r\n  padding: 1.5rem;\r\n  pointer-events: none;\r\n  transition: all 0.2s ease;\r\n  color: white;\r\n  overflow: hidden;\r\n  /* transform: translateY(50%); */\r\n}\r\n\r\nsvg {\r\n  background: transparent !important;\r\n  height: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdGVzdC1saXN0L3Rlc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYOytCQUM2QjtFQUM3QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUNBOzs7R0FHRzs7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsd0JBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL3Rlc3QtbGlzdC90ZXN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleDogMSAxIDQwcmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTMyZGVnLFxyXG4gICAgcmdiKDUyLCAxMzAsIDI1NSkgMTclLFxyXG4gICAgcmdiYSgyNTUsIDE3NiwgMTc2LCAxKSA3OSVcclxuICApO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmZsZXguYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAxcmVtIDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEuNXJlbTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3NlYXJjaElucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUyMjc1ZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dCwgcGFkZGluZyAwLjAxcyBlYXNlIDAuMnMsXHJcbiAgICBib3JkZXItY29sb3IgMC4ycyBlYXNlIDAuMXM7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDVyZW07ICovXHJcbn1cclxuLnNlYXJjaDpob3ZlciAjc2VhcmNoSW5wdXQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcclxuICBib3JkZXItY29sb3I6ICMzMjdjZjQ7XHJcbn1cclxuXHJcbiNzZWFyY2hJbnB1dDpmb2N1cyB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xyXG59XHJcbi8qIFxyXG4jc2VhcmNoSW5wdXQ6Zm9jdXMgKyBzcGFuIHtcclxuICBiYWNrZ3JvdW5kOiAjNTIyNzVmO1xyXG59ICovXHJcblxyXG4uc2VhcmNoIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMC4yNXJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMjdjZjQ7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uYWRkLWZvcm0ge1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5mbGV4LXNlbGVjdCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZmxleCBoMyB7XHJcbiAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gIGNvbG9yOiAjNTIyNzVmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIG92ZXJ3cml0ZSBzZWxlY3QgKi9cclxuc2VsZWN0IHtcclxuICAtd2Via3RpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjI3NWY7XHJcbn1cclxuXHJcbi5mbGV4LXNlbGVjdDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNUJDXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMC41cmVtO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpOyAqL1xyXG59XHJcblxyXG5zdmcge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tests/test-list/test-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tests/test-list/test-list.component.ts ***!
  \********************************************************/
/*! exports provided: TestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestListComponent", function() { return TestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tests.service */ "./src/app/services/tests.service.ts");
/* harmony import */ var src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/professeurs-complet.service */ "./src/app/services/professeurs-complet.service.ts");
/* harmony import */ var src_app_Models_ProfesseursComplet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/ProfesseursComplet */ "./src/app/Models/ProfesseursComplet.ts");





let TestListComponent = class TestListComponent {
    constructor(testsService, professeursCompletService) {
        this.testsService = testsService;
        this.professeursCompletService = professeursCompletService;
        this.selectedCoursOption = 0;
        this.searchInput = '';
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        this.subscriptions = [];
    }
    ngOnInit() {
        this.getTestsObservable();
        this.getProfesseursCompletObservable();
    }
    ngOnDestroy() {
        for (let i = this.subscriptions.length - 1; i >= 0; i--) {
            const subscription = this.subscriptions[i];
            subscription && subscription.unsubscribe();
            this.subscriptions.pop();
        }
    }
    getProfesseursCompletObservable() {
        const id = this.user.id;
        this.professeursComplet$ = this.professeursCompletService.get(id);
        const sub = this.professeursCompletService
            .get(id)
            .subscribe(profC => {
            this._professeursComplet = new src_app_Models_ProfesseursComplet__WEBPACK_IMPORTED_MODULE_4__["ProfesseursComplet"]().fromProfesseursCompletDTO(profC);
            console.log(profC);
        });
        this.subscriptions.push(sub);
    }
    getTestsObservable() {
        this.tests$ = this.testsService.query();
    }
    launchNotification() {
        const notification = document.querySelector('.notification');
        const message = document.querySelector('.notification > p');
        console.log(message.textContent);
        message.textContent = 'Test has been successfully created ! 😎';
        notification.classList.add('visible');
        const delay = 3500;
        setTimeout(function () {
            notification.classList.remove('visible');
        }, delay);
    }
    // resetSearch() {
    //   // reset after animation ends
    //   setTimeout(
    //     this.searchInput = ''
    //     , 1000);
    // }
    createTest($event) {
        console.log($event);
        const sub = this.testsService
            .post($event.toTestsDTO())
            .subscribe(test => {
            console.log(test);
            this.getTestsObservable();
            this.launchNotification();
        });
        this.subscriptions.push(sub);
    }
    deleteTest($event) {
        console.log($event);
        if (confirm("Do you want to delete this test ?")) {
            const sub = this.testsService
                .delete($event.id)
                .subscribe(whatev => {
                console.log(whatev);
                this.getTestsObservable();
            });
            this.subscriptions.push(sub);
        }
    }
    get professeursComplet() {
        return this._professeursComplet;
    }
    set professeursComplet(value) {
        this._professeursComplet = value;
    }
};
TestListComponent.ctorParameters = () => [
    { type: src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_2__["TestsService"] },
    { type: src_app_services_professeurs_complet_service__WEBPACK_IMPORTED_MODULE_3__["ProfesseursCompletService"] }
];
TestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/test-list/test-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-list.component.css */ "./src/app/tests/test-list/test-list.component.css")).default]
    })
], TestListComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HELHA\HELHA\3BIG\PROJET\Angular\bloc3-projet-aout-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map