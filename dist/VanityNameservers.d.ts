import AxiosClient from './AxiosClient.js';
import { ListVanityNameserversRequest, VanityNameserver } from './types/';
export default class NameComVanityNameservers extends AxiosClient {
    listVanityNameservers(request: ListVanityNameserversRequest): Promise<any>;
    getVanityNameserver(request: any): Promise<any>;
    createVanityNameserver(request: VanityNameserver): Promise<any>;
    updateVanityNameserver(request: VanityNameserver): Promise<any>;
    deleteVanityNameserver(request: VanityNameserver): Promise<any>;
}
