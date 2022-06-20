/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { OptionSelect } from '@type/field';
import Helper from '@utils/helper';
import clsx from 'clsx';
import { FieldInputProps, FieldMetaProps, useFormikContext } from 'formik';
import { FC } from 'react';
import { FormLabel } from './FormLabel';

export interface FieldRadioBoxType {
  label?: string;
  className?: string;
  options: OptionSelect[];
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
}

const FieldRadioBox: FC<FieldRadioBoxType> = ({ label, options, className, field }) => {
  const { touched, errors, setFieldValue } = useFormikContext();
  const fieldTouch: boolean = Helper.objValue(touched, field?.name);
  const fieldError: string = Helper.objValue(errors, field?.name);
  const isError: boolean = fieldTouch && Boolean(fieldError);

  const handleChange = (event) => {
    setFieldValue(field?.name as string, parseInt(event.target.value, 10));
  };

  return (
    <div style={{ marginTop: 12 }} className={clsx(className)}>
      <FormControl error={isError} fullWidth>
        <FormLabel fieldName={field?.name} label={label} />
        <RadioGroup
          name={field?.name}
          value={field?.value?.toString()}
          onChange={handleChange}
          // aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="female"
          // name="radio-buttons-group"
        >
          {options.map((item, index) => (
            <FormControlLabel key={index} value={item.value} label={item.label} control={<Radio size="small" />} />
          ))}
        </RadioGroup>
        {fieldTouch && fieldError && <FormHelperText>{fieldError}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default FieldRadioBox;
