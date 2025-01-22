import { txDefault } from './colors';

export function InputStyled(error: unknown | boolean) {
  if (error) {
    return {
      width: '100%',
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: txDefault.txDefaultError,
      },
      '& .MuiInputLabel-root.Mui-focused': { color: txDefault.txDefaultError },
    };
  } else {
    return { width: '100%' };
  }
}
