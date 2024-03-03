import AxiosClient from './AxiosClient';
import { ListVanityNameserversRequest, VanityNameserver } from './types/interfaces';


export default class NameComVanityNameservers extends AxiosClient {

	async listVanityNameservers(request: ListVanityNameserversRequest) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers`;

		const params:any = {};
		if (request.perPage !== 0) {
			params.perPage = request.perPage;
		}
		if (request.page !== 0) {
			params.page = request.page;
		}

		try {
			const response = await this.axiosInstance.get(endpoint, { params });
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getVanityNameserver(request: any) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;

		try {
			const response = await this.axiosInstance.get(endpoint);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async createVanityNameserver(request: VanityNameserver) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers`;

		try {
			const response = await this.axiosInstance.post(endpoint, request);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async updateVanityNameserver(request: VanityNameserver) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;

		try {
			const response = await this.axiosInstance.put(endpoint, request);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async deleteVanityNameserver(request: VanityNameserver) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;

		try {
			const response = await this.axiosInstance.delete(endpoint, { data: request });
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}