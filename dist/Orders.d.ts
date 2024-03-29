import AxiosClient from './AxiosClient.js';
declare class NameComOrders extends AxiosClient {
    listOrders(perPage?: number, page?: number): Promise<any>;
    getOrder(orderId: number): Promise<any>;
}
export default NameComOrders;
