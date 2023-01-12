import { Button } from '@common/Button';
import FieldText from '@common/Form/FieldInput';
import { Stack, Typography } from '@mui/material';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppSelector } from '@redux/store';
import { defaultStyle } from '@styles/theme';
import { Field, useFormikContext } from 'formik';

export const FormLogin = () => {
  const { handleSubmit } = useFormikContext();
  const { loadingLogin } = useAppSelector(getUserSlice);
  return (
    <Stack>
      <>
        {/* <Field name="fullName" fieldProps={{ placeholder: 'Nhập họ và tên' }} label="Họ và tên" component={FieldText} /> */}
        {/* <Field
          name="username"
          fieldProps={{ placeholder: 'Nhập tên nickname' }}
          label="Nickname"
          component={FieldText}
        /> */}
        <Field
          fieldProps={{ type: 'email', placeholder: 'Nhập email hoặc nickname' }}
          name="email"
          label="Email hoặc nickname"
          component={FieldText}
        />
        <Field
          name="password"
          fieldProps={{ placeholder: 'Nhập Mật khẩu', type: 'password' }}
          label="Mật khẩu"
          component={FieldText}
        />

        {/* <Field
          name="rePassword"
          fieldProps={{ placeholder: 'Xác nhận mật khẩu', type: 'password' }}
          label="Nhập lại mật khẩu"
          component={FieldText}
          type="password"
        /> */}
        <Typography sx={{ textAlign: 'right', display: 'block', mt: 1 }}>
          <a style={{ textDecoration: 'underline' }} href="/dang-ky">
            Đăng ký tài khoản
          </a>
        </Typography>
        <Button
          loading={loadingLogin}
          onClick={handleSubmit as any}
          sx={{ width: '100%', mt: 3, mb: 1, ...defaultStyle.btnStyle('#fe6347') }}
          variant="contained"
        >
          ĐĂNG NHẬP
        </Button>
      </>
    </Stack>
  );
};
