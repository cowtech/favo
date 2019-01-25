/// <reference types="node" />
import { ValidationError } from 'ajv';
import Boom from 'boom';
import { Schema } from './spec';
export declare type NodeError = NodeJS.ErrnoException;
export declare type BoomError<T> = (message?: string, data?: T) => Boom<T>;
export declare type GenericError = Error | ValidationError | Boom;
export declare function isValidationError(error: GenericError): error is ValidationError;
export declare function isBoomError(error: GenericError): error is Boom;
export declare function serializeErrorDescription(error: GenericError): string;
export declare function serializeErrorStack(error: Error): Array<string>;
export declare function toBoomError(error: GenericError, data?: Schema): Boom;
