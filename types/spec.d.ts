import { SecurityScheme } from './authentication';
import { Route } from './models';
export declare type Schema = {
    [key: string]: any;
};
export interface Tag {
    name: string;
    description: string;
}
export interface Server {
    url: string;
    description: string;
}
export interface Response {
    [code: number]: Object;
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
    folder?: string;
}
export declare const parametersSections: {
    [key: string]: string;
};
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
    constructor({ title, description, authorName, authorUrl, authorEmail, license, version, servers, tags, folder }: SchemaBaseInfo, skipDefaultErrors?: boolean);
    generate(): Schema;
    addModels(models: {
        [key: string]: Schema;
    }): void;
    addSecuritySchemes(schemes: {
        [key: string]: SecurityScheme;
    }): void;
    addRoutes(routes: Route | Array<Route>): void;
    addFolder(folder: string): void;
    private parseSecurity;
    private parseParameters;
    private parsePayload;
    private parseResponses;
    private resolveReference;
    private generateSchemaObjects;
}
