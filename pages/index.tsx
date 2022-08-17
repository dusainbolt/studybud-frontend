import HomePage from '@components/index/HomePage';
import LoginPage from '@components/index/LoginPage';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppSelector, wrapper } from '@redux/store';
import { SSGContext } from '@type/context';
import Head from 'next/head';
import { FC, Fragment } from 'react';

const Home: FC<any> = () => {
  useRedirectAuth();
  const { token, user } = useAppSelector(getUserSlice);
  console.log('user', user)
  return (
    <Fragment>
      <Head>
        <title>StudyBud</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {token && user?._id ? <HomePage /> : <LoginPage />}
    </Fragment>
  );
};

export const getStaticProps = wrapper.getStaticProps((): SSGContext | any => async () => {
  // await Helper.delay(5000);
});

export default Home;
