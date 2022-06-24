import { Button } from '@common/Button';
import FieldText from '@common/Form/FieldInput';
import { Alert, Stack, Typography } from '@mui/material';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppSelector } from '@redux/store';
import { defaultStyle } from '@styles/theme';
import { Field, useFormikContext } from 'formik';

export const FormRegister = () => {
  const { handleSubmit } = useFormikContext();
  const { loadingLogin, registerEmail } = useAppSelector(getUserSlice);
  return (
    <Stack>
      {registerEmail ? (
        <Alert severity="success">
          Một email đã được gửi đến hòm thư của bạn. Vui lòng kiểm tra email <b>{registerEmail}</b> để hoàn tất đăng ký
        </Alert>
      ) : (
        <>
          <Field name="name" fieldProps={{ placeholder: 'Nhập họ và tên' }} label="Họ và tên" component={FieldText} />
          <Field
            name="username"
            fieldProps={{ placeholder: 'Nhập tên đăng nhập' }}
            label="Tên đăng nhập"
            component={FieldText}
          />
          <Field
            fieldProps={{ type: 'email', placeholder: 'Nhập email' }}
            name="email"
            label="Email"
            component={FieldText}
          />
          <Field
            name="password"
            fieldProps={{ placeholder: 'Nhập Mật khẩu', type: 'password' }}
            label="Mật khẩu"
            component={FieldText}
          />

          <Field
            name="rePassword"
            fieldProps={{ placeholder: 'Xác nhận mật khẩu', type: 'password' }}
            label="Nhập lại mật khẩu"
            component={FieldText}
            type="password"
          />
          <Typography sx={{ textAlign: 'right', display: 'block', mt: 1 }}>
            Nếu đã có tài khoản?{' '}
            <a style={{ textDecoration: 'underline' }} href="/">
              Đăng nhập ngay
            </a>
          </Typography>
          <Button
            loading={loadingLogin}
            onClick={handleSubmit as any}
            sx={{ width: '100%', mt: 5, mb: 3, ...defaultStyle.btnStyle('#4D4D4D') }}
            variant="contained"
          >
            ĐĂNG KÝ
          </Button>
          <div style={{ marginBottom: 30 }}>
            Bằng cách đăng ký Stduybud, bạn đồng ý với{' '}
            <a style={{ textDecoration: 'underline' }} href="/terms">
              Điều khoản dịch vụ
            </a>{' '}
            và{' '}
            <a style={{ textDecoration: 'underline' }} href="policy">
              Chính sách quyền riêng tư
            </a>{' '}
            của Stduybud
          </div>
        </>
      )}
    </Stack>
  );
};
