var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NameComDomains } from "./index.js";
export class LocalBaseConfiguration {
}
LocalBaseConfiguration.NAMECOM_API_PASS = '7f0aac1a1f4165fb4648a730422f5592576d7ca0';
LocalBaseConfiguration.NAMECOM_API_USER = 'webtier-test';
LocalBaseConfiguration.NAMECOM_API_URL = 'https://api.dev.name.com';
const runTests = () => __awaiter(void 0, void 0, void 0, function* () {
    const domainClient = new NameComDomains(LocalBaseConfiguration.NAMECOM_API_USER, LocalBaseConfiguration.NAMECOM_API_PASS, LocalBaseConfiguration.NAMECOM_API_URL);
    domainClient.listDomains().then((domains) => {
        //console.log(domains);
    });
});
runTests();
