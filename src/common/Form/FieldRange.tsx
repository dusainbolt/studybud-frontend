import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { FC, useState } from 'react';
import { FormLabel } from './FormLabel';

// function valuetext(value: number) {
//   return `${value}°C`;
// }

export interface FieldRangeType {
  label?: string;
  className?: string;
  options: [];
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
}

export const FieldRange: FC<FieldRangeType> = ({ label, options, className, field }) => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const marks = [
    {
      value: 0,
      label: 0,
    },

    {
      value: 100,
      label: 100,
    },
  ];

  return (
    <Box sx={{ width: 300, mt: 2 }}>
      <FormLabel fieldName={field?.name} label={label} />
      <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={value}
        marks={marks}
        // aria-label="Always visible"
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </Box>
  );
};
