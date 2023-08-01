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

export class PlayerCancelTransferOwnershipRequest {
    /**
    * The policy ID
    */
    'policy': string;
    /**
    * The chain id where the account is.
    */
    'chainId': number;
    /**
    * The player ID
    */
    'player'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PlayerCancelTransferOwnershipRequest.attributeTypeMap;
    }
}
