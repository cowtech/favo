/// <reference types="node" />
import * as http from 'http';
import { SecurityScheme } from './authentication';
export declare type ExpressMiddleware = (req: http.IncomingMessage, res: http.ServerResponse, next?: (err?: Error | boolean) => void) => void;
export declare type RequestHandler = (req: any, res: any) => void | Promise<any>;
export declare type HTTPMethod = 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS';
export interface Route {
    method?: HTTPMethod | Array<HTTPMethod>;
    url: string;
    path?: string;
    prefix?: string;
    schema?: {
        body?: any;
        querystring?: any;
        params?: any;
        response?: {
            [code: number]: any;
            [code: string]: any;
        };
    };
    config?: any;
    handler: ExpressMiddleware | RequestHandler;
}
export declare type Schema = {
    [key: string]: any;
};
interface Tag {
    name: string;
    description: string;
}
interface Server {
    url: string;
    description: string;
}
export interface SchemaBaseInfo {
    title?: string;
    description?: string;
    authorName?: string;
    authorUrl?: string;
    authorEmail?: string;
    license?: string;
    version?: string;
    tags?: Array<Tag>;
    servers: Array<Server>;
}
export declare function omitFromSchema(schema: Schema, ...properties: Array<string>): Schema;
export declare class Spec implements SchemaBaseInfo {
    title?: string;
    description?: string;
    authorName?: string;
    authorUrl?: string;
    authorEmail?: string;
    license?: string;
    version?: string;
    tags?: Array<Tag>;
    servers: Array<Server>;
    securitySchemes: Schema;
    models: Schema;
    parameters: Schema;
    responses: Schema;
    errors: Schema;
    paths: Schema;
    constructor({ title, description, authorName, authorUrl, authorEmail, license, version, servers, tags }: SchemaBaseInfo, skipDefaultErrors?: boolean);
    generate(): Schema;
    addModels(models: {
        [key: string]: Schema;
    }): void;
    addSecuritySchemes(schemes: {
        [key: string]: SecurityScheme;
    }): void;
    addRoutes(routes: Array<Route>): void;
    private parseSecurity;
    private parseParameters;
    private parsePayload;
    private parseResponses;
    private resolveReference;
    private generateSchemaObjects;
}
export {};
