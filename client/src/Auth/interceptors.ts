import { AxiosInstance } from "axios";
import jwtDecode from "jwt-decode";

/**
 * EXAMPLE: https://codepen.io/shihab-live/pen/PozaObO
 */
export default function initAuthInterceptors(authHttpService: AxiosInstance) {
	authHttpService.interceptors.request.use((request) => {
		// const currentDate = new Date();
		// const decodedToken = jwtDecode(user)
		// if (request.url == 'loggerApiUrl') {
		//     delete request.headers['DeviceId'];
		// }

		// if (typeof window !== 'undefined' && AuthHelper.isAuthenticated()) {
		//     const authToken = AuthHelper.getToken().access_token || 'dummyToken';
		//     request.headers.Authorization = `Bearer ${authToken}`;
		// }
		return request;
	});

	authHttpService.interceptors.response.use(
		(res) => {
			return res;
		},
		(error) => {
			if (error.response) {
				// return handleError(error.response.status);
				return Promise.reject(error.response);
			} else {
				return Promise.reject(error);
			}
		}
	);
}
