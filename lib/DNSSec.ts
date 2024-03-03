import axios from 'axios';

class NameComDNSSec {
    axiosInstance;
    constructor(baseUrl = 'https://api.name.com/v4', username, token) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            auth: {
                username: username,
                password: token
            }
        });
    }

    async listDNSSECs(domainName) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/dnssec`);
            return response.data; // Assuming the API returns the expected JSON response
        } catch (error) {
            console.error('Error listing DNSSECs:', error);
            throw error;
        }
    }

    async getDNSSEC(domainName, digest) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/dnssec/${digest}`);
            return response.data; // Assuming the API returns the expected JSON response
        } catch (error) {
            console.error('Error retrieving DNSSEC:', error);
            throw error;
        }
    }

    async createDNSSEC(domainName, dnssecData) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}/dnssec`, dnssecData);
            return response.data; // Assuming the API returns the expected JSON response
        } catch (error) {
            console.error('Error creating DNSSEC:', error);
            throw error;
        }
    }

    async deleteDNSSEC(domainName, digest) {
        try {
            const response = await this.axiosInstance.delete(`/domains/${domainName}/dnssec/${digest}`);
            return response.data; // Assuming the API returns an empty response on success
        } catch (error) {
            console.error('Error removing DNSSEC:', error);
            throw error;
        }
    }
}
