import { Button } from '@common/Button';
import FieldText from '@common/Form/FieldInput';
import { Box, Link, Stack, Typography } from '@mui/material';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppSelector } from '@redux/store';
import { Field, useFormikContext } from 'formik';
import { styleFormRegisterComponent as styles } from './styles/FormRegister.style';

export const FormRegister = () => {
  const { handleSubmit } = useFormikContext();
  const { loadingLogin } = useAppSelector(getUserSlice);
  return (
    <Stack>
      <>
        <Field name="fullName" fieldProps={{ placeholder: 'Nhập họ và tên' }} label="Họ và tên" component={FieldText} />
        <Field
          name="username"
          fieldProps={{ placeholder: 'Nhập tên nickname' }}
          label="Nickname"
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
        <Typography sx={styles.buttonLoginNow}>
          <a style={{ textDecoration: 'underline' }} href="/dang-nhap">
            Đăng nhập ngay
          </a>
        </Typography>
        <Button loading={loadingLogin} onClick={handleSubmit as any} sx={styles.buttonRegister} variant="contained">
          ĐĂNG KÝ
        </Button>
        <Box sx={{ mt: 1 }}>
          Bằng cách đăng ký DuTalk, bạn đồng ý với{' '}
          <Link sx={{ textDecoration: 'underline' }} href="/dieu-khoan">
            Điều khoản dịch vụ
          </Link>{' '}
          và{' '}
          <Link sx={{ textDecoration: 'underline' }} href="/chinh-sach">
            Chính sách quyền riêng tư
          </Link>{' '}
          của DuTalk.
        </Box>
      </>
    </Stack>
  );
};
