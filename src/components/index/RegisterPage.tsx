import { Stack, Typography } from '@mui/material';
import { Formik } from 'formik';
import { FC } from 'react';
import { FormLogin } from './FormLogin';
import { FormRegister } from './FormRegister';

// const SocialButton = SocialLogin(Button);

const RegisterPage: FC<any> = () => {
  // const dispatch = useAppDispatch();
  // const { loadingLogin } = useAppSelector(getUserSlice);

  // const handleSocialLogin = (userSocial) => {
  //   console.log('userSocial: ', userSocial);
  //   const propNameToken = Constant.social.TOKEN[userSocial.provider] || '';
  //   dispatch(
  //     verifyOAuth2Start({
  //       access_token: userSocial?.token[propNameToken] as string,
  //       type: Constant.social.TYPE[userSocial.provider],
  //     })
  //   );
  // };

  // const handleSocialLoginFailure = (err) => {
  //   toast.error(err?.toString());
  // };

  return (
    <main>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Stack
          sx={{
            height: '100vh',
            width: { xs: '100%', sm: '45%' },
            backgroundImage: `url('/images/background-login.png')`,
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ fontWeight: 700, fontSize: 70 }} variant="h1" align="center">
            LOGO
          </Typography>
        </Stack>
        <Stack alignItems="center" sx={{ width: '55%' }} justifyContent="center">
          <div style={{ maxWidth: 450 }}>
            <Typography variant="body1" sx={{ fontWeight: 700, fontSize: 36, mb: 1 }} align="center">
              Đăng ký
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              <b>Studybud</b> nền tảng tìm kiếm bạn học số 1 Việt Nam
            </Typography>
            <Formik onSubmit={(values) => console.log('1`3`1')} validationSchema={{}} initialValues={{}}>
              <FormRegister />
            </Formik>
          </div>
        </Stack>
      </Stack>
    </main>
  );
};

export default RegisterPage;
