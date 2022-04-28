import React, { FC, useReducer } from 'react';
import { CommonContext } from '@common/infrastructure/store/common/context';
import Reducer, { initialStore } from '@common/infrastructure/store/common/reducer';

export const CommonStore: FC<{ children: any }> = ({ children }) => {
	const [store, dispatch] = useReducer(Reducer, initialStore);
	return <CommonContext.Provider value={{ store, dispatch }}>{children}</CommonContext.Provider>;
};
