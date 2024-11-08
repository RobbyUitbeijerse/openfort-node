/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EcosystemConfigurationResponse } from '../models/EcosystemConfigurationResponse';
import { HttpFile } from '../http/http';

export class MyEcosystemResponse {
    'publishableKey': string;
    'name': string;
    'configuration'?: EcosystemConfigurationResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "publishableKey",
            "baseName": "publishableKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "EcosystemConfigurationResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MyEcosystemResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

