export default class AxiosClient {
    axiosInstance: import("axios").AxiosInstance;
    constructor(username: string, token: string, baseUrl?: string);
}
