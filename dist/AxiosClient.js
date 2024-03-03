import axios from "axios";
export default class AxiosClient {
    constructor(username, token, baseUrl = "https://api.name.com/v4") {
        this.username = username;
        this.token = token;
        if (!baseUrl.endsWith("/v4")) {
            baseUrl += "/v4";
        }
        this.baseUrl = baseUrl;
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            auth: { username, password: token },
            headers: { "Content-Type": "application/json" },
        });
        console.log({ username, password: token });
        console.log({ baseURL: baseUrl });
    }
}
