import AxiosClient from './AxiosClient.js';
import { Record } from './types';
export default class NamceComDNS extends AxiosClient {
    listRecords(domainName: string, perPage?: number, page?: number): Promise<any>;
    getRecord(domainName: string, id: number): Promise<any>;
    createRecord(domainName: string, record: Record): Promise<any>;
    updateRecord(domainName: string, id: number, record: Record): Promise<any>;
    deleteRecord(domainName: string, id: number): Promise<any>;
}
