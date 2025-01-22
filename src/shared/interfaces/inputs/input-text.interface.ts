import { InputTypes, SizeType } from '@/shared/types/inputs-types';

export interface InputTextProps {
  label?: string;
  type?: InputTypes;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  size?: SizeType;
}
