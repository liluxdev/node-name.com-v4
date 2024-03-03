import AxiosClient from './AxiosClient.js';
import { EmailForwarding } from './types/.js';
declare class NameComEmailForwarding extends AxiosClient {
    listEmailForwarding(domainName: string): Promise<any>;
    getEmailForwarding(domainName: string, id: number): Promise<any>;
    createEmailForwarding(domainName: string, forwarding: EmailForwarding): Promise<any>;
    updateEmailForwarding(domainName: string, id: number, forwarding: EmailForwarding): Promise<any>;
    deleteEmailForwarding(domainName: string, id: number): Promise<any>;
}
export default NameComEmailForwarding;
