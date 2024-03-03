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
class NameComOrders extends AxiosClient {
    listOrders(perPage = 0, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = `perPage=${perPage}&page=${page}`;
                const response = yield this.axiosInstance.get(`/orders?${params}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error listing orders: ${error.message}`);
            }
        });
    }
    getOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/orders/${orderId}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error getting order details: ${error.message}`);
            }
        });
    }
}
export default NameComOrders;
