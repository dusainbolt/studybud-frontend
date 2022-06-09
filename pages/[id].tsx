import ProfilePageComponent from '@components/Profile/ProfilePage';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppSelector, wrapper } from '@redux/store';
import { SSRContext } from '@type/context';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { FC, Fragment } from 'react';
import { END } from 'redux-saga';

const ProfilePage: FC<any> = ({ id }) => {
  useRedirectAuth();
  const { token, user } = useAppSelector(getUserSlice);
  const isMyProfile = id === user?._id || id === user?.username;
  return (
    <Fragment>
      <Head>
        <title>Du App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {token && user?._id ? <ProfilePageComponent isMyProfile={isMyProfile} /> : ''}
    </Fragment>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store): SSRContext | any =>
    async (context: GetServerSidePropsContext) => {
      // await Helper.delay(1500);
      const id: any = context.query.id;
      console.log('id', id);
      // request here

      // dispatch data store here here

      // store.dispatch(getSuccess(data));
      // end the saga
      store.dispatch(END);
      await store.sagaTask.toPromise();
      return { props: { id } };
    }
);

export default ProfilePage;
