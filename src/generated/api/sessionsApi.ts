/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { SessionResponse } from '../model/sessionResponse';
import { SessionsResponse } from '../model/sessionsResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.openfort.xyz';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SessionsApiApiKeys {
}

export class SessionsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'pk': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: SessionsApiApiKeys, value: string) {
        (this.authentications as any)[SessionsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.pk.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Creates the session for the account.
     * @param player
     * @param address
     * @param chainId
     * @param validUntil
     * @param validAfter
     * @param policy
     * @param externalOwnerAddress
     * @param whitelist
     * @param limit
     */
    public async createSession (player: string, address: string, chainId: number, validUntil: number, validAfter: number, policy?: string, externalOwnerAddress?: string, whitelist?: Array<string>, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SessionResponse;  }> {
        const localVarPath = this.basePath + '/v1/sessions';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'player' is not null or undefined
        if (player === null || player === undefined) {
            throw new Error('Required parameter player was null or undefined when calling createSession.');
        }

        // verify required parameter 'address' is not null or undefined
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling createSession.');
        }

        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new Error('Required parameter chainId was null or undefined when calling createSession.');
        }

        // verify required parameter 'validUntil' is not null or undefined
        if (validUntil === null || validUntil === undefined) {
            throw new Error('Required parameter validUntil was null or undefined when calling createSession.');
        }

        // verify required parameter 'validAfter' is not null or undefined
        if (validAfter === null || validAfter === undefined) {
            throw new Error('Required parameter validAfter was null or undefined when calling createSession.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        if (player !== undefined) {
            localVarFormParams['player'] = ObjectSerializer.serialize(player, "string");
        }

        if (policy !== undefined) {
            localVarFormParams['policy'] = ObjectSerializer.serialize(policy, "string");
        }

        if (externalOwnerAddress !== undefined) {
            localVarFormParams['external_owner_address'] = ObjectSerializer.serialize(externalOwnerAddress, "string");
        }

        if (address !== undefined) {
            localVarFormParams['address'] = ObjectSerializer.serialize(address, "string");
        }

        if (chainId !== undefined) {
            localVarFormParams['chain_id'] = ObjectSerializer.serialize(chainId, "number");
        }

        if (validUntil !== undefined) {
            localVarFormParams['valid_until'] = ObjectSerializer.serialize(validUntil, "number");
        }

        if (validAfter !== undefined) {
            localVarFormParams['valid_after'] = ObjectSerializer.serialize(validAfter, "number");
        }

        if (whitelist !== undefined) {
            localVarFormParams['whitelist'] = ObjectSerializer.serialize(whitelist, "Array<string>");
        }

        if (limit !== undefined) {
            localVarFormParams['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.pk.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.pk.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: SessionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SessionResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param player
     * @param expand
     * @param limit
     * @param project Specifies the unique project ID.
     * @param filter
     * @param order
     * @param skip
     */
    public async getPlayerSessions (player: string, expand?: Array<string>, limit?: number, project?: string, filter?: string, order?: string, skip?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SessionsResponse;  }> {
        const localVarPath = this.basePath + '/v1/sessions';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'player' is not null or undefined
        if (player === null || player === undefined) {
            throw new Error('Required parameter player was null or undefined when calling getPlayerSessions.');
        }

        if (player !== undefined) {
            localVarQueryParameters['player'] = ObjectSerializer.serialize(player, "string");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "Array<string>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (project !== undefined) {
            localVarQueryParameters['project'] = ObjectSerializer.serialize(project, "string");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (order !== undefined) {
            localVarQueryParameters['order'] = ObjectSerializer.serialize(order, "string");
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.pk.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.pk.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: SessionsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SessionsResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Revokes the session for the account.
     * @param player
     * @param chainId
     * @param address
     * @param policy
     */
    public async revokeSession (player: string, chainId: number, address: string, policy?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SessionResponse;  }> {
        const localVarPath = this.basePath + '/v1/sessions/revoke';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'player' is not null or undefined
        if (player === null || player === undefined) {
            throw new Error('Required parameter player was null or undefined when calling revokeSession.');
        }

        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new Error('Required parameter chainId was null or undefined when calling revokeSession.');
        }

        // verify required parameter 'address' is not null or undefined
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling revokeSession.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        if (player !== undefined) {
            localVarFormParams['player'] = ObjectSerializer.serialize(player, "string");
        }

        if (chainId !== undefined) {
            localVarFormParams['chain_id'] = ObjectSerializer.serialize(chainId, "number");
        }

        if (address !== undefined) {
            localVarFormParams['address'] = ObjectSerializer.serialize(address, "string");
        }

        if (policy !== undefined) {
            localVarFormParams['policy'] = ObjectSerializer.serialize(policy, "string");
        }

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.pk.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.pk.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: SessionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SessionResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Confirms the creation of a session with an external owner.
     * @param id
     * @param signature
     */
    public async signatureSession (id: string, signature: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SessionResponse;  }> {
        const localVarPath = this.basePath + '/v1/sessions/{id}/signature'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling signatureSession.');
        }

        // verify required parameter 'signature' is not null or undefined
        if (signature === null || signature === undefined) {
            throw new Error('Required parameter signature was null or undefined when calling signatureSession.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        if (signature !== undefined) {
            localVarFormParams['signature'] = ObjectSerializer.serialize(signature, "string");
        }

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.pk.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.pk.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: SessionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SessionResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
