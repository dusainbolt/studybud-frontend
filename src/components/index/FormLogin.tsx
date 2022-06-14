import { Button } from '@common/Button';
import FieldText from '@common/Form/FieldInput';
import { Divider, Grid, NoSsr, Stack } from '@mui/material';
import { defaultStyle } from '@styles/theme';
import Constant from '@utils/constant';
import { Field } from 'formik';
import SocialLogin, { Provider } from 'react-social-login';

const SocialButton = SocialLogin(Button);

export const FormLogin = () => {
  // const { handleSubmit } = useFormikContext();
  return (
    <Stack>
      <Field
        name="username"
        placeholder="Nhập email / tên đăng nhập"
        label="Email/ Tên đăng nhập"
        component={FieldText}
        required
      />
      <Field
        name="username"
        placeholder="Nhập Mật khẩu"
        label="Mật khẩu"
        component={FieldText}
        type="password"
        required
      />
      <Stack direction="row" justifyContent="end" spacing={1}>
        <a style={{ textAlign: 'right', display: 'block', marginTop: 4, textDecoration: 'underline' }} href="/register">
          Đăng ký
        </a>
        <a style={{ textAlign: 'right', display: 'block', marginTop: 4 }} href="/register">
          /
        </a>
        <a
          style={{ textAlign: 'right', display: 'block', marginTop: 4, textDecoration: 'underline' }}
          href="/forgot-password"
        >
          Quên mật khẩu
        </a>
      </Stack>
      <Button sx={{ width: '100%', mt: 5, mb: 3, ...defaultStyle.btnStyle('#4D4D4D') }} variant="contained">
        ĐĂNG NHẬP
      </Button>
      <Divider sx={{ lineHeight: 0 }}>Hoặc đăng nhập bằng</Divider>

      <NoSsr>
        <Grid sx={{ mt: 3 }} spacing={0.5} container>
          <Grid xs={6} item>
            <SocialButton
              provider={Constant.social.PROVIDE_FACEBOOK as Provider}
              appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID as any}
              sx={{ width: '100%', background: '#efefef' }}
              // onLoginSuccess={handleSocialLogin}
              // onLoginFailure={handleSocialLoginFailure}
              // loading={loadingLogin}
            >
              <img style={{ verticalAlign: 'middle' }} src="/svg/facebook-icon.svg" alt="facebook-icon" />
            </SocialButton>
          </Grid>
          <Grid xs={6} item>
            <SocialButton
              provider={Constant.social.PROVIDE_GOOGLE as Provider}
              appId={process.env.NEXT_PUBLIC_GOOGLE_APP_ID as any}
              sx={{ width: '100%', background: '#efefef' }}
              // onLoginSuccess={handleSocialLogin}
              // onLoginFailure={handleSocialLoginFailure}
              // loading={loadingLogin}
            >
              <img style={{ verticalAlign: 'middle' }} src="/svg/google-icon.svg" alt="google-icon" />
            </SocialButton>
          </Grid>
        </Grid>
      </NoSsr>
    </Stack>
  );
};
