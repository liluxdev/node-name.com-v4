export interface ErrorResponse {
    message?: string;
    details?: string;
}
export interface Contact {
    firstName?: string;
    lastName?: string;
    companyName?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    phone?: string;
    fax?: string;
    email?: string;
}
export interface Contacts {
    registrant?: Contact;
    admin?: Contact;
    tech?: Contact;
    billing?: Contact;
}
export interface Domain {
    domainName?: string;
    nameservers?: string[];
    contacts?: Contacts;
    privacyEnabled?: boolean;
    locked?: boolean;
    autorenewEnabled?: boolean;
    expireDate?: string;
    createDate?: string;
    renewalPrice?: number;
}
export interface SearchRequest {
    timeout?: number;
    keyword?: string;
    tldFilter?: string[];
    promoCode?: string;
}
export interface AvailabilityRequest {
    domainNames?: string[];
    promoCode?: string;
}
export interface SearchResult {
    domainName?: string;
    sld?: string;
    tld?: string;
    purchasable?: boolean;
    premium?: boolean;
    purchasePrice?: number;
    purchaseType?: string;
    renewalPrice?: number;
}
export interface SearchResponse {
    results?: SearchResult[];
}
export interface ListDomainsRequest {
    perPage?: number;
    page?: number;
}
export interface ListDomainsResponse {
    domains?: Domain[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetDomainRequest {
    domainName?: string;
}
export interface CreateDomainRequest {
    domain?: Domain;
    purchasePrice?: number;
    purchaseType?: string;
    tears?: number;
    tldRequirements?: {
        [key: string]: string;
    };
    promoCode?: string;
}
export interface CreateDomainResponse {
    domain?: string;
    order?: number;
    totalPaid?: number;
}
export interface RenewDomainRequest {
    domainName?: string;
    purchasePrice?: number;
    years?: number;
    promoCode?: string;
}
export interface RenewDomainResponse {
    domain?: string;
    order?: number;
    totalPaid?: number;
}
export interface AuthCodeRequest {
    domainName?: string;
}
export interface AuthCodeResponse {
    authCode?: string;
}
export interface PricingRequest {
    domainName?: string;
    years?: number;
}
export interface PricingResponse {
    purchasePrice?: number;
    renewalPrice?: number;
    transferPrice?: number;
    premium?: boolean;
}
export interface PrivacyRequest {
    domainName?: string;
    purchasePrice?: number;
    years?: number;
    promoCode?: string;
}
export interface PrivacyResponse {
    domain?: string;
    order?: number;
    totalPaid?: number;
}
export interface SetNameserversRequest {
    domainName?: string;
    nameservers?: string[];
}
export interface SetContactsRequest {
    domainName?: string;
    contacts?: Contacts;
}
export interface EnableAutorenewForDomainRequest {
    domainName?: string;
}
export interface DisableAutorenewForDomainRequest {
    domainName?: string;
}
export interface EnableWhoisPrivacyForDomainRequest {
    domainName?: string;
}
export interface DisableWhoisPrivacyForDomainRequest {
    domainName?: string;
}
export interface LockDomainRequest {
    domainName?: string;
}
export interface UnlockDomainRequest {
    domainName?: string;
}
export interface Record {
    id?: number;
    domainName?: string;
    host?: string;
    fqdn?: string;
    type?: string;
    answer?: string;
    ttl?: number;
    priority?: number;
}
export interface ListRecordsRequest {
    domainName?: string;
    perPage?: number;
    page?: number;
}
export interface ListRecordsResponse {
    records?: Record[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetRecordRequest {
    domainName?: string;
    id?: number;
}
export interface DeleteRecordRequest {
    domainName?: string;
    id?: number;
}
export interface DNSSEC {
    domainName?: string;
    keyTag?: number;
    algorithm?: number;
    digestType?: number;
    digest?: string;
}
export interface ListDNSSECsRequest {
    domainName?: string;
}
export interface ListDNSSECsResponse {
    dnssec?: DNSSEC[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetDNSSECRequest {
    domainName?: string;
    digest?: string;
}
export interface DeleteDNSSECRequest {
    domainName?: string;
    digest?: string;
}
export interface EmailForwarding {
    domainName?: string;
    emailBox?: string;
    emailTo?: string;
}
export interface ListEmailForwardingsRequest {
    domainName?: string;
    perPage?: number;
    page?: number;
}
export interface ListEmailForwardingsResponse {
    emailForwarding?: EmailForwarding[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetEmailForwardingRequest {
    domainName?: string;
    emailBox?: string;
}
export interface DeleteEmailForwardingRequest {
    domainName?: string;
    emailBox?: string;
}
export interface HelloRequest {
}
export interface HelloResponse {
    serverName?: string;
    motd?: string;
    username?: string;
    serverTime?: string;
}
export interface OrderItem {
    id?: number;
    status?: string;
    name?: string;
    tld?: string;
    type?: string;
    price?: number;
    priceNonUsd?: number;
    originalPrice?: number;
    taxAmount?: number;
    quantity?: number;
    duration?: number;
    interval?: string;
}
export interface Order {
    id?: number;
    createDate?: string;
    registrar?: string;
    status?: string;
    currency?: string;
    orderItems?: OrderItem[];
    authAmount?: number;
    totalCapture?: number;
    totalRefund?: number;
    finalAmount?: string;
    currencyRate?: number;
}
export interface ListOrdersRequest {
    perPage?: number;
    page?: number;
}
export interface ListOrdersResponse {
    parentAccountId?: number;
    orders?: Order[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetOrderRequest {
    orderId?: number;
}
export interface GetOrderResponse {
    parentAccountId?: number;
    order?: Order;
}
export interface Transfer {
    domainName?: string;
    email?: string;
    status?: string;
}
export interface ListTransfersRequest {
    perPage?: number;
    page?: number;
}
export interface ListTransfersResponse {
    transfers?: Transfer[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetTransferRequest {
    domainName?: string;
}
export interface CreateTransferRequest {
    domainName?: string;
    authCode?: string;
    privacyEnabled?: boolean;
    purchasePrice?: number;
    promoCode?: string;
}
export interface CreateTransferResponse {
    transfer?: Transfer;
    order?: number;
    totalPaid?: number;
}
export interface CancelTransferRequest {
    domainName?: string;
}
export interface URLForwarding {
    domainName?: string;
    host?: string;
    forwardsTo?: string;
    type?: string;
    title?: string;
    meta?: string;
}
export interface ListURLForwardingsRequest {
    domainName?: string;
    perPage?: number;
    page?: number;
}
export interface ListURLForwardingsResponse {
    urlForwarding?: URLForwarding[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetURLForwardingRequest {
    domainName?: string;
    host?: string;
}
export interface DeleteURLForwardingRequest {
    domainName?: string;
    host?: string;
}
export interface VanityNameserver {
    domainName?: string;
    hostname?: string;
    ips?: string[];
}
export interface ListVanityNameserversRequest {
    domainName?: string;
    perPage?: number;
    page?: number;
}
export interface ListVanityNameserversResponse {
    vanityNameservers?: VanityNameserver[];
    nextPage?: number;
    lastPage?: number;
}
export interface GetVanityNameserverRequest {
    domainName?: string;
    hostname?: string;
}
export interface DeleteVanityNameserverRequest {
    domainName?: string;
    hostname?: string;
}
