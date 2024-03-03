import AxiosClient from './AxiosClient.js';
import { URLForwarding } from './types/index.js';


export default class NameComURLForwardings extends AxiosClient {


	async listURLForwardings(request:URLForwarding, perPage = 100, page = 1) {
	
		const endpoint = `/domains/${request.domainName}/url/forwarding`;

		const params:any = {};
		if (perPage !== 0) {
			params.perPage = perPage.toString();
		}
		if (page !== 0) {
			params.page = page.toString();
		}

		try {
			const response = await this.axiosInstance.get(endpoint, { params });
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getURLForwarding(request:URLForwarding) {
		const endpoint = `/domains/${request.domainName}/url/forwarding/${request.host}`;

		try {
			const response = await this.axiosInstance.get(endpoint);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async createURLForwarding(request:URLForwarding	) {
		const endpoint = `/domains/${request.domainName}/url/forwarding`;

		try {
			const response = await this.axiosInstance.post(endpoint, request);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async updateURLForwarding(request:URLForwarding) {
		const endpoint = `/domains/${request.domainName}/url/forwarding/${request.host}`;

		try {
			const response = await this.axiosInstance.put(endpoint, request);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async deleteURLForwarding(request:URLForwarding) {
		const endpoint = `/domains/${request.domainName}/url/forwarding/${request.host}`;

		try {
			const response = await this.axiosInstance.delete(endpoint, { data: request });
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}

