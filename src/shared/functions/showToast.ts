import { Bounce, ToastOptions, toast } from 'react-toastify';

type ToastType = {
  message: string;
  type?: 'seccess' | 'error' | 'info';
  notification?: boolean;
};

export function showToast({
  message,
  type = 'seccess',
  notification = false,
}: ToastType) {
  const options = {
    position: notification ? 'bottom-left' : 'top-right',
    autoClose: notification ? false : 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  } as ToastOptions<unknown>;

  if (type === 'seccess') {
    toast.success(`${message}`, options);
  }

  if (type === 'error') {
    toast.error(`${message}`, options);
  }

  if (type === 'info') {
    toast.dismiss();
    setTimeout(() => toast.info(`${message}`, options), 300);
  }
}
