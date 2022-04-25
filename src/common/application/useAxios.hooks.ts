import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { OptionsService } from '@common/infrastructure/types';

type Props<T> = {
	service: Function;
	payload?: T;
};
type ReturnValue<R> = {
	data: R | null;
	isLoading: boolean;
	error?: any;
	cancel: Function;
};
const UseAxiosHooks = <T = any, R = unknown>({ service, payload }: Props<T>): ReturnValue<R> => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	const controllerRef = useRef(new AbortController());
	const cancel = () => {
		controllerRef.current.abort();
	};

	useEffect(() => {
		(async () => {
			try {
				const { data }: AxiosResponse = await service({
					signal: controllerRef.current.signal,
					payload: payload,
				} as OptionsService<T>);
				setData(data);
			} catch (error: AxiosError | any) {
				setError(error.message);
			} finally {
				setLoading(true);
			}
		})();
	}, []);// eslint-disable-line

	return { cancel, data, error, isLoading };
};

type ReturnValueSend<T, R> = {
	sendData: (payload: T) => void;
} & ReturnValue<R>;

const UseAxiosSendHooks = <T = any, R = unknown>({ service }: Props<T>): ReturnValueSend<T, R> => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	const controllerRef = useRef(new AbortController());
	const cancel = () => {
		controllerRef.current.abort();
	};
	const sendData = async (payload: T) => {
		try {
			const { data }: AxiosResponse = await service({
				signal: controllerRef.current.signal,
				payload: payload,
			} as OptionsService<T>);
			setData(data);
		} catch (error: AxiosError | any) {
			setError(error.message);
		} finally {
			setLoading(true);
		}
	};

	return { cancel, sendData, data, error, isLoading };
};
export { UseAxiosHooks, UseAxiosSendHooks };
