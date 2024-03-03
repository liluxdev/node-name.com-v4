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
    tldRequirements?: { [key: string]: string };
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

export interface HelloRequest {}

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


// GetOrderRequest specifies the order id to request data for in the GetOrder function.
export interface GetOrderRequest {
	// OrderId is the unique identifier of the requested order.
	orderId?: number;
}

// GetOrderResponse is the response from a specific order request.
export interface GetOrderResponse {
	// ParentAccountId is populated when requesting account has a parent account id.
	parentAccountId?: number;
	// Order is the order requested.
	order?: Order;
}

// Transfer contains the information related to a transfer of a domain name to Name.com.
export interface Transfer {
	// DomainName is the domain to be transfered to Name.com.
	domainName?: string;
	// Email is the email address that the approval email was sent to. Not every TLD requries an approval email. This is usaully pulled from Whois.
	email?: string;
	// Status is the current status of the transfer. Details about statuses can be found in the following Knowledge Base article: <https://www.name.com/support/articles/115012519688-transfer-status-faq>.
	status?: string;
}

// ListTransfersRequest passes the pagination information to the ListTransfers function.
export interface ListTransfersRequest {
	// Per Page is the number of records to return per request. Per Page defaults to 1,000.
	perPage?: number;
	// Page is which page to return
	page?: number;
}

// ListTransfersResponse returns the list of pending transfers as well as the paginiation information if relevent.
export interface ListTransfersResponse {
	// Transfers is a list of pending transfers
	transfers?: Transfer[];
	// NextPage is the identifier for the next page of results. It is only populated if there is another page of results after the current page.
	nextPage?: number;
	// LastPage is the identifier for the final page of results. It is only populated if there is another page of results after the current page.
	lastPage?: number;
}

// GetTransferRequest passes the domain name to the GetTransfer function.
export interface GetTransferRequest {
	// DomainName is the domain you want to get the transfer information for.
	domainName?: string;
}

// CreateTransferRequest passes the required transfer info to the CreateTransfer function.
export interface CreateTransferRequest {
	// DomainName is the domain you want to transfer to Name.com.
	domainName?: string;
	// AuthCode is the authorization code for the transfer. Not all TLDs require authorization codes, but most do.
	authCode?: string;
	// PrivacyEnabled is a flag on whether to purchase Whois Privacy with the transfer.
	privacyEnabled?: boolean;
	// PurchasePrice is the amount to pay for the transfer of the domain. If privacy_enabled is set, the regular price for Whois Privacy will be added automatically. If VAT tax applies, it will also be added automatically.
	// PurchasePrice is required if the domain to transfer is a premium domain.
	purchasePrice?: number;
	// PromoCode is not implemented yet
	promoCode?: string;
}

// CreateTransferResponse returns the newly created transfer resource as well as the order information.
export interface CreateTransferResponse {
	// Transfer is the transfer resource created.
	transfer?: Transfer;
	// Order is an identifier for this purchase.
	order?: number;
	// TotalPaid is the total amount paid, including VAT and Whois Privacy.
	totalPaid?: number;
}

// CancelTransferRequest passes the domain name to be canceled to the CancelTransfer function.
export interface CancelTransferRequest {
	// DomainName is the domain to cancel the transfer for.
	domainName?: string;
}

// URLForwarding is the model for URL forwarding entries.
export interface URLForwarding {
	// DomainName is the domain part of the hostname to forward.
	domainName?: string;
	// Host is the entirety of the hostname. i.e. www.example.org
	host?: string;
	// ForwardsTo is the URL this host will be forwarded to.
	forwardsTo?: string;
	// Type is the type of forwarding. Valid types are: Masked - This retains the original domain in the address bar and will not reveal or display the actual destination URL. If you are forwarding knowledgebase.ninja to Name.com, the address bar will say knowledgebase.ninja. This is sometimes called iframe forwarding. And: Redirect - This does not retain the original domain in the address bar, so the user will see it change and realize they were forwarded from the URL they originally entered. If you are forwarding knowledgebase.ninja to Name.com, the address bar will say Name.com. This is also called 301 forwarding.
	type?: string;
	// Title is the title for the html page to use if the type is masked. Values are ignored for types other then "masked".
	title?: string;
	// Meta is the meta tags to add to the html page if the type is masked. ex: "<meta name='keywords' content='fish, denver, platte'>". Values are ignored for types other then "masked".
	meta?: string;
}

// ListURLForwardingsRequest is the request for the ListURLForwardings function.
export interface ListURLForwardingsRequest {
	// DomainName is the domain to list URL forwarding entries for.
	domainName?: string;
	// Per Page is the number of records to return per request. Per Page defaults to 1,000.
	perPage?: number;
	// Page is which page to return.
	page?: number;
}

// ListURLForwardingsResponse is the response for the ListURLForwardings function.
export interface ListURLForwardingsResponse {
	// URLForwarding is the list of URL forwarding entries.
	urlForwarding?: URLForwarding[];
	// NextPage is the identifier for the next page of results. It is only populated if there is another page of results after the current page.
	nextPage?: number;
	// LastPage is the identifier for the final page of results. It is only populated if there is another page of results after the current page.
	lastPage?: number;
}

// GetURLForwardingRequest is the request for the GetURLForwarding function.
export interface GetURLForwardingRequest {
	// DomainName is the domain to list URL forwarding entry for.
	domainName?: string;
	// Host is the part of the domain name before the domain. i.e. www is the host for www.example.org.
	host?: string;
}

// DeleteURLForwardingRequest is the request for the DeleteURLForwarding function.
export interface DeleteURLForwardingRequest {
	// DomainName is the domain to delete the URL forwardind entry from.
	domainName?: string;
	// Host is the part of the domain name before the domain. i.e. www is the host for www.example.org.
	host?: string;
}

// VanityNameserver contains the hostname as well as the list of IP addresses for nameservers.
export interface VanityNameserver {
	// DomainName is the domain the nameserver is a subdomain of.
	domainName?: string;
	// Hostname is the hostname of the nameserver.
	hostname?: string;
	// IPs is a list of IP addresses that are used for glue records for this nameserver.
	ips?: string[];
}

// ListVanityNameserversRequest passes the domain name as well as the pagination parameters to the ListVanityNameservers function.
export interface ListVanityNameserversRequest {
	// DomainName is the domain to list the vanity nameservers for.
	domainName?: string;
	// Per Page is the number of records to return per request. Per Page defaults to 1,000.
	perPage?: number;
	// Page is which page to return
	page?: number;
}

// ListVanityNameserversResponse returns the list of vanity nameservers for the domain.
export interface ListVanityNameserversResponse {
	// VanityNameservers is the list of vanity nameservers.
	vanityNameservers?: VanityNameserver[];
	// NextPage is the identifier for the next page of results. It is only populated if there is another page of results after the current page.
	nextPage?: number;
	// LastPage is the identifier for the final page of results. It is only populated if there is another page of results after the current page.
	lastPage?: number;
}

// GetVanityNameserverRequest passes the hostname to get the details for.
export interface GetVanityNameserverRequest {
	// DomainName is the domain to for the vanity nameserver.
	domainName?: string;
	// Hostname is the hostname for the vanity nameserver.
	hostname?: string;
}

// DeleteVanityNameserverRequest passes which hostname to remove from the registry.
export interface DeleteVanityNameserverRequest {
	// DomainName is the domain of the vanity nameserver to delete.
	domainName?: string;
	// Hostname is the hostname of the vanity nameserver to delete.
	hostname?: string;
}
