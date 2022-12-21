import { Content } from '@application/entities/content';
import {
  Notification,
  NotifcationProps,
} from '@application/entities/notification';

type Override = Partial<NotifcationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('This is a notification'),
    recipientId: 'recepient-2',
    ...override,
  });
}
