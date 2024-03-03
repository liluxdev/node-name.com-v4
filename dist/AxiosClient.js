"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AxiosClient {
    constructor(username, token, baseUrl = "https://api.name.com/v4") {
        this.axiosInstance = axios_1.default.create({
            baseURL: baseUrl,
            auth: { username, password: token },
            headers: { "Content-Type": "application/json" },
        });
    }
}
exports.default = AxiosClient;
