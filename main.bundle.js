webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatHeaderWrapper {\n    height: 90px;\n    color: #222;\n    box-shadow: 0 2px 3px rgba(0,0,0,0.37), 1px 2px 3px rgba(0,0,0,0.54);\n    z-index: 2;\n}\n\n.chatRoom {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\nrouter-outlet {\n    height:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatRoom\">\n  <div class=\"chatHeaderWrapper\">\n    <app-navbar></app-navbar>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'BaseChat';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_form_chat_form_component__ = __webpack_require__("../../../../../src/app/chat-form/chat-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feed_feed_component__ = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_item_user_item_component__ = __webpack_require__("../../../../../src/app/user-item/user-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__routes__ = __webpack_require__("../../../../../src/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_form_chat_form_component__["a" /* ChatFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chatroom_chatroom_component__["a" /* ChatroomComponent */],
            __WEBPACK_IMPORTED_MODULE_10__feed_feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_11__message_message_component__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signup_form_signup_form_component__["a" /* SignupFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_item_user_item_component__["a" /* UserItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].firebase),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__services_chat_service__["a" /* ChatService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-form/chat-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatInput{\n    -webkit-box-flex: 10;\n        -ms-flex: 10;\n            flex: 10;\n    font-size: 1.3em;\n    font-family: 'Open Sans', sans-serif;\n    background-color: #eee;\n    color: #000;\n    transition: 0.1s ease-out;\n    padding-left: 80px;\n}\n\n.chatInput:focus{\n    background-color: #E4F1FE;\n    color: #222;\n    transition: 0.2s ease-in;\n}\n\n.chatButton{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 10px;\n    padding: 8px 24px;\n    font-size: 1.3em;\n    font-family: 'Droid Sans', sans-serif;\n    background-color: #2A2845;\n    color: white;\n    transition: 0.2s ease-out;\n    min-width: 50px;\n}\n\n.chatButton:hover{\n    background-color: #444;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-form/chat-form.component.html":
/***/ (function(module, exports) {

module.exports = "<input \n    class=\"chatInput\" \n    [(ngModel)]=\"message\" \n    (keydown)=\"handleSubmit($event)\"\n    />\n\n<button class=\"chatButton\" \n  (click)=send()>Send</button>\n"

/***/ }),

/***/ "../../../../../src/app/chat-form/chat-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatFormComponent = (function () {
    function ChatFormComponent(chat) {
        this.chat = chat;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.send = function () {
        this.chat.sendMessage(this.message);
        this.message = '';
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    return ChatFormComponent;
}());
ChatFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chat-form',
        template: __webpack_require__("../../../../../src/app/chat-form/chat-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-form/chat-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatFormComponent);

var _a;
//# sourceMappingURL=chat-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/chatroom/chatroom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainContent{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.userListWrapper {\n    background-color: #2A2845;\n    color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.2em;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    padding:20px 0px 40px 30px;\n    border-right: 1px solid #222;\n}\n\n.feedWrapper {\n    background-color: #fff;\n    background: \n        linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0, 0, 0, 0.9)),\n        url(" + __webpack_require__("../../../../../src/assets/img/bg.jpg") + ") center center no-repeat;;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.2em;\n    -webkit-box-flex: 5;\n        -ms-flex: 5;\n            flex: 5;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n    overflow-y: scroll;\n    padding:20px 0px 0px 24px;\n}\n\n.chatFormWrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 50px;\n    background-color: #eee;\n    z-index: 3;\n}\n\n#scroll-style::-webkit-scrollbar-track\n{\n\tborder-radius: 10px;\n\tbackground-color: #F5F5F5;\n}\n\napp-user-list {\n    width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\n  <div class=\"userListWrapper\">\n    <app-user-list></app-user-list>\n  </div>\n  <div #scroller class=\"feedWrapper\">\n    <app-feed></app-feed>\n  </div>\n</div>\n\n<div class=\"chatFormWrapper\">\n  <app-chat-form></app-chat-form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatroomComponent = (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop
            = this.feedContainer.nativeElement.scrollHeight;
    };
    ChatroomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    return ChatroomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('scroller'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], ChatroomComponent.prototype, "feedContainer", void 0);
ChatroomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chatroom',
        template: __webpack_require__("../../../../../src/app/chatroom/chatroom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chatroom/chatroom.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatroomComponent);

var _a;
//# sourceMappingURL=chatroom.component.js.map

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".feed{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.message{\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 10px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n  <div *ngFor=\"let message of feed | async\" class=\"message\">\n    <app-message [chatMessage]=message></app-message>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = (function () {
    function FeedComponent(chat) {
        this.chat = chat;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.feed = this.chat.getMessages();
    };
    FeedComponent.prototype.ngOnChanges = function () {
        this.feed = this.chat.getMessages();
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-feed',
        template: __webpack_require__("../../../../../src/app/feed/feed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feed/feed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], FeedComponent);

var _a;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  height: 100%;\n  overflow:hidden;\n  background: \n    linear-gradient(45deg, rgba(255,103,0,0.3), rgba(0, 0, 80, 0.9)),\n    url(" + __webpack_require__("../../../../../src/assets/img/login-1.jpg") + ") center center no-repeat;;\n}\n\n.loginCard{\n  display: block;\n  border: 1px solid #000;\n  border-radius: 4px;\n  background-color: rgba(255,255,255,0.85);\n  width: 700px;\n  height: 420px;\n  margin: auto;\n  margin-top: 40px;\n  text-align: center;\n  padding: 80px 30px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n  overflow: hidden;\n}\n\n.formInput{\n  margin: auto;\n  margin-top: 16px;\n  display: block;\n  width: 60%;\n  height: 40px;\n  border-radius:4px;\n  background:#ecf0f1;\n  border: #ccc 1px solid;\n  padding: 8px;\n  font-size:1em;\n}\n\n.btn{\n  height: 54px;\n  width: 60%;\n  margin: auto;\n  margin-top: 16px;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n  transition: ease-in 0.2s;\n}\n\n#btn-signUp{\n    background-color:#2A2845;\n}\n\n#btn-signUp:hover{\n    background-color:#4A4865;\n    transition: ease-in 0.2s;\n}\n\n#btn-login{\n    background-color:#4A4875;\n}\n\n#btn-login:hover{\n    background-color:#5A5895;\n    transition: ease-in 0.2s;\n}\n\nh2{\n    height: 2em;\n}\n\na {\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"loginCard\">\n    <h2 class=\"heading\">Log In</h2>\n      <input \n        [(ngModel)]=\"email\"\n        type=\"email\" \n        name=\"email\"\n        placeholder=\"Enter your email address\"\n        class=\"formInput\" />\n      <input type=\"password\" \n        [(ngModel)]=\"password\"\n        name=\"password\" \n        placeholder=\"Enter your password\"\n        class=\"formInput\" />\n      <button class=\"btn\" \n              id=\"btn-login\" \n              (click)=\"login()\">\n              Log In\n      </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        console.log('login() called from login-form component');
        this.authService.login(this.email, this.password)
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginFormComponent);

var _a, _b;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messageContainer{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: auto;\n    width: 70%;\n    min-width: 400px;\n    border-radius: 5px;\n    -webkit-box-align:stretch;\n        -ms-flex-align:stretch;\n            align-items:stretch;\n    background-color: #eee;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.isOwnMessageContainer{\n    background-color: #01579B;\n}\n\n.messageData{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 10px;\n    font-size: 0.7em;\n}\n\n.sender{\n    display: block;\n    color: #222;\n    font-weight: bold;\n}\n\n.isOwnSender{\n    color: #E1F5FE;\n}\n\n.timestamp {\n    color: #555;\n    font-style: italic;\n}\n\n.isOwnTimestamp{\n    color: #4FC3F7;\n}\n\n.messageContent{\n    height: auto;\n    -webkit-box-flex: 9;\n        -ms-flex: 9;\n            flex: 9;\n    background-color: #fff;\n    padding: 10px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.isOwnMessageContent{\n    background-color: #E3F2FD;\n    color: #01579B;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\"\n    [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\n    <div class=\"messageData\"\n        [ngClass]=\"{'isOwnMessageData':isOwnMessage}\">\n        <span class=\"sender\"\n            [ngClass]=\"{'isOwnSender':isOwnMessage}\">\n            {{ userName }}\n        </span>\n        <span class=\"timestamp\" \n            [ngClass] = \"{'isOwnTimestamp':isOwnMessage}\">\n            {{ timeStamp | date:'medium' }}\n        </span>\n    </div>\n    <div class=\"messageContent\"\n        [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\n        {{ messageContent }}\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_chat_message_model__ = __webpack_require__("../../../../../src/app/models/chat-message.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = (function () {
    function MessageComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.timeStamp = new Date();
        authService.authUser().subscribe(function (user) {
            _this.ownEmail = user.email;
            _this.isOwnMessage = _this.ownEmail === _this.userEmail;
        });
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.userEmail = chatMessage.email;
        this.userName = chatMessage.userName;
    };
    return MessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_chat_message_model__["a" /* ChatMessage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_chat_message_model__["a" /* ChatMessage */]) === "function" && _a || Object)
], MessageComponent.prototype, "chatMessage", void 0);
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message',
        template: __webpack_require__("../../../../../src/app/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message/message.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], MessageComponent);

var _a, _b;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/chat-message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessage; });
var ChatMessage = (function () {
    function ChatMessage() {
        this.timeSent = new Date();
    }
    return ChatMessage;
}());

