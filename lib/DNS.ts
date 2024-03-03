import axios from 'axios';
import { Record } from './types/interfaces';

class NamceComDNS{
    axiosInstance;

    constructor(username, token, baseUrl = 'https://api.name.com/v4') {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            auth: {
                username: username,
                password: token
            }
        });
    }

    async listRecords({ domainName, perPage = 0, page = 0 }) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/records`, {
                params: { perPage, page }
            });
            return response.data;
        } catch (error) {
            console.error('Error listing records:', error);
            throw error;
        }
    }

    async getRecord({ domainName, id }) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/records/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error getting record:', error);
            throw error;
        }
    }

    async createRecord(domainName, record: Record) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}/records`, record);
            return response.data;
        } catch (error) {
            console.error('Error creating record:', error);
            throw error;
        }
    }

    async updateRecord(domainName, id, record: Record) {
        try {
            const response = await this.axiosInstance.put(`/domains/${domainName}/records/${id}`, record);
            return response.data;
        } catch (error) {
            console.error('Error updating record:', error);
            throw error;
        }
    }

    async deleteRecord(domainName, id) {
        try {
            const response = await this.axiosInstance.delete(`/domains/${domainName}/records/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting record:', error);
            throw error;
        }
    }
}
