import { Stack, Typography } from '@mui/material';
import { getUserSlice, registerStart } from '@redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import Validate from '@utils/validate';
import { Formik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';
import { FormRegister } from './FormRegister';

const RegisterPage: FC<any> = () => {
  const dispatch = useAppDispatch();
  const { registerEmail } = useAppSelector(getUserSlice);

  const initialValuesRegister = {
    username: '',
    password: '',
    rePassword: '',
    name: '',
    email: '',
  };

  const validateRegister = yup.object({
    username: yup
      .string()
      .required(Validate.require('username'))
      .min(5, Validate.during(5, 39))
      .max(39, Validate.during(5, 39))
      .matches(/^[a-zA-Z0-9_]*$/, Validate.username('Tên đăng nhập')),
    name: yup
      .string()
      .required(Validate.require('Tên hiển thị'))
      .min(5, Validate.during(5, 39))
      .max(39, Validate.during(5, 39)),
    email: yup.string().required(Validate.require('Email')).email(Validate.email()),
    password: yup.string().required(Validate.require('Mật khẩu')).min(8, Validate.min(8)),
    rePassword: yup
      .string()
      .required(Validate.require('Mật khẩu'))
      .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không trùng khớp'),
  });

  const onSubmitRegister = (values) => {
    delete values.rePassword;
    dispatch(registerStart(values));
  };

  return (
    <main>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Stack
          sx={{
            minHeight: '100vh',
            width: { xs: '100%', sm: '45%' },
            backgroundImage: `url('/images/background-login.png')`,
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ fontWeight: 700, fontSize: 70 }} variant="h1" align="center">
            STUDYBUD
          </Typography>
        </Stack>
        <Stack alignItems="center" sx={{ width: '55%' }} justifyContent="center">
          <div style={{ maxWidth: 450, padding: 12 }}>
            <Typography variant="body1" sx={{ fontWeight: 700, fontSize: 36, mb: 1 }} align="center">
              {registerEmail ? 'Xác nhận email' : 'Đăng ký'}
            </Typography>
            {!registerEmail && (
              <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                <b>Studybud</b> nền tảng tìm kiếm bạn học số 1 Việt Nam
              </Typography>
            )}
            <Formik
              onSubmit={onSubmitRegister}
              validationSchema={validateRegister}
              initialValues={initialValuesRegister}
            >
              <FormRegister />
            </Formik>
          </div>
        </Stack>
      </Stack>
    </main>
  );
};

export default RegisterPage;
