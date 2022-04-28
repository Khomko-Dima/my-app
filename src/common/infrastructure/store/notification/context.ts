import { createContext, Dispatch } from 'react';
import {
	initialState,
	TNotificationState,
} from '@common/infrastructure/store/notification/reducer';

type Context = Partial<{ store: TNotificationState; dispatch: Dispatch<any> }>;
export const NotificationContext = createContext<Context>({
	store: initialState,
});
