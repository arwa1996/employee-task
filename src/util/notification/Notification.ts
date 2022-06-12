import { notification } from 'antd';

export const openNotification = (message: string, type: string) => {
  if (type === 'error')
    notification.error({
      message,
      placement: 'topRight',
      duration: 3,
    });
  else
    notification.success({
      message,
      placement: 'topRight',
      duration: 3,
    });
};
