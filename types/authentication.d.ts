export declare type SecuritySchemeDefinition = string | object;
export interface SecurityScheme {
    type: 'http' | 'apiKey' | 'oauth2' | 'openIdConnect';
    description?: string;
    name?: string;
    in?: 'query' | 'header' | 'cookie';
    scheme?: string;
    bearerFormat?: string;
    flows?: string;
    openIdConnectUrl?: string;
    [key: string]: string | undefined;
}
export declare const jwtBearerSecurityScheme: SecurityScheme;
