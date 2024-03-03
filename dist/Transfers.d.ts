import { Transfer } from './types/index.js';
import AxiosClient from './AxiosClient.js';
export default class NameComTransfers extends AxiosClient {
    listTransfers(perPage?: number, page?: number): Promise<any>;
    getTransfer(domainName: string, id: number): Promise<any>;
    createTransfer(transfer: Transfer): Promise<any>;
    cancelTransfer(transferRequest: Transfer): Promise<any>;
}
