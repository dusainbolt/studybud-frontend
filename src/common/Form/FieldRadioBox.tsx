/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { OptionSelect } from '@type/field';
import Helper from '@utils/helper';
import clsx from 'clsx';
import { FieldInputProps, FieldMetaProps, useFormikContext } from 'formik';
import { FC } from 'react';

export interface FieldRadioBoxType {
  label?: string;
  // prefix?: any;
  // suffix?: any;
  // placeholder?: string;
  className?: string;
  options: OptionSelect[];
  // restric: Restrict;
  // type?: string;
  // required?: boolean;
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
}

const FieldRadioBox: FC<FieldRadioBoxType> = ({ label, options, className, field }) => {
  const { touched, errors, setFieldValue } = useFormikContext();
  const fieldTouch: boolean = Helper.objValue(touched, field?.name);
  const fieldError: string = Helper.objValue(errors, field?.name);
  const isError: boolean = fieldTouch && Boolean(fieldError);

  // const styles = FieldRadioBoxStyle();

  const handleChange = (event) => {
    setFieldValue(field?.name as string, parseInt(event.target.value, 10));
  };

  // label = `${label}${required && ' *'}`;

  return (
    <div style={{ marginTop: 12 }} className={clsx(className)}>
      <FormControl error={isError} fullWidth>
        {/* <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel> */}
        {label && <label style={{ fontWeight: 600 }}>{label}</label>}
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
