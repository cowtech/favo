"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalState = exports.environment = void 0;
exports.environment = process.env.NODE_ENV || 'development';
exports.globalState = {
    currentRequest: 0,
    startTime: process.hrtime()
};
