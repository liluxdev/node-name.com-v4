# namecomv4
A Node.js library wrapper for Name.com's V4 API, designed to simplify domain management tasks such as querying domain information, managing DNS records, and handling domain registration and transfer.

## Installation
Install the package using npm:

```bash
npm i --save namecomv4
```
## Configuration
Ensure your tsconfig.json includes the following settings for optimal performance:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ESNext"],
    ...
    }
}
```
## Usage
Here's a quick example to get you started:

```typescript
import { NameComDomains } from "namecomv4";

const domainClient = new NameComDomains("username-test", "token", "https://api.dev.name.com");
domainClient.listDomains().then((domains: any) => {
  console.log(domains);
});
```

### Testing a search & purchase
```typescript
        const domainClient = new NameComDomains(LocalBaseConfiguration.NAMECOM_API_USER, LocalBaseConfiguration.NAMECOM_API_PASS, LocalBaseConfiguration.NAMECOM_API_URL);
                domainClient.listDomains().then((domains: any) => {
                    console.log(domains);
        });

        domainClient.search( {keyword: "exampleeeee"}).then((searchResponse: SearchResponse) => {
            console.log("[TEST] Searched domain results");
            if (searchResponse.results && searchResponse.results.length > 0){
                console.log("[TEST] has results");
                searchResponse.results.forEach((searchResult: SearchResult) => {
                    console.log(JSON.stringify(searchResult));
                    console.log("[TEST]"+searchResult.domainName+ " purchasable:"+ searchResult.purchasable + " purchase price:"+ searchResult.purchasePrice);
                    if (searchResult.purchasable){
                        console.log("[TEST]"+"Purchasing domain "+ searchResult.domainName);
                        const purchaseDomain: CreateDomainRequest = {
                            domain: {domainName:searchResult.domainName},
                            purchasePrice: searchResult.purchasePrice,
                            purchaseType: searchResult.purchaseType,

                        };
                        domainClient.createDomain(purchaseDomain).then((purchaseResponse: CreateDomainResponse) => {
                            console.log("[TEST]"+"Purchase response:"+ JSON.stringify(purchaseResponse.domain) +" total paid"+ purchaseResponse.totalPaid);
                            if (purchaseResponse.domain){
                                console.log("[TEST]"+"Domain purchased"+JSON.stringify(purchaseResponse));
                            }
                        });
                        return;
                    }
                    console.log(searchResult.purchasable);
                });
            }
        });
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.


## Original API Docs

https://www.name.com/api-docs

## Get Access Token

https://www.name.com/account/settings/api