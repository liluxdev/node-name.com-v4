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
class NameComEmailForwarding extends AxiosClient {
    listEmailForwarding(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}/email/forwarding`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error listing email forwarding: ${error.message}`);
            }
        });
    }
    getEmailForwarding(domainName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/domains/${domainName}/email/forwarding/${id}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error getting email forwarding: ${error.message}`);
            }
        });
    }
    createEmailForwarding(domainName, forwarding) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/domains/${domainName}/email/forwarding`, forwarding);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error creating email forwarding: ${error.message}`);
            }
        });
    }
    updateEmailForwarding(domainName, id, forwarding) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put(`/domains/${domainName}/email/forwarding/${id}`, forwarding);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error updating email forwarding: ${error.message}`);
            }
        });
    }
    deleteEmailForwarding(domainName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/domains/${domainName}/email/forwarding/${id}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error deleting email forwarding: ${error.message}`);
            }
        });
    }
}
export default NameComEmailForwarding;
