import { Box, Hidden, Stack, Typography } from '@mui/material';
import Validate from '@utils/validate';
import { Formik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';
import { FormLogin } from './FormLogin';
import { styleLoginComponent as styles } from './styles/index.style';
// import { FormRegister } from './FormRegister';
// import { getUserSlice, registerStart } from '@redux/slices/userSlice';
// import { useAppDispatch } from '@redux/store';

const LoginComponent: FC<any> = () => {
  //   const dispatch = useAppDispatch();
  //   const { registerEmail } = useAppSelector(getUserSlice);

  const initialValuesRegister = {
    username: '',
    password: '',
    rePassword: '',
    fullName: '',
    email: '',
  };

  const validateRegister = yup.object({
    username: yup
      .string()
      .required(Validate.require('Nickname'))
      .min(5, Validate.during(5, 39))
      .max(39, Validate.during(5, 39))
      .matches(/^[a-zA-Z0-9_]*$/, Validate.username('Nickname')),
    fullName: yup
      .string()
      .required(Validate.require('Họ và tên'))
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
    // dispatch(registerStart(values));
  };

  return (
    <main>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Stack sx={styles.mainContentLeft} alignItems="center" justifyContent="center">
          <Typography sx={styles.titleApp} variant="h1" align="center">
            DuTalk
          </Typography>
          <Typography sx={styles.description_1} variant="h1" align="center">
            Nền tảng trò chuyện tâm sự khiến bạn khóc thét
          </Typography>
          <Typography sx={styles.description_2} variant="h1" align="center">
            Hãy nói với tôi theo cách của bạn
          </Typography>
        </Stack>
        <Hidden mdDown>
          <Stack alignItems="center" sx={{ width: '45%' }} justifyContent="center"></Stack>
        </Hidden>
        <Stack alignItems="center" sx={styles.mainContentRight} justifyContent="center">
          <Box sx={styles.boxContentRight}>
            <Typography variant="body1" sx={styles.titleContentRight} align="center">
              Đăng nhập
            </Typography>
            <Formik
              onSubmit={onSubmitRegister}
              validationSchema={validateRegister}
              initialValues={initialValuesRegister}
            >
              <FormLogin />
            </Formik>
          </Box>
        </Stack>
      </Stack>
    </main>
  );
};

export default LoginComponent;
