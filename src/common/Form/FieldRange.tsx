import { SxProps, Theme, Box, Slider, FormControl, FormHelperText } from '@mui/material';
import clsx from 'clsx';
import { FieldInputProps, FieldMetaProps, useFormikContext } from 'formik';
import Helper from '@utils/helper';
import { FC, useState } from 'react';
import { FormLabel } from './FormLabel';

export interface FieldRangeType {
  label?: string;
  className?: string;
  options: [];
  sx?: SxProps<Theme>;
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
}

export const FieldRange: FC<FieldRangeType> = ({ label, options, className, sx, field }) => {
  const [value, setValue] = useState<number[]>([20, 37]);
  const { touched, errors, setFieldValue } = useFormikContext();
  const fieldTouch: boolean = Helper.objValue(touched, field?.name);
  const fieldError: string = Helper.objValue(errors, field?.name);
  const isError: boolean = fieldTouch && Boolean(fieldError);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log('event: ', newValue, event);
    setFieldValue(field?.name as string, newValue as number[]);
    setValue(newValue as number[]);
  };

  const marks = [
    {
      value: 0,
      label: 0,
    },
    {
      value: options,
      label: options,
    },
  ];

  return (
    <Box sx={{ width: 300, mt: 2, ...sx }} className={clsx(className)}>
      <FormControl error={isError} fullWidth>
        <FormLabel fieldName={field?.name} label={label} />
        <Slider
          // getAriaLabel={() => 'Temperature range'}
          value={value}
          marks={marks}
          max={options}
          // aria-label="Always visible"
          onChangeCommitted={handleChange as any}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
        />
        {fieldTouch && fieldError && <FormHelperText>{fieldError}</FormHelperText>}
      </FormControl>
    </Box>
  );
};
