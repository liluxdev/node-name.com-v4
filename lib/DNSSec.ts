import AxiosClient from './AxiosClient';
import { DNSSEC } from './types/';

export default class NameComDNSSec extends AxiosClient {

    async listDNSSECs(domainName:string) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/dnssec`);
            return response.data; // Assuming the API returns the expected JSON response
        } catch (error) {
           // console.error('Error listing DNSSECs:', error);
            throw error;
        }
    }

    async getDNSSEC(domainName:string, digest:string) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/dnssec/${digest}`);
            return response.data; // Assuming the API returns the expected JSON response
        } catch (error) {
           // console.error('Error retrieving DNSSEC:', error);
            throw error;
        }
    }

    async createDNSSEC(domainName:string, dnssecData: DNSSEC) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}/dnssec`, dnssecData);
            return response.data; // Assuming the API returns the expected JSON response
        } catch (error) {
           // console.error('Error creating DNSSEC:', error);
            throw error;
        }
    }

    async deleteDNSSEC(domainName:string, digest:string) {
        try {
            const response = await this.axiosInstance.delete(`/domains/${domainName}/dnssec/${digest}`);
            return response.data; // Assuming the API returns an empty response on success
        } catch (error) {
            //console.error('Error removing DNSSEC:', error);
            throw error;
        }
    }
}
