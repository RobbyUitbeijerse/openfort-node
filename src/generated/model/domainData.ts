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

import { RequestFile } from "./models";

export class DomainData {
    chainId: number;
    name?: string;
    version?: string;
    verifyingContract?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: "chainId",
            baseName: "chainId",
            type: "number",
        },
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "version",
            baseName: "version",
            type: "string",
        },
        {
            name: "verifyingContract",
            baseName: "verifyingContract",
            type: "string",
        },
    ];

    static getAttributeTypeMap() {
        return DomainData.attributeTypeMap;
    }
}