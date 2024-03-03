import axios from "axios";
export default class AxiosClient {
    constructor(username, token, baseUrl = "https://api.name.com/v4") {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            auth: { username, password: token },
            headers: { "Content-Type": "application/json" },
        });
    }
}
