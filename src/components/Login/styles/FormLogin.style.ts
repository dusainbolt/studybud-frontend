import { SxProps, Theme } from '@mui/material';
import { defaultStyle } from '@styles/theme';

type PropertyNames = 'buttonLoginNow' | 'buttonRegister';

export const styleFormRegisterComponent: Record<PropertyNames, SxProps<Theme>> = {
  buttonLoginNow: { textAlign: 'right', display: 'block', mt: 1 },
  buttonRegister: { width: '100%', mt: 3, mb: 1, ...defaultStyle.btnStyle('#fe6347') },
};
