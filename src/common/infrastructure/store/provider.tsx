import React, { FC, useReducer } from 'react';
import { CommonContext } from '@common/infrastructure/store/context';
import CommonReducer, { initialStore } from '@common/infrastructure/store/reducer';

export const CommonStore: FC<{ children: any }> = ({ children }) => {
	const [store, dispatch] = useReducer(CommonReducer, initialStore);

	return (
		// @ts-ignore
		<CommonContext.Provider value={{ store, dispatch }} displayName={'Common'}>
			{children}
		</CommonContext.Provider>
	);
};
