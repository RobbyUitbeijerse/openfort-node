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

import { ThirdPartyOAuthProviderSUPABASE } from '../models/ThirdPartyOAuthProviderSUPABASE';
import { HttpFile } from '../http/http';

/**
* Supabase oauth configuration
*/
export class SupabaseAuthConfig {
    /**
    * Enable OAuth provider.
    */
    'enabled': boolean;
    'provider': ThirdPartyOAuthProviderSUPABASE;
    /**
    * The unique Supabase URL which is supplied when you create a new project in your project dashboard.
    */
    'url': string;
    /**
    * The unique Supabase Key which is supplied when you create a new project in your project dashboard.
    */
    'key': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ThirdPartyOAuthProviderSUPABASE",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupabaseAuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}


