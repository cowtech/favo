"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtBearerSecurityScheme = void 0;
exports.jwtBearerSecurityScheme = {
    type: 'http',
    description: 'JWT based Bearer Token authentication',
    scheme: 'bearer',
    bearerFormat: 'JWT'
};
