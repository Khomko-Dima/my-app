import { ActionsType } from '@common/infrastructure/store/notification/actions-type';
import * as actions from './actions';
import { InferValueTypes, Nullable } from '@common/infrastructure/types';

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type TNotification = 'success' | 'info' | 'warning' | 'error' | null;
export type TNotificationState = {
	title: Nullable<string>;
	description: Nullable<string>;
	type: TNotification;
};
export const initialState: TNotificationState = {
	title: null,
	description: null,
	type: null,
};
export default function CommonReducer(
	state: TNotificationState = initialState,
	action: ActionTypes,
): TNotificationState {
	switch (action.type) {
		case ActionsType.NOTIFICATION_OPEN:
			return {
				...state,
				title: action.title,
				description: action.description,
				type: action.types,
			};
		case ActionsType.NOTIFICATION_CLOSE:
			return {
				...initialState,
			};
		default:
			return state;
	}
}
