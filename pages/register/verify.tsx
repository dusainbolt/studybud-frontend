import { Button } from '@common/Button';
import { CircularProgressCustom } from '@common/Progress/CircularProgress';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import { Stack, Typography } from '@mui/material';
import { getUserSlice, verifyTokenStart } from '@redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, Fragment, useEffect } from 'react';

const Register: FC<any> = () => {
  useRedirectAuth();
  const { loadingLogin } = useAppSelector(getUserSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const verifyToken = router.query?.q;

  useEffect(() => {
    if (verifyToken) {
      dispatch(verifyTokenStart(verifyToken as string));
    }
  }, [verifyToken]);

  return (
    <Fragment>
      <Head>
        <title>Du App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <main>
        <Stack sx={{ height: '80vh', width: '100vw' }} justifyContent="center" alignItems="center">
          {loadingLogin ? (
            <>
              <CircularProgressCustom size={80} />
              <Typography paddingTop={3} variant="body1">
                Đang tiến hành xác minh, vui lòng đợi trong vài giây
              </Typography>
            </>
          ) : (
            <Button href="/">Đăng nhập</Button>
          )}
        </Stack>
      </main>
    </Fragment>
  );
};

export default Register;
