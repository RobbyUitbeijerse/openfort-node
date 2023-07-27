import {httpErrorHandler} from "../utility/httpErrorHandler";
import {ContractsApi} from "../generated/api/contractsApi";
import {
    GetContractRequest,
    ListContractsRequest,
    ContractDeleteResponse,
    ContractsResponse,
    ContractResponse,
    CreateContractRequest,
    UpdateContractRequest,
} from "../model";
import {BaseApiWrapper} from "./baseApiWrapper";

@httpErrorHandler
export class ContractsApiWrapper extends BaseApiWrapper<ContractsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(ContractsApi, accessToken, basePath);
    }

    /**
     * Creates a contract object.
     * @param req Parameters to create contract
     */
    public async create(req: CreateContractRequest): Promise<ContractResponse> {
        const response = await this.api.createContract(req);
        return response.body;
    }

    /**
     * Updates a contract object.
     * @param req Parameters to update the contract
     */
    public async update(req: UpdateContractRequest): Promise<ContractResponse> {
        const {id, ...body} = req;
        const response = await this.api.updateContract(id, body);
        return response.body;
    }

    /**
     * Deletes a contract object.
     * @param id Id of the contract to delete
     */
    public async delete(id: string): Promise<ContractDeleteResponse> {
        const response = await this.api.deleteContract(id);
        return response.body;
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param req Criteria to get the contract.
     */
    public async get(req: GetContractRequest): Promise<ContractResponse> {
        const response = await this.api.getContract(req.id);
        return response.body;
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param req Criteria to retrieve list of contracts.
     */
    public async list(req?: ListContractsRequest): Promise<ContractsResponse> {
        const response = await this.api.getContracts(req?.limit);
        return response.body;
    }
}
