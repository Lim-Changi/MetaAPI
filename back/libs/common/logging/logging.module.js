"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoggingModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var logging_interceptor_1 = require("./logging.interceptor");
var LoggingModule = /** @class */ (function () {
    function LoggingModule() {
    }
    LoggingModule = __decorate([
        (0, common_1.Module)({
            providers: [
                common_1.Logger,
                { provide: core_1.APP_INTERCEPTOR, useClass: logging_interceptor_1.LoggingInterceptor },
            ]
        })
    ], LoggingModule);
    return LoggingModule;
}());
exports.LoggingModule = LoggingModule;
