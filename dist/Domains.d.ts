import { Contacts, Domain, PricingRequest, SearchRequest, SetNameserversRequest } from "./types/index.js";
import AxiosClient from "./AxiosClient.js";
declare class NameComDomains extends AxiosClient {
    listDomains(perPage?: number, page?: number): Promise<any>;
    getDomain(domainName: string): Promise<any>;
    createDomain(domainData: Domain): Promise<any>;
    enableWhoisPrivacy(domainName: string): Promise<any>;
    disableWhoisPrivacy(domainName: string): Promise<any>;
    enableAutorenew(domainName: string): Promise<any>;
    disableAutorenew(domainName: string): Promise<any>;
    renewDomain(domainName: string, years: number): Promise<any>;
    getPricingForDomain(domainName: string, years: number): Promise<any>;
    getAuthCodeForDomain(domainName: string): Promise<any>;
    purchasePrivacy(domainName: string, privacyRequest: PricingRequest): Promise<any>;
    setNameservers(domainName: string, nameservers: SetNameserversRequest): Promise<any>;
    setContacts(domainName: string, contacts: Contacts): Promise<any>;
    lockDomain(domainName: string): Promise<any>;
    unlockDomain(domainName: string): Promise<any>;
    checkAvailability(domainName: string): Promise<any>;
    search(query: SearchRequest): Promise<any>;
    searchStream(domainName: string, query: SearchRequest): Promise<any>;
}
export default NameComDomains;
