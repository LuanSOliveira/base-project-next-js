import { useState } from 'react';
import { Skeleton, TextField } from '@mui/material';
import { InputWithValidationProps } from '../interface';
import { NumericFormat } from 'react-number-format';
import { InputStyled } from '@/shared/constants';
import ValidationSpanErro from '../../ValidationSpanError';
import InputContainer from '../../InputContainer';

interface Props extends InputWithValidationProps {
  placeholder?: string;
  initialValue?: string;
  saveValueOnStore?: (value: string) => void; // Utilizar para salvar o valor em uma store
}

const InputNumericValue = ({
  placeholder = '',
  initialValue = '',
  registerName,
  watch,
  setValue,
  error,
  saveValueOnStore,
  loadingInput = false,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const textFieldProps = {
    fullWidth: true,
    placeholder: placeholder,
  };

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
    if (saveValueOnStore) {
      saveValueOnStore(value);
    }
  }

  return (
    <>
      {loadingInput ? (
        <Skeleton variant="rounded" width={'100%'} />
      ) : (
        <div className="w-full">
          <InputContainer>
            <NumericFormat
              value={inputValue}
              customInput={TextField}
              {...textFieldProps}
              allowNegative={false}
              sx={InputStyled(error && watch(registerName).length < 1)}
              onValueChange={(values) => ChangeInputValue(values.value)}
            />
          </InputContainer>
          {ShowError() && <ValidationSpanErro error={error} />}
        </div>
      )}
    </>
  );
};

export default InputNumericValue;
