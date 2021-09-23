import { enqueueSnackbar } from 'store/notifier/actions';

export const showApiErrorSnack = (error) =>
  enqueueSnackbar({
    message: error.data?.message || '',
    options: {
      snackVariant: 'danger',
    },
  });
