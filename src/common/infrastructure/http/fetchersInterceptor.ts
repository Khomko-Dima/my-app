import $api from '@common/infrastructure/http/index';
import { Logger } from '@common/infrastructure/logger';

export const FetchersInterceptor = () => {
	$api.interceptors.response.use(
		function (response) {
			return response;
		},
		async function (error) {
			if (401 === error.response.status) {
				try {
					Logger('warning', '401', error.response.message);
				} catch (e: any) {
					Logger('error', 'error', [e]);
				}
			}
			return Promise.reject(error);
		},
	);
};
