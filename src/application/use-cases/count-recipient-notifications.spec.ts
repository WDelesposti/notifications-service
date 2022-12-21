import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients Notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recepient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recepient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recepient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recepient-1',
    });

    expect(count).toEqual(2);
  });
});
