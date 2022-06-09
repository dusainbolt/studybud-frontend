import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { SxProps, Theme, Tooltip } from '@mui/material';
import { FC } from 'react';

export interface ButtonProps extends LoadingButtonProps {
  helpText?: string;
  triggerLogin?: any;
  sx?: SxProps<Theme>;
}

export const Button: FC<ButtonProps> = ({ children, triggerLogin, onClick, helpText = '', sx, ...props }) => {
  const button = (
    <LoadingButton
      {...props}
      sx={{
        borderRadius: 22,
        fontWeight: 600,
        fontSize: 18,
        height: 44,
        textTransform: 'initial',
        padding: '10px 24px',
        ...sx,
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
