/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormWatch } from 'react-hook-form';
import ValidationSpanErro from '../../../ValidationSpanError';

interface Props {
  maxText?: number;
  inputValue: string;
  error: string;
  watch: UseFormWatch<any>;
  registerName: string;
}

const AreaTextCounter = ({
  maxText,
  inputValue,
  error,
  watch,
  registerName,
}: Props) => {
  function ShowError(): boolean {
    if (error && watch(registerName).length <= 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="flex">
      {!error && <div className="w-full"></div>}
      {ShowError() && <ValidationSpanErro error={error} />}
      {maxText && (
        <span className="text-sm" style={{ color: 'gray' }}>
          {inputValue.length}/{maxText}
        </span>
      )}
    </div>
  );
};

export default AreaTextCounter;
