import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { Tooltip } from '@mui/material';
import { FC } from 'react';

export interface ButtonProps extends LoadingButtonProps {
  helpText?: string;
  triggerLogin?: any;
}

export const Button: FC<ButtonProps> = ({ children, triggerLogin, onClick, helpText = '', ...props }) => {
  const button = (
    <LoadingButton
      {...props}
      sx={{
        borderRadius: 22,
        height: 52,
        fontWeight: 600,
        fontSize: 24,
        textTransform: 'initial',
        padding: '10px 24px',
      }}
      onClick={triggerLogin || onClick}
    >
      <span
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {children}
      </span>
    </LoadingButton>
  );

  return helpText ? (
    <Tooltip title={helpText} disableFocusListener disableTouchListener>
      {button}
    </Tooltip>
  ) : (
    button
  );
};
