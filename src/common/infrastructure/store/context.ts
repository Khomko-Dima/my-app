import { createContext, Dispatch } from 'react';
import { initialStore, Store } from '@common/infrastructure/store/reducer';

export const CommonContext = createContext<{ store: Store; dispatch?: Dispatch<any> }>({
	store: initialStore,
	dispatch: () => {},
});