//# sourceMappingURL=chat-message.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navBar{\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background-color: #EAEAEB;\n}\n\n/* #logo{\n    display: inline-block;\n    background: url('../../assets/img/logo.png') no-repeat;\n    background-size: cover;\n    margin: 12px 10px 12px 32px;\n    width: 60px;\n    height: 60px;\n    min-width: 60px;\n} */\n\n#heading{\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4;\n    padding: 24px 0px 8px 10px;\n    height: 60px;\n    font-size: 1.8em;\n    font-weight: bold;\n}\n\n.links{\n    padding-top: 32px;\n    padding-right: 30px;\n    white-space: nowrap;\n    display: block;\n}\n\n#heading > a{\n    text-decoration: none;\n    color: black;\n}\n\n.links a{\n    color: #555;\n    text-decoration: none;\n    transition: ease-in 0.2s;\n    padding-right: 12px;\n    overflow: hidden;\n}\n\n.links a:hover {\n    color: #1E88E5;\n    transition: ease-in 0.2s;\n}\n\n#userEmail {\n    padding-right: 16px;\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n    <div id=\"logo\"></div>\n    <div id=\"heading\"><a routerLink=\"/\">CI Chat</a></div>\n  <div class=\"links\">\n    <span>\n      <a *ngIf=\"!(user|async)?.uid\" href=\"#\" (click)=\"login()\">Login</a>\n    </span>\n    <span>\n      <a *ngIf=\"!(user|async)?.uid\" routerLink=\"/signup\">Sign Up</a>\n    </span>\n    <span>\n      <span id=\"userEmail\" *ngIf=\"(user|async)?.uid\">Hello, {{userEmail}}</span>\n    </span>\n    <span>\n      <a *ngIf=\"(user|async)?.uid\" href=\"#\" (click)=\"logout()\">Logout</a>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.authUser();
        this.user.subscribe(function (user) {
            if (user) {
                _this.userEmail = user.email;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthService.prototype.authUser = function () {
        return this.user;
    };
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.authState !== null ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.setUserStatus('online');
            _this.router.navigate(['chat']);
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    AuthService.prototype.signUp = function (email, password, displayName) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            var status = 'online';
            _this.setUserData(email, displayName, status);
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserData = function (email, displayName, status) {
        var path = "users/" + this.currentUserId;
        var data = {
            email: email,
            displayName: displayName,
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserStatus = function (status) {
        var path = "users/" + this.currentUserId;
        var data = {
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.user = auth;
            }
            _this.getUser().subscribe(function (a) {
                _this.userName = a.displayName;
            });
        });
    }
    ChatService.prototype.getUser = function () {
        var userId = this.user.uid;
        var path = "/users/" + userId;
        return this.db.object(path);
    };
    ChatService.prototype.getUsers = function () {
        var path = '/users';
        return this.db.list(path);
    };
    ChatService.prototype.sendMessage = function (msg) {
        var timestamp = this.getTimeStamp();
        var email = this.user.email;
        this.chatMessages = this.getMessages();
        this.chatMessages.push({
            message: msg,
            timeSent: timestamp,
            userName: this.userName,
            email: email
        });
    };
    ChatService.prototype.getMessages = function () {
        // query to create our message feed binding
        return this.db.list('messages', {
            query: {
                limitToLast: 25,
                orderByKey: true
            }
        });
    };
    ChatService.prototype.getTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() + '/' +
            (now.getUTCMonth() + 1) + '/' +
            now.getUTCDate();
        var time = now.getUTCHours() + ':' +
            now.getUTCMinutes() + ':' +
            now.getUTCSeconds();
        return (date + ' ' + time);
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], ChatService);

var _a, _b;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  overflow:hidden;\n  background: \n    linear-gradient(45deg, rgba(0,103, 255, 0.3), rgba(0, 150, 80, 0.9)),\n    url(" + __webpack_require__("../../../../../src/assets/img/login-2.jpg") + ") center center no-repeat;;\n}\n\n.signUpCard{\n  display: block;\n  border: 1px solid #000;\n  border-radius: 4px;\n  background-color: rgba(255,255,255,0.85);\n  width: 700px;\n  height: 520px;\n  margin: auto;\n  margin-top: 30px;\n  padding: 80px 30px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n  overflow: hidden;\n}\n\n.formInput{\n  display: block;\n  width: 100%;\n  height: 40px;\n  border-radius:4px;\n  background:#ecf0f1;\n  border: #ccc 1px solid;\n  padding: 8px;\n  font-size:1em;\n  margin-bottom: 18px;\n}\n\n.btn{\n  height: 54px;\n  margin-top: 32px;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n  transition: ease-in 0.2s;\n  width: 100%;\n}\n\n#btn-signUp{\n    background-color:#2A2845;\n}\n\n#btn-signUp:hover{\n    background-color:#4A4865;\n    transition: ease-in 0.2s;\n}\n\n#btn-signUp:disabled{\n    background-color:#eee;\n    color: #999;\n}\n\nh2{\n    text-align: center;\n    height: 2em;\n}\n\na {\n    text-decoration: none;\n}\n\n.label{\n    font-size: 0.9em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"signUpCard\">\n   <form #signupForm=\"ngForm\">\n    <h2 class=\"heading\">Sign Up</h2>\n\n    <label class=\"label\">Email</label>\n       <input \n       type=\"email\" name=\"email\"\n       placeholder=\"Enter your email address\" \n       [(ngModel)]=\"email\" class=\"formInput\"\n       maxlength=\"60\" required/>\n\n    <label class=\"label\">Password</label>\n      <input \n        type=\"password\" name=\"password\"\n        placeholder=\"Choose a password\" \n        [(ngModel)]=\"password\" class=\"formInput\" \n        required/>\n\n    <label class=\"label\">Display Name</label>\n      <input \n        name=\"displayName\"\n        placeholder=\"Enter a display name\" \n        [(ngModel)]=\"displayName\" class=\"formInput\"\n        maxlength=\"12\" required/>\n\n      <button [disabled]=\"!signupForm.form.valid\" \n              type=\"submit\" (click)=\"signUp()\"\n              class=\"btn\" id=\"btn-signUp\">\n              Sign Up\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupFormComponent = (function () {
    function SignupFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupFormComponent.prototype.signUp = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var displayName = this.displayName;
        this.authService.signUp(email, password, displayName)
            .then(function (resolve) { return _this.router.navigate(['chat']); })
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    return SignupFormComponent;
}());
SignupFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup-form',
        template: __webpack_require__("../../../../../src/app/signup-form/signup-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup-form/signup-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupFormComponent);

var _a, _b;
//# sourceMappingURL=signup-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-item/user-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".userItem{\n    height: auto;\n    padding: 10px;\n    width: 90%;\n    margin-top: 10px;\n    border-radius: 1px;\n    -webkit-box-align:start;\n        -ms-flex-align:start;\n            align-items:flex-start;\n    background-color: #201835;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    color: #A098A5;\n    border-radius: 8px;\n    transition: ease-in 0.2s;\n}\n\n.userItem:hover{\n    background-color: #453968;\n    color: #ddd;\n    transition: ease-in 0.1s;\n}\n\n.online{\n    background-color: #0FA;\n}\n\n.busy{\n    background-color: #FB0;\n}\n\n.offline{\n    background-color: #888;\n}\n\n.status{\n    border: 1px solid black;\n    display: inline-block;\n    min-width: 10px;\n    min-height: 10px;\n    border-radius: 50%;\n    margin: 10px 12px 0px 10px;\n}\n\n.userName{\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-item/user-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"userItem\">\n  <span class=\"status\" [ngClass]=(user.status)>\n  </span>\n  <span class=\"userName\">\n    {{user.displayName}}\n  </span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-item/user-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserItemComponent = (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    return UserItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]) === "function" && _a || Object)
], UserItemComponent.prototype, "user", void 0);
UserItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-item',
        template: __webpack_require__("../../../../../src/app/user-item/user-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-item/user-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserItemComponent);

var _a;
//# sourceMappingURL=user-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\n  <app-user-item\n  [user]=user *ngFor=\"let user of users\">\n  </app-user-item>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = (function () {
    function UserListComponent(chat) {
        var _this = this;
        chat.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    }
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.393d6cee6d1636d81c66.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/login-1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login-1.8c9c4f9d9305496ae516.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/login-2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login-2.84f08d0a090ad3085cb4.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC49orX8bzJ_CRLTCMSjMVOgRm-q5hmUX4",
        authDomain: "reactnotes-604c8.firebaseapp.com",
        databaseURL: "https://reactnotes-604c8.firebaseio.com",
        projectId: "reactnotes-604c8",
        storageBucket: "reactnotes-604c8.appspot.com",
        messagingSenderId: "779599315653"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/chatroom/chatroom.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });



var appRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_0__app_signup_form_signup_form_component__["a" /* SignupFormComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__app_login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_2__app_chatroom_chatroom_component__["a" /* ChatroomComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map