import { useState } from 'react';
import { Skeleton, TextField } from '@mui/material';

interface Props {
  label: string;
  placeholder?: string;
  initialValue?: string;
  required?: boolean;
  loadingInput?: boolean;
}

const CommonInputText = ({
  label = '',
  placeholder = '',
  initialValue = '',
  required = false,
  loadingInput = false,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  function ChangeInputValue(value: string) {
    setInputValue(value);
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
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => ChangeInputValue(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default CommonInputText;
