import { useState } from 'react';
import { InputWithValidationProps } from '../interface';
import { Skeleton, TextField } from '@mui/material';
import { InputStyled } from '@/shared/constants';
import ValidationSpanErro from '../../ValidationSpanError';

interface Props extends InputWithValidationProps {
  label: string;
  placeholder?: string;
  initialValue?: string;
  required?: boolean;
  maxText?: number;
}

const InputAreaTextWithValidate = ({
  label = '',
  placeholder = '',
  initialValue = '',
  required = false,
  registerName,
  watch,
  setValue,
  error,
  loadingInput = false,
  maxText,
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
            multiline
            rows={3}
            label={label}
            sx={InputStyled(error && watch(registerName).length < 1)}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => ChangeInputValue(e.target.value)}
          />
          {maxText && (
            <span className="w-full flex justify-end text-sm text-gray-300 bg-red-300">
              {inputValue.length}/{maxText}
            </span>
          )}
          {ShowError() && <ValidationSpanErro error={error} />}
        </div>
      )}
    </>
  );
};

export default InputAreaTextWithValidate;
