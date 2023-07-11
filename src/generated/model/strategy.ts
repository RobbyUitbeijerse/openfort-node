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

import { RequestFile } from './models';

export class Strategy {
    'sponsor_schema': string;
    'token_contract': string | null;
    'token_contract_amount': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sponsor_schema",
            "baseName": "sponsor_schema",
            "type": "string"
        },
        {
            "name": "token_contract",
            "baseName": "token_contract",
            "type": "string"
        },
        {
            "name": "token_contract_amount",
            "baseName": "token_contract_amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Strategy.attributeTypeMap;
    }
}

