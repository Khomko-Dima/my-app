import * as actions from './actions';
import { InferValueTypes } from '@common/infrastructure/types';
import { ActionsType } from '@common/infrastructure/store/common/actions-type';

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;
export type CommonStore = {
	isLogin: boolean;
	isLoading: boolean;
	error: any;
};
export const initialStore: CommonStore = {
	isLogin: false,
	isLoading: false,
	error: null,
};
export default function CommonReducer(
	state: CommonStore = initialStore,
	actions: ActionTypes,
): CommonStore {
	switch (actions.type) {
		case ActionsType.LOGIN_START:
			return { ...state, isLoading: true };
		case ActionsType.LOGIN_SUCCESS:
			return { ...state, isLoading: false, isLogin: true };
		case ActionsType.LOGIN_ERROR:
			return { ...state, isLoading: false, error: actions.error };
		default:
			return state;
	}
}
