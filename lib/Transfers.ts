import { Transfer } from './types/interfaces';
import AxiosClient from './AxiosClient';

export default class NameComTransfers extends AxiosClient {


    async listTransfers(perPage:number = 0, page:number = 0 ) {
        try {
            const params = `perPage=${perPage}&page=${page}`;
            const response = await this.axiosInstance.get(`/transfers?${params}`);
            return response.data;
        } catch (error:any) {
            //console.error('Error listing transfers:', error.response.data);
            throw error;
        }
    }

    async getTransfer(domainName:string, id:number ) {
        try {
            const response = await this.axiosInstance.get(`/transfers/${domainName}`);
            return response.data;
        } catch (error:any) {
            //console.error('Error getting transfer:', error.response.data);
            throw error;
        }
    }

    async createTransfer(transfer: Transfer) {
        try {
            const response = await this.axiosInstance.post(`/transfers`, transfer);
            return response.data;
        } catch (error:any) {
           // console.error('Error creating transfer:', error.response.data);
            throw error;
        }
    }

        // CancelTransfer cancels a pending transfer request and refunds the amount to account credit.
    async  cancelTransfer(transferRequest: Transfer) {
        const endpoint = `/transfers/${transferRequest.domainName}:cancel`;

        try {
            const response = await this.axiosInstance.post(endpoint, transferRequest);
            return response.data;
        } catch (error:any) {
            throw error;
        }
    }

    



}

