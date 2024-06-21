import {
    AdminAuthenticationApi,
    AuthenticateOAuthRequest,
    AuthPlayerListQueries,
    AuthPlayerListResponse,
    AuthPlayerResponse,
    AuthSessionResponse,
    CreateAuthPlayerRequest,
    OAuthConfig,
    OAuthConfigListResponse,
    OAuthProvider,
    PlayerResponse,
} from "../generated";
import { BaseApiWrapper } from "./baseApiWrapper";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import {
    PreGenerateEmbeddedAccountsConfiguration,
    ShieldAuthProvider,
} from "../models/preGenerateEmbeddedAccountRequest";
import {
    entropy,
    Share,
    ShieldAuthOptions,
    ShieldAuthProvider as ShieldJSAuthProvider,
    ShieldSDK,
} from "@openfort/shield-js";

@httpErrorHandler
export class IamApiWrapper extends BaseApiWrapper<AdminAuthenticationApi> {
    constructor(accessToken: string, basePath?: string) {
        super(AdminAuthenticationApi, accessToken, basePath);
    }

    /**
     * The endpoint creates a player auth object.  It will link the player to an authentication provider.
     * You can also pre-generate an embedded account for the player.
     *
     * Creates a player auth object.
     * @param req Specifies the player auth object.
     * @param embeddedReq Specifies the shield configuration for pre-generating an embedded account.
     */
    public async createAuthPlayer(
        req: CreateAuthPlayerRequest,
        embeddedReq?: PreGenerateEmbeddedAccountsConfiguration,
    ): Promise<AuthPlayerResponse> {
        if (req.preGenerateEmbeddedAccount && !embeddedReq) {
            throw new Error("Pre-generating embedded account requires additional configuration.");
        }

        const { recoveryShare, ...resp } = await this.api.createAuthPlayer(req);

        if (recoveryShare) {
            let authProvider: ShieldJSAuthProvider;
            let externalUserId: string;
            if (embeddedReq?.shieldAuthProvider === ShieldAuthProvider.OPENFORT) {
                authProvider = ShieldJSAuthProvider.OPENFORT;
                externalUserId = resp.id;
            } else if (embeddedReq?.shieldAuthProvider === ShieldAuthProvider.CUSTOM) {
                authProvider = ShieldJSAuthProvider.CUSTOM;
                externalUserId = req.thirdPartyUserId;
            } else {
                throw new Error("Invalid Shield auth provider.");
            }

            const authOptions: ShieldAuthOptions = {
                authProvider: authProvider,
                encryptionPart: embeddedReq.encryptionPart,
                externalUserId: externalUserId,
                apiKey: embeddedReq.apiKey,
                apiSecret: embeddedReq.apiSecret,
            };

            const share: Share = {
                secret: recoveryShare,
                entropy: embeddedReq.encryptionPart ? entropy.project : entropy.none,
            };

            const shieldSDK = new ShieldSDK({ apiKey: embeddedReq.apiKey });
            await shieldSDK.preRegister(share, authOptions);
        }

        return resp;
    }

    /**
     * Verifies the token generated by Openfort Auth.
     * @param token Specifies the auth token.
     */
    public async verifyAuthToken(token: string): Promise<AuthSessionResponse> {
        return await this.api.verifyAuthToken(token);
    }

    /**
     * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.
     * @param token Specifies the auth token.
     */
    public async verifyOAuthToken(req: AuthenticateOAuthRequest): Promise<PlayerResponse> {
        return await this.api.verifyOAuthToken(req);
    }

    /**
     * The endpoint creates oauth configuration for the current project environment.
     * Create oauth configuration.
     * @param body Specifies the oauth provider specific configuration.
     */
    public async createOAuthConfig(req: OAuthConfig): Promise<OAuthConfig> {
        return await this.api.createOAuthConfig(req);
    }

    /**
     * Deletes a player auth object.  It will delete all linked accounts the player is authenticated with.
     * Deletes a player auth object.
     * @param id Specifies the unique player ID (starts with pla_).
     */
    public async deleteAuthPlayer(id: string): Promise<AuthPlayerResponse> {
        return await this.api.deleteAuthPlayer(id);
    }

    /**
     * The endpoint deletes oauth configuration for specified provider for the current project environment.
     * Delete oauth configuration.
     * @param provider Specifies the oauth provider type.
     */
    public async deleteOAuthConfig(provider: OAuthProvider): Promise<void> {
        return await this.api.deleteOAuthConfig(provider);
    }

    /**
     * Retrieves a list of authenticated players.  Players have linked accounts and are authenticated with a provider.
     * List authenticated players.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param email Specifies the email address of the user.
     */
    public async getAuthPlayers(req: AuthPlayerListQueries): Promise<AuthPlayerListResponse> {
        return await this.api.getAuthPlayers(req.limit, req.skip, req.order, req.email, req.externalUserId);
    }

    /**
     * The endpoint retrieves oauth configuration for specified provider for the current project environment.
     * Get oauth configuration.
     * @param provider Specifies the oauth provider type.
     */
    public async getOAuthConfig(provider: OAuthProvider): Promise<OAuthConfig> {
        return await this.api.getOAuthConfig(provider);
    }

    /**
     * List configured OAuth methods for the current project environment.
     * List of oauth configurations.
     */
    public async listOAuthConfig(): Promise<OAuthConfigListResponse> {
        return await this.api.listOAuthConfig();
    }
}
