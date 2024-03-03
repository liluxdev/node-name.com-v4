export default class AxiosClient {
    axiosInstance: import("axios").AxiosInstance;
    username: string;
    token: string;
    baseUrl?: string;
    constructor(username: string, token: string, baseUrl?: string);
}
