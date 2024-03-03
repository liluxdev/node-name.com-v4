import {
  Contact,
  Contacts,
  CreateDomainRequest,
  CreateDomainResponse,
  Domain,
  ErrorResponse,
  ListDomainsResponse,
  PricingRequest,
  SearchRequest,
  SearchResponse,
  SetNameserversRequest,
} from "./types/index.js";
import AxiosClient from "./AxiosClient.js";

class NameComDomains extends AxiosClient {
  async listDomains(perPage = 0, page = 0) : Promise<ListDomainsResponse> {
    try {
      let params = "";
      if (page > 0 && perPage > 0) {
        params = `?perPage=${perPage}&page=${page}`;
      }
      console.log("Axios: "+this.axiosInstance);
      console.log("Params: "+params);
      const response = await this.axiosInstance.get(`/domains?${params}`);
      return response.data as ListDomainsResponse;
    } catch (error: any) {
      throw new Error(`Error listing domains: ${error.message}`);
    }
  }

  async getDomain(domainName: string) {
    try {
      const response = await this.axiosInstance.get(`/domains/${domainName}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Error getting domain details: ${error.message}`);
    }
  }

  async createDomain(domainData: CreateDomainRequest) : Promise<CreateDomainResponse> {
    try {
      const response = await this.axiosInstance.post(`/domains`, domainData);
      return response.data as CreateDomainResponse;
    } catch (error: any) {
      throw new Error(`Error creating domain: ${error.message}`);
    }
  }

  async enableWhoisPrivacy(domainName: string) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:enableWhoisPrivacy`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error enabling WHOIS privacy: ${error.message}`);
    }
  }

  async disableWhoisPrivacy(domainName: string) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:disableWhoisPrivacy`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error disabling WHOIS privacy: ${error.message}`);
    }
  }

  async enableAutorenew(domainName: string) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:enableAutorenew`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error enabling autorenew: ${error.message}`);
    }
  }

  async disableAutorenew(domainName: string) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:disableAutorenew`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error disabling autorenew: ${error.message}`);
    }
  }

  async renewDomain(domainName: string, years: number) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:renew`,
        { years }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error renewing domain: ${error.message}`);
    }
  }

  // Implement additional methods for get pricing, get auth code, purchase privacy,
  // set nameservers, set contacts, lock/unlock domain, check availability, search,
  // and search stream following the same pattern.

  async getPricingForDomain(domainName: string, years: number) {
    try {
      const response = await this.axiosInstance.get(
        `/domains/${domainName}:getPricing`,
        {
          params: { years },
        }
      );
      return response.data;
    } catch (error: any) {
      //console.error('Failed to get pricing for domain:', error);
      throw error;
    }
  }

  async getAuthCodeForDomain(domainName: string) {
    try {
      const response = await this.axiosInstance.get(
        `/domains/${domainName}:getAuthCode`
      );
      return response.data;
    } catch (error) {
      //console.error('Failed to get auth code for domain:', error);
      throw error;
    }
  }

  async purchasePrivacy(domainName: string, privacyRequest: PricingRequest) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:purchasePrivacy`,
        privacyRequest
      );
      return response.data; // Assuming this is the PrivacyResponse
    } catch (error) {
      // console.error('Error purchasing privacy:', error);
      throw error;
    }
  }

  async setNameservers(domainName: string, nameservers: SetNameserversRequest) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:setNameservers`,
        nameservers
      );
      return response.data;
    } catch (error) {
      //console.error('Error setting nameservers:', error.response.data);
      throw error;
    }
  }

  async setContacts(domainName: string, contacts: Contacts) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:setContacts`,
        contacts
      );
      return response.data;
    } catch (error) {
      // console.error('Error setting contacts:', error.response.data);
      throw error;
    }
  }

  async lockDomain(domainName: string) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:lock`
      );
      return response.data;
    } catch (error) {
      // console.error('Error locking domain:', error.response.data);
      throw error;
    }
  }

  async unlockDomain(domainName: string) {
    try {
      const response = await this.axiosInstance.post(
        `/domains/${domainName}:unlock`
      );
      return response.data;
    } catch (error) {
      // console.error('Error unlocking domain:', error.response.data);
      throw error;
    }
  }

  async checkAvailability(domainName: string) {
    try {
      const response = await this.axiosInstance.get(
        `/domains/${domainName}:checkAvailability`
      );
      return response.data;
    } catch (error) {
      //   console.error('Error checking domain availability:', error.response.data);
      throw error;
    }
  }

  async search(query: SearchRequest): Promise<SearchResponse> {
    try {
      const response = await this.axiosInstance.post(
        `/domains:search`,
        {
          ...query,
        }
      );
      return response.data as SearchResponse;
    } catch (error) {
      // console.error('Error searching for domain:', error.response.data);
      throw error;
    }
  }

  async searchStream(domainName: string, query: SearchRequest): Promise<SearchResponse> {
    try {
      const response = await this.axiosInstance.post(
        `/domains:searchStream`,
        {
          ...query,
        }
      );
      return response.data as SearchResponse;
    } catch (error) {
      //  console.error('Error searching for domain:', error.response.data);
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
