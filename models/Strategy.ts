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

import { HttpFile } from '../http/http';

export class Strategy {
    'sponsorSchema': string;
    'tokenContract': string;
    'tokenContractAmount': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sponsorSchema",
            "baseName": "sponsor_schema",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenContract",
            "baseName": "token_contract",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenContractAmount",
            "baseName": "token_contract_amount",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Strategy.attributeTypeMap;
    }

    public constructor() {
    }
}

