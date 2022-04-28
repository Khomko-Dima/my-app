import { ActionsType } from '@common/infrastructure/store/common/actions-type';

export const LoginStartAction = () => ({
	type: ActionsType.LOGIN_START,
});
export const LoginSuccessAction = () => ({
	type: ActionsType.LOGIN_SUCCESS,
});
export const LoginErrorAction = (error: any) => ({
	type: ActionsType.LOGIN_ERROR,
	error,
});
