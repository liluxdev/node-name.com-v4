import AxiosClient from './AxiosClient';
import { Record } from './types/index.js';

export default class NamceComDNS extends AxiosClient{


    async listRecords(domainName: string, perPage = 0, page = 0 ) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/records`, {
                params: { perPage, page }
            });
            return response.data;
        } catch (error) {
            //onsole.error('Error listing records:', error);
            throw error;
        }
    }

    async getRecord(domainName:string, id:number) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/records/${id}`);
            return response.data;
        } catch (error) {
            //console.error('Error getting record:', error);
            throw error;
        }
    }

    async createRecord(domainName:string, record: Record) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}/records`, record);
            return response.data;
        } catch (error) {
            //console.error('Error creating record:', error);
            throw error;
        }
    }

    async updateRecord(domainName:string, id:number, record: Record) {
        try {
            const response = await this.axiosInstance.put(`/domains/${domainName}/records/${id}`, record);
            return response.data;
        } catch (error) {
          //  console.error('Error updating record:', error);
            throw error;
        }
    }

    async deleteRecord(domainName:string, id:number) {
        try {
            const response = await this.axiosInstance.delete(`/domains/${domainName}/records/${id}`);
            return response.data;
        } catch (error) {
           // console.error('Error deleting record:', error);
            throw error;
        }
    }
}
