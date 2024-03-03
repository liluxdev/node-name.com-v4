import AxiosClient from './AxiosClient.js';
import { DNSSEC } from './types/';
export default class NameComDNSSec extends AxiosClient {
    listDNSSECs(domainName: string): Promise<any>;
    getDNSSEC(domainName: string, digest: string): Promise<any>;
    createDNSSEC(domainName: string, dnssecData: DNSSEC): Promise<any>;
    deleteDNSSEC(domainName: string, digest: string): Promise<any>;
}
