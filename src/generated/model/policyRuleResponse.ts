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
import { PolicyRuleResponseContract } from './policyRuleResponseContract';
import { PolicySchema } from './policySchema';

export class PolicyRuleResponse {
    'id': string;
    'object': string;
    'createdAt': number;
    'type': PolicySchema;
    'functionName'?: string;
    'contract'?: PolicyRuleResponseContract;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PolicySchema"
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "string"
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "PolicyRuleResponseContract"
        }    ];

    static getAttributeTypeMap() {
        return PolicyRuleResponse.attributeTypeMap;
    }
}

export namespace PolicyRuleResponse {
}
