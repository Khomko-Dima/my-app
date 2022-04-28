import React, { FC, useReducer } from 'react';
import { NotificationContext } from '@common/infrastructure/store/notification/context';
import Reducer, { initialState } from '@common/infrastructure/store/notification/reducer';

export const NotificationStore: FC<{ children: any }> = ({ children }) => {
	const [store, dispatch] = useReducer(Reducer, initialState);
	return (
		<NotificationContext.Provider value={{ store, dispatch }}>
			{children}
		</NotificationContext.Provider>
	);
};
