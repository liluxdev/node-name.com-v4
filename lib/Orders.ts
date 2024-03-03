import axios from 'axios';

class NameComDomains {
    axiosInstance;
    constructor(username, token, baseUrl = 'https://api.name.com/v4') {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            auth: { username, password: token },
            headers: { 'Content-Type': 'application/json' }
        });
    }

    async listDomains({ perPage = 0, page = 0 }) {
        try {
            const params = new URLSearchParams({ perPage: perPage+"", page:page+"" }).toString();
            const response = await this.axiosInstance.get(`/domains?${params}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error listing domains: ${error.message}`);
        }
    }

    async getDomain(domainName) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting domain details: ${error.message}`);
        }
    }

    async createDomain(domainData) {
        try {
            const response = await this.axiosInstance.post(`/domains`, domainData);
            return response.data;
        } catch (error) {
            throw new Error(`Error creating domain: ${error.message}`);
        }
    }

    async enableWhoisPrivacy(domainName) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}:enableWhoisPrivacy`);
            return response.data;
        } catch (error) {
            throw new Error(`Error enabling WHOIS privacy: ${error.message}`);
        }
    }

    async disableWhoisPrivacy(domainName) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}:disableWhoisPrivacy`);
            return response.data;
        } catch (error) {
            throw new Error(`Error disabling WHOIS privacy: ${error.message}`);
        }
    }

    async enableAutorenew(domainName) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}:enableAutorenew`);
            return response.data;
        } catch (error) {
            throw new Error(`Error enabling autorenew: ${error.message}`);
        }
    }

    async disableAutorenew(domainName) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}:disableAutorenew`);
            return response.data;
        } catch (error) {
            throw new Error(`Error disabling autorenew: ${error.message}`);
        }
    }

    async renewDomain(domainName, years) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}:renew`, { years });
            return response.data;
        } catch (error) {
            throw new Error(`Error renewing domain: ${error.message}`);
        }
    }

    // Implement additional methods for get pricing, get auth code, purchase privacy, 
    // set nameservers, set contacts, lock/unlock domain, check availability, search, 
    // and search stream following the same pattern.


    async getPricingForDomain(domainName, years) {
        try {
        const response = await this.axiosInstance.get(`/domains/${domainName}:getPricing`, {
            params: { years }
        });
        return response.data;
        } catch (error) {
        console.error('Failed to get pricing for domain:', error);
        throw error;
        }
    }
    
    async  getAuthCodeForDomain(domainName) {
        try {
        const response = await this.axiosInstance.get(`/domains/${domainName}:getAuthCode`);
        return response.data;
        } catch (error) {
        console.error('Failed to get auth code for domain:', error);
        throw error;
        }
    }

    async  purchasePrivacy(domainName, privacyRequest) {
        try {
          const response = await this.axiosInstance.post(`/domains/${domainName}:purchasePrivacy`, privacyRequest);
          return response.data; // Assuming this is the PrivacyResponse
        } catch (error) {
          console.error('Error purchasing privacy:', error);
          throw error;
        }
      }
      
      async  setNameservers(domainName, nameservers) {
        try {
          const response = await this.axiosInstance.post(`/domains/${domainName}:setNameservers`, nameservers);
          return response.data;
        } catch (error) {
          console.error('Error setting nameservers:', error.response.data);
          throw error;
        }
      }
      
      async setContacts(domainName, contacts) {
        try {
          const response = await this.axiosInstance.post(`/domains/${domainName}:setContacts`, contacts);
          return response.data;
        } catch (error) {
          console.error('Error setting contacts:', error.response.data);
          throw error;
        }
      }

      async lockDomain(domainName) {
        try {
          const response = await this.axiosInstance.post(`/domains/${domainName}:lock`);
          return response.data;
        } catch (error) {
          console.error('Error locking domain:', error.response.data);
          throw error;
        }
      }

      async unlockDomain(domainName) {
        try {
          const response = await this.axiosInstance.post(`/domains/${domainName}:unlock`);
          return response.data;
        } catch (error) {
          console.error('Error unlocking domain:', error.response.data);
          throw error;
        }
      }

      async checkAvailability(domainName) {
        try {
          const response = await this.axiosInstance.get(`/domains/${domainName}:checkAvailability`);
          return response.data;
        } catch (error) {
          console.error('Error checking domain availability:', error.response.data);
          throw error;
        }
      }

      async search(domainName, query) {
        try {
          const response = await this.axiosInstance.get(`/domains/${domainName}:search`, {
            params: { query }
          });
          return response.data;
        } catch (error) {
          console.error('Error searching for domain:', error.response.data);
          throw error;
        }
      }

      async searchStream(domainName, query) {
        try {
          const response = await this.axiosInstance.get(`/domains/${domainName}:searchStream`, {
            params: { query }
          });
          return response.data;
        } catch (error) {
          console.error('Error searching for domain:', error.response.data);
          throw error;
        }
      }

  /*     async deleteDomain(domainName) {
        try {
          const response = await this.axiosInstance.delete(`/domains/${domainName}`);
          return response.data;
        } catch (error) {
          console.error('Error deleting domain:', error.response.data);
          throw error;
        }
      }
   */
}

export default NameComDomains;
