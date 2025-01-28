import { useState } from 'react';
import { InputWithValidationProps } from '../interface';
import { Skeleton, TextField } from '@mui/material';
import { InputStyled } from '@/shared/constants';
import AreaTextCounter from './AreaTextCounter';
import InputContainer from '../../InputContainer';

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

  function ChangeInputValue(value: string) {
    if (maxText && value.length > maxText) {
      return;
    }
    setInputValue(value);
    setValue(registerName, value);
  }

  return (
    <>
      {loadingInput ? (
        <Skeleton variant="rounded" width={'100%'} />
      ) : (
        <div className="w-full">
          <InputContainer>
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
          </InputContainer>
          <AreaTextCounter
            maxText={maxText}
            inputValue={inputValue}
            error={error}
            watch={watch}
            registerName={registerName}
          />
        </div>
      )}
    </>
  );
};

export default InputAreaTextWithValidate;
