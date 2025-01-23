/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Skeleton, TextField } from '@mui/material';
import {
  InputWithValidationProps,
  ISelectAutocompleteOptions,
} from '../interface';
import { AutoCompleteStyled } from '@/shared/constants';
import ValidationSpanErro from '../../ValidationSpanError';

export const defaultSelectAutocompleteValue: ISelectAutocompleteOptions = {
  id: '',
  value: '',
  label: '',
};

interface Props extends InputWithValidationProps {
  placeholder?: string;
  selectedItem: ISelectAutocompleteOptions;
  setSelectedItem: (value: ISelectAutocompleteOptions) => void;
  setFilter: (value: string) => void;
  optionsList: ISelectAutocompleteOptions[];
  saveValueOnStore?: (value: string) => void; // Utilizar para salvar o valor em uma store
}

const InputSelectAutocompleteWithValidation = ({
  placeholder = '',
  selectedItem,
  setSelectedItem,
  setFilter,
  registerName,
  watch,
  setValue,
  error,
  optionsList,
  saveValueOnStore,
  loadingInput = false,
}: Props) => {
  function ShowError(): boolean {
    if (
      error &&
      (watch(registerName)?.length <= 0 || watch(registerName) === null)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function ChangeInputValue(value: string) {
    setValue(registerName, value);
    setFilter(value);
  }

  function ChangeOptionValue(
    selectedOption: ISelectAutocompleteOptions | null,
  ) {
    const value = selectedOption
      ? selectedOption
      : defaultSelectAutocompleteValue;
    setSelectedItem(value);
    setValue(registerName, JSON.stringify(value));
    if (saveValueOnStore) {
      saveValueOnStore(JSON.stringify(value));
    }
  }

  return (
    <>
      {loadingInput ? (
        <Skeleton variant="rounded" width={'100%'} />
      ) : (
        <Autocomplete
          fullWidth
          options={optionsList}
          value={selectedItem}
          noOptionsText={'Nenhuma opção encontrada'}
          getOptionLabel={(option: ISelectAutocompleteOptions) => option.label}
          onChange={(e, selectedOption) => {
            ChangeOptionValue(selectedOption);
          }}
          renderOption={(props, option: ISelectAutocompleteOptions) => {
            return (
              <li {...props} key={option.id}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <div className="w-full">
              <TextField
                {...params}
                fullWidth
                placeholder={placeholder}
                sx={AutoCompleteStyled(error, watch(registerName))}
                onChange={(e) => ChangeInputValue(e.target.value)}
              />
              {ShowError() && <ValidationSpanErro error={error} />}
            </div>
          )}
        />
      )}
    </>
  );
};

export default InputSelectAutocompleteWithValidation;
