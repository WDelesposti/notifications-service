import { Content } from './content';
import { Notification } from './notification';

describe('Notification Content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('You have a new friend request.'),
      category: 'social',
      recipientId: 'example-recepient-id',
    });

    expect(notification).toBeTruthy();
  });
});
