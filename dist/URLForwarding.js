"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AxiosClient_1 = __importDefault(require("./AxiosClient"));
class NameComURLForwardings extends AxiosClient_1.default {
    listURLForwardings(request, perPage = 100, page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/url/forwarding`;
            const params = {};
            if (perPage !== 0) {
                params.perPage = perPage.toString();
            }
            if (page !== 0) {
                params.page = page.toString();
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
    getURLForwarding(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/url/forwarding/${request.host}`;
            try {
                const response = yield this.axiosInstance.get(endpoint);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createURLForwarding(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/url/forwarding`;
            try {
                const response = yield this.axiosInstance.post(endpoint, request);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateURLForwarding(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/url/forwarding/${request.host}`;
            try {
                const response = yield this.axiosInstance.put(endpoint, request);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteURLForwarding(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/domains/${request.domainName}/url/forwarding/${request.host}`;
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
exports.default = NameComURLForwardings;
