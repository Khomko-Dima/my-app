import { createContext, Dispatch } from 'react';
import { initialStore, CommonStore } from '@common/infrastructure/store/reducer';

type Context = Partial<{ store: CommonStore; dispatch: Dispatch<any> }>;
export const CommonContext = createContext<Context>({
	store: initialStore,
});
