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
export default class NameComVanityNameservers extends AxiosClient {
    listVanityNameservers(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/vanity_nameservers`;
            const params = {};
            if (request.perPage !== 0) {
                params.perPage = request.perPage;
            }
            if (request.page !== 0) {
                params.page = request.page;
            }
            try {
                const response = yield this.axiosInstance.get(endpoint, { params });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getVanityNameserver(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;
            try {
                const response = yield this.axiosInstance.get(endpoint);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createVanityNameserver(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/vanity_nameservers`;
            try {
                const response = yield this.axiosInstance.post(endpoint, request);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateVanityNameserver(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;
            try {
                const response = yield this.axiosInstance.put(endpoint, request);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteVanityNameserver(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;
            try {
                const response = yield this.axiosInstance.delete(endpoint, { data: request });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
