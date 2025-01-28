import { Skeleton, TextField } from '@mui/material';
import { useState } from 'react';
import { InputWithValidationProps } from '../interface';
import { InputStyled } from '@/shared/constants';
import ValidationSpanErro from '../../ValidationSpanError';
import InputContainer from '../../InputContainer';

interface Props extends InputWithValidationProps {
  label?: string;
  initialValue?: string;
  required?: boolean;
  dataTeste: string;
  saveValueOnStore?: (value: string) => void; // Utilizar para salvar o valor em uma store
}

const InputDateValue = ({
  initialValue = '',
  registerName,
  watch,
  setValue,
  error,
  saveValueOnStore,
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
            <TextField
              type="date"
              fullWidth
              sx={InputStyled(error && watch(registerName).length < 1)}
              value={inputValue}
              onChange={(e) => ChangeInputValue(e.target.value)}
            />
          </InputContainer>
          {ShowError() && <ValidationSpanErro error={error} />}
        </div>
      )}
    </>
  );
};

export default InputDateValue;
