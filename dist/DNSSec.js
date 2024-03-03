var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AxiosClient from './AxiosClient.js';
export default class NameComDNSSec extends AxiosClient {
    listDNSSECs(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}/dnssec`);
                return response.data; // Assuming the API returns the expected JSON response
            }
            catch (error) {
                // console.error('Error listing DNSSECs:', error);
                throw error;
            }
        });
    }
    getDNSSEC(domainName, digest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}/dnssec/${digest}`);
                return response.data; // Assuming the API returns the expected JSON response
            }
            catch (error) {
                // console.error('Error retrieving DNSSEC:', error);
                throw error;
            }
        });
    }
    createDNSSEC(domainName, dnssecData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}/dnssec`, dnssecData);
                return response.data; // Assuming the API returns the expected JSON response
            }
            catch (error) {
                // console.error('Error creating DNSSEC:', error);
                throw error;
            }
        });
    }
    deleteDNSSEC(domainName, digest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/domains/${domainName}/dnssec/${digest}`);
                return response.data; // Assuming the API returns an empty response on success
            }
            catch (error) {
                //console.error('Error removing DNSSEC:', error);
                throw error;
            }
        });
    }
}
