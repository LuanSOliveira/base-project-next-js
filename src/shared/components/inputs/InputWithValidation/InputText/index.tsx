import { useState } from 'react';
import { InputWithValidationProps } from '../interface';
import { Skeleton, TextField } from '@mui/material';
import { InputStyled, txDefault } from '@/shared/constants';

interface Props extends InputWithValidationProps {
  label: string;
  placeholder?: string;
  initialValue?: string;
  required?: boolean;
}

const InputTextWithValidate = ({
  label = '',
  placeholder = '',
  initialValue = '',
  required = false,
  registerName,
  watch,
  setValue,
  error,
  loadingInput = false,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  function ShowError(): boolean {
    if (error && watch(registerName).length <= 0) {
      return true;
    } else {
      return false;
    }
  }

  function ChangeInputValue(value: string) {
    setInputValue(value);
    setValue(registerName, value);
  }

  return (
    <>
      {loadingInput ? (
        <Skeleton variant="rounded" width={'100%'} />
      ) : (
        <div className="w-full">
          <TextField
            required={required}
            fullWidth
            label={label}
            sx={InputStyled(error && watch(registerName).length < 1)}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => ChangeInputValue(e.target.value)}
          />
          {ShowError() && (
            <span
              className="text-sm"
              style={{ color: txDefault.txDefaultError }}
            >
              * {error}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default InputTextWithValidate;
