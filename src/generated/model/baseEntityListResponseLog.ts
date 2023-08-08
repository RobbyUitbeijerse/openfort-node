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
import { Log } from './log';
import { ResponseTypeLIST } from './responseTypeLIST';

export class BaseEntityListResponseLog {
    'object': ResponseTypeLIST;
    'url': string;
    'data': Array<Log>;
    'start': number;
    'end': number;
    'total': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "ResponseTypeLIST"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Log>"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BaseEntityListResponseLog.attributeTypeMap;
    }
}

export namespace BaseEntityListResponseLog {
}
