var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AxiosClient from "./AxiosClient.js";
class NameComDomains extends AxiosClient {
    listDomains(perPage = 0, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let params = "";
                if (page > 0 && perPage > 0) {
                    params = `?perPage=${perPage}&page=${page}`;
                }
                console.log("Axios: " + this.axiosInstance);
                console.log("Params: " + params);
                const response = yield this.axiosInstance.get(`/domains?${params}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error listing domains: ${error.message}`);
            }
        });
    }
    getDomain(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error getting domain details: ${error.message}`);
            }
        });
    }
    createDomain(domainData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains`, domainData);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error creating domain: ${error.message}`);
            }
        });
    }
    enableWhoisPrivacy(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:enableWhoisPrivacy`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error enabling WHOIS privacy: ${error.message}`);
            }
        });
    }
    disableWhoisPrivacy(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:disableWhoisPrivacy`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error disabling WHOIS privacy: ${error.message}`);
            }
        });
    }
    enableAutorenew(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:enableAutorenew`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error enabling autorenew: ${error.message}`);
            }
        });
    }
    disableAutorenew(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:disableAutorenew`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error disabling autorenew: ${error.message}`);
            }
        });
    }
    renewDomain(domainName, years) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:renew`, { years });
                return response.data;
            }
            catch (error) {
                throw new Error(`Error renewing domain: ${error.message}`);
            }
        });
    }
    // Implement additional methods for get pricing, get auth code, purchase privacy,
    // set nameservers, set contacts, lock/unlock domain, check availability, search,
    // and search stream following the same pattern.
    getPricingForDomain(domainName, years) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}:getPricing`, {
                    params: { years },
                });
                return response.data;
            }
            catch (error) {
                //console.error('Failed to get pricing for domain:', error);
                throw error;
            }
        });
    }
    getAuthCodeForDomain(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}:getAuthCode`);
                return response.data;
            }
            catch (error) {
                //console.error('Failed to get auth code for domain:', error);
                throw error;
            }
        });
    }
    purchasePrivacy(domainName, privacyRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:purchasePrivacy`, privacyRequest);
                return response.data; // Assuming this is the PrivacyResponse
            }
            catch (error) {
                // console.error('Error purchasing privacy:', error);
                throw error;
            }
        });
    }
    setNameservers(domainName, nameservers) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:setNameservers`, nameservers);
                return response.data;
            }
            catch (error) {
                //console.error('Error setting nameservers:', error.response.data);
                throw error;
            }
        });
    }
    setContacts(domainName, contacts) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:setContacts`, contacts);
                return response.data;
            }
            catch (error) {
                // console.error('Error setting contacts:', error.response.data);
                throw error;
            }
        });
    }
    lockDomain(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:lock`);
                return response.data;
            }
            catch (error) {
                // console.error('Error locking domain:', error.response.data);
                throw error;
            }
        });
    }
    unlockDomain(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}:unlock`);
                return response.data;
            }
            catch (error) {
                // console.error('Error unlocking domain:', error.response.data);
                throw error;
            }
        });
    }
    checkAvailability(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}:checkAvailability`);
                return response.data;
            }
            catch (error) {
                //   console.error('Error checking domain availability:', error.response.data);
                throw error;
            }
        });
    }
    search(domainName, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}:search`, {
                    params: { query },
                });
                return response.data;
            }
            catch (error) {
                //     console.error('Error searching for domain:', error.response.data);
                throw error;
            }
        });
    }
    searchStream(domainName, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}:searchStream`, {
                    params: { query },
                });
                return response.data;
            }
            catch (error) {
                //  console.error('Error searching for domain:', error.response.data);
                throw error;
            }
        });
    }
}
export default NameComDomains;
