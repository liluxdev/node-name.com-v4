import axios from 'axios';
import { EmailForwarding } from './types/interfaces';

class NameComEmailForwarding {
    axiosInstance;
    constructor(username, token, baseUrl = 'https://api.name.com/v4') {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            auth: { username, password: token },
            headers: { 'Content-Type': 'application/json' }
        });
    }

    async listEmailForwarding({ domainName }) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/email/forwarding`);
            return response.data;
        } catch (error) {
            throw new Error(`Error listing email forwarding: ${error.message}`);
        }
    }

    async getEmailForwarding({ domainName, id }) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/email/forwarding/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting email forwarding: ${error.message}`);
        }
    }

    async createEmailForwarding(domainName, forwarding: EmailForwarding) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}/email/forwarding`, forwarding);
            return response.data;
        } catch (error) {
            throw new Error(`Error creating email forwarding: ${error.message}`);
        }
    }
    
    async updateEmailForwarding(domainName, id, forwarding : EmailForwarding) {
      try {
        const response = await this.axiosInstance.put(`/domains/${domainName}/email/forwarding/${id}`, forwarding);
        return response.data;
      } catch (error) {
        throw new Error(`Error updating email forwarding: ${error.message}`);
      }
    }

    async deleteEmailForwarding(domainName, id) {
        try {
            const response = await this.axiosInstance.delete(`/domains/${domainName}/email/forwarding/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error deleting email forwarding: ${error.message}`);
        }
    }

}

export default NameComEmailForwarding;
