'use client';

import { Button, CircularProgress } from '@mui/material';
import { ColorButtonType, VariantButtonType } from '../types';

interface Props {
  description: string;
  variant: VariantButtonType;
  onClick?: () => void;
  color?: ColorButtonType;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const DefaultFormButton = ({
  description,
  variant,
  onClick,
  color = 'success',
  fullWidth = false,
  loading = false,
  disabled = false,
}: Props) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled ? disabled : loading}
    >
      {loading ? (
        <div className="flex gap-2 items-center">
          <CircularProgress size="15px" color="inherit" />
          <span>AGUARDE</span>
        </div>
      ) : (
        <div>{description}</div>
      )}
    </Button>
  );
};

export default DefaultFormButton;
