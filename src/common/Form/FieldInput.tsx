/* eslint-disable jsx-a11y/label-has-associated-control */
import { TextField } from '@mui/material';
import { Restrict } from '@type/field';
import Helper from '@utils/helper';
import clsx from 'clsx';
import { FieldInputProps, FieldMetaProps, useFormikContext } from 'formik';
import { FC, FormEvent } from 'react';

export interface FieldTextType {
  label?: string;
  prefix?: any;
  suffix?: any;
  className?: string;
  restric: Restrict;
  required?: boolean;
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
}

const FieldText: FC<FieldTextType> = ({ label, className, field, required, restric, ...props }) => {
  const { touched, errors, setFieldValue } = useFormikContext();
  const fieldTouch: boolean = Helper.objValue(touched, field?.name);
  const fieldError: string = Helper.objValue(errors, field?.name);
  const isError: boolean = fieldTouch && Boolean(fieldError);

  const onChangeInput = ({ currentTarget: { value } }: FormEvent<HTMLInputElement>) => {
    const includeSpecialChar = value.match(/[%<>\\$'"]/);
    if (Restrict.DISALLOW_SPECIAL_CHAR === restric && includeSpecialChar?.input) {
      return;
    }
    setFieldValue(field?.name as string, value);
  };

  return (
    <div className={clsx(className)}>
      {label && <label>{label}</label>}
      <TextField
        fullWidth
        id={field?.name}
        name={field?.name}
        // label={label || Constant.form.UNKNOWN_LABEL}
        value={field?.value}
        required={required}
        onChange={onChangeInput as any}
        error={isError}
        size="small"
        helperText={fieldTouch && fieldError}
        variant="outlined"
        {...props}
      />
    </div>
  );
};

export default FieldText;
