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

const domainClient = new NameComDomains("username", "token");
domainClient.listDomains().then((domains: any) => {
  console.log(domains);
});
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.