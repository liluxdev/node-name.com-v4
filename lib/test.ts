
import { NameComDomains } from "./index.js";

export class LocalBaseConfiguration{
    static NAMECOM_API_PASS =  '<your password token here>';
    static NAMECOM_API_USER = 'yourusername-test';
    static NAMECOM_API_URL =  'https://api.dev.name.com';
}

const runTests = async () => {

const domainClient = new NameComDomains(LocalBaseConfiguration.NAMECOM_API_USER, LocalBaseConfiguration.NAMECOM_API_PASS, LocalBaseConfiguration.NAMECOM_API_URL);
domainClient.listDomains().then((domains: any) => {
    //console.log(domains);
});
}

runTests();
