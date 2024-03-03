import axios from 'axios';


export class NameComVanityNameServers {
    axiosInstance;
    constructor(username, token, baseUrl = 'https://api.name.com/v4') {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            auth: { username, password: token },
            headers: { 'Content-Type': 'application/json' }
        });
    }
	async listVanityNameservers(request) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers`;

		const params = {};
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

	async getVanityNameserver(request) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;

		try {
			const response = await this.axiosInstance.get(endpoint);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async createVanityNameserver(request) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers`;

		try {
			const response = await this.axiosInstance.post(endpoint, request);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async updateVanityNameserver(request) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;

		try {
			const response = await this.axiosInstance.put(endpoint, request);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async deleteVanityNameserver(request) {
		const endpoint = `/domains/${request.domainName}/vanity_nameservers/${request.hostname}`;

		try {
			const response = await this.axiosInstance.delete(endpoint, { data: request });
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}