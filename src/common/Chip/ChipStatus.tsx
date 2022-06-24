import { Chip, ChipProps } from '@mui/material';
import { FC } from 'react';

interface ChipStatusProps extends ChipProps {
  colorStyle?: string;
}

export const ChipStatus: FC<ChipStatusProps> = ({ colorStyle = '', sx, ...props }) => {
  return <Chip variant="outlined" sx={{ color: colorStyle, borderColor: colorStyle, ...sx }} {...props} />;
};
