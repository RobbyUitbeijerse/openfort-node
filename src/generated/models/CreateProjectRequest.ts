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

import { PrivateKeyPolicy } from '../models/PrivateKeyPolicy';
import { HttpFile } from '../http/http';

export class CreateProjectRequest {
    /**
    * Name of the project.
    */
    'name': string;
    'pkPolicy'?: PrivateKeyPolicy;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pkPolicy",
            "baseName": "pkPolicy",
            "type": "PrivateKeyPolicy",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateProjectRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



