import { ActionsType } from '@common/infrastructure/store/notification/actions-type';
import { TNotification } from '@common/infrastructure/store/notification/reducer';

export const NotificationOpen = (
	types: TNotification,
	title: string | null = null,
	description: string | null = null,
) => ({
	type: ActionsType.NOTIFICATION_OPEN,
	types,
	title,
	description,
});
export const NotificationClose = () => ({
	type: ActionsType.NOTIFICATION_CLOSE,
});
