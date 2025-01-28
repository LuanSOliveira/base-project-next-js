/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

export interface InputWithValidationProps {
  registerName: string;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
  error: string;
  loadingInput?: boolean;
}

export interface ISelectAutocompleteOptions {
  id: string;
  value: any;
  label: string;
}
