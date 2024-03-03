import AxiosClient from "./AxiosClient";

class NameComOrders extends AxiosClient{


    async listOrders(perPage = 0, page = 0) {
        try {
            const params = `perPage=${perPage}&page=${page}`;
            const response = await this.axiosInstance.get(`/orders?${params}`);
            return response.data;
        } catch (error:any) {
            throw new Error(`Error listing orders: ${error.message}`);
        }
    }

    async getOrder(orderId:number) {
        try {
            const response = await this.axiosInstance.get(`/orders/${orderId}`);
            return response.data;
        } catch (error:any) {
            throw new Error(`Error getting order details: ${error.message}`);
        }
    }

    

}

export default NameComOrders;
