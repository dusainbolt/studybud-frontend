import { Button } from '@common/Button';
import FieldText from '@common/Form/FieldInput';
import { Divider, Grid, NoSsr, Stack, Typography } from '@mui/material';
import { defaultStyle } from '@styles/theme';
import Constant from '@utils/constant';
import { Field } from 'formik';
import SocialLogin, { Provider } from 'react-social-login';

const SocialButton = SocialLogin(Button);

export const FormRegister = () => {
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
        placeholder="Nhập mật khẩu"
        label="Mật khẩu"
        component={FieldText}
        type="password"
        required
      />
      <Field
        name="username"
        placeholder="Xác nhận mật khẩu"
        label="Nhập lại mật khẩu"
        component={FieldText}
        type="password"
        required
      />
      <Typography sx={{ textAlign: 'right', display: 'block', mt: 1 }}>
        Nếu đã có tài khoản?{' '}
        <a style={{ textDecoration: 'underline' }} href="/">
          Đăng nhập ngay
        </a>
      </Typography>

      <Button sx={{ width: '100%', mt: 5, mb: 3, ...defaultStyle.btnStyle('#4D4D4D') }} variant="contained">
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
      <Divider sx={{ lineHeight: 0 }}>Hoặc đăng ký bằng</Divider>
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
