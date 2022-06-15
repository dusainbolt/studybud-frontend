import { Stack, Typography } from '@mui/material';
import { Formik } from 'formik';
import { FC } from 'react';
import { FormLogin } from './FormLogin';
import * as yup from 'yup';
import { useAppDispatch } from '@redux/store';
import Validate from '@utils/validate';
import { LoginUserInput } from '@type/user';
import { loginStart } from '@redux/slices/userSlice';

const LoginPage: FC<any> = () => {
  const dispatch = useAppDispatch();
  // const { loadingLogin } = useAppSelector(getUserSlice);

  const initialValuesLogin: LoginUserInput = {
    credential: '',
    password: '',
  };

  const validateLogin = yup.object({
    credential: yup.string().required(Validate.require('Email/ Tên đăng nhập')),
    password: yup.string().required(Validate.require('Mật khẩu')),
  });

  const onSubmitLogin = (values) => {
    // delete values.rePassword;
    dispatch(loginStart(values));
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
          <div style={{ maxWidth: 450 }}>
            <Typography variant="body1" sx={{ fontWeight: 700, fontSize: 36, mb: 1 }} align="center">
              Đăng nhập
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              <b>Studybud</b> nền tảng tìm kiếm bạn học số 1 Việt Nam
            </Typography>
            <Formik onSubmit={onSubmitLogin} validationSchema={validateLogin} initialValues={initialValuesLogin}>
              <FormLogin />
            </Formik>
          </div>
        </Stack>
      </Stack>
    </main>
  );
};

export default LoginPage;
