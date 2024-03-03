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
class NamceComDNS extends AxiosClient_1.default {
    listRecords(domainName, perPage = 0, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}/records`, {
                    params: { perPage, page }
                });
                return response.data;
            }
            catch (error) {
                //onsole.error('Error listing records:', error);
                throw error;
            }
        });
    }
    getRecord(domainName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}/records/${id}`);
                return response.data;
            }
            catch (error) {
                //console.error('Error getting record:', error);
                throw error;
            }
        });
    }
    createRecord(domainName, record) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}/records`, record);
                return response.data;
            }
            catch (error) {
                //console.error('Error creating record:', error);
                throw error;
            }
        });
    }
    updateRecord(domainName, id, record) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put(`/domains/${domainName}/records/${id}`, record);
                return response.data;
            }
            catch (error) {
                //  console.error('Error updating record:', error);
                throw error;
            }
        });
    }
    deleteRecord(domainName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/domains/${domainName}/records/${id}`);
                return response.data;
            }
            catch (error) {
                // console.error('Error deleting record:', error);
                throw error;
            }
        });
    }
}
exports.default = NamceComDNS;
