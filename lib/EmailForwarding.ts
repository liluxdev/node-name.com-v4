import AxiosClient from './AxiosClient';
import { EmailForwarding } from './types/';

class NameComEmailForwarding extends AxiosClient{


    async listEmailForwarding(domainName: string) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/email/forwarding`);
            return response.data;
        } catch (error:any) {
            throw new Error(`Error listing email forwarding: ${error.message}`);
        }
    }

    async getEmailForwarding(domainName:string, id:number ) {
        try {
            const response = await this.axiosInstance.get(`/domains/${domainName}/email/forwarding/${id}`);
            return response.data;
        } catch (error:any) {
            throw new Error(`Error getting email forwarding: ${error.message}`);
        }
    }

    async createEmailForwarding(domainName:string, forwarding: EmailForwarding) {
        try {
            const response = await this.axiosInstance.post(`/domains/${domainName}/email/forwarding`, forwarding);
            return response.data;
        } catch (error:any) {
            throw new Error(`Error creating email forwarding: ${error.message}`);
        }
    }
    
    async updateEmailForwarding(domainName:string, id:number, forwarding : EmailForwarding) {
      try {
        const response = await this.axiosInstance.put(`/domains/${domainName}/email/forwarding/${id}`, forwarding);
        return response.data;
      } catch (error:any) {
        throw new Error(`Error updating email forwarding: ${error.message}`);
      }
    }

    async deleteEmailForwarding(domainName:string, id:number) {
        try {
            const response = await this.axiosInstance.delete(`/domains/${domainName}/email/forwarding/${id}`);
            return response.data;
        } catch (error:any) {
            throw new Error(`Error deleting email forwarding: ${error.message}`);
        }
    }

}

export default NameComEmailForwarding;
