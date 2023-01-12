import HomePage from '@components/index/HomePage';
import RegisterComponent from '@components/Register';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppSelector } from '@redux/store';
import Head from 'next/head';
import { FC, Fragment } from 'react';

const RegisterPage: FC<any> = () => {
  useRedirectAuth();
  const { token } = useAppSelector(getUserSlice);
  return (
    <Fragment>
      <Head>
        <title>DuTalk | Đăng ký</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {token && false ? <HomePage /> : <RegisterComponent />}
    </Fragment>
  );
};

export default RegisterPage;
