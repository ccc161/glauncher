// components/GlobalNotification.tsx
import { notification } from 'antd';

interface NotificationProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
  duration?: number;
}

const GlobalNotification = ({ type, message, description, duration = 2  }: NotificationProps) => {
  notification[type]({
    message,
    description,
  });
};


const alertGlobalNotification = (_type: 'success' | 'info' | 'warning' | 'error', _message: string, _description: string, _duration: number = 2) => {
  GlobalNotification({
    type: _type,
    message: _message,
    description: _description,
    duration: _duration,
  });
};

export default alertGlobalNotification