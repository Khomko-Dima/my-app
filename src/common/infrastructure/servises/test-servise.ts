import axios, { AxiosResponse } from 'axios';
import { OptionsService } from '@common/infrastructure/types';

export class TestService {
	static async getDataTest<T>(options: OptionsService<T>): Promise<AxiosResponse> {
		return axios.get('', {
			signal: options.signal,
		});
	}
}
