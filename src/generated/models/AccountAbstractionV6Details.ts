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

import { UserOperationV6 } from '../models/UserOperationV6';
import { HttpFile } from '../http/http';

export class AccountAbstractionV6Details {
    'userOperation': UserOperationV6;
    /**
    * A User Operation hash.
    */
    'userOperationHash': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userOperation",
            "baseName": "userOperation",
            "type": "UserOperationV6",
            "format": ""
        },
        {
            "name": "userOperationHash",
            "baseName": "userOperationHash",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountAbstractionV6Details.attributeTypeMap;
    }

    public constructor() {
    }
}
