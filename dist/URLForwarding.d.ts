import AxiosClient from './AxiosClient.js';
import { URLForwarding } from './types/index.js';
export default class NameComURLForwardings extends AxiosClient {
    listURLForwardings(request: URLForwarding, perPage?: number, page?: number): Promise<any>;
    getURLForwarding(request: URLForwarding): Promise<any>;
    createURLForwarding(request: URLForwarding): Promise<any>;
    updateURLForwarding(request: URLForwarding): Promise<any>;
    deleteURLForwarding(request: URLForwarding): Promise<any>;
}
