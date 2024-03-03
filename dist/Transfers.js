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
class NameComTransfers extends AxiosClient_1.default {
    listTransfers(perPage = 0, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = `perPage=${perPage}&page=${page}`;
                const response = yield this.axiosInstance.get(`/transfers?${params}`);
                return response.data;
            }
            catch (error) {
                //console.error('Error listing transfers:', error.response.data);
                throw error;
            }
        });
    }
    getTransfer(domainName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/transfers/${domainName}`);
                return response.data;
            }
            catch (error) {
                //console.error('Error getting transfer:', error.response.data);
                throw error;
            }
        });
    }
    createTransfer(transfer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/transfers`, transfer);
                return response.data;
            }
            catch (error) {
                // console.error('Error creating transfer:', error.response.data);
                throw error;
            }
        });
    }
    // CancelTransfer cancels a pending transfer request and refunds the amount to account credit.
    cancelTransfer(transferRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/transfers/${transferRequest.domainName}:cancel`;
            try {
                const response = yield this.axiosInstance.post(endpoint, transferRequest);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = NameComTransfers;
