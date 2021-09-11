import axios from 'axios';
import initAuthInterceptors from './interceptors';

export const httpService = axios.create();
export const authHttpService = axios.create();

initAuthInterceptors(authHttpService);

export default httpService;
