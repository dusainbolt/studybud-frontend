import { Layout } from '@common/Layout';
import { DrawerListFriends } from '@common/Layout/DrawerListFriends';
import { useHomePage } from '@hooks/useHomePage';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import { FC } from 'react';
import { FormSearchStudy } from './FormSearchStudy';
import { SearchResult } from './SearchResult';

const HomePageComponent: FC<any> = () => {
  const { onSubmitRequestStudybud } = useHomePage();
  const initialValuesRequestStudy = {};

  return (
    <Layout drawerLeft={<DrawerListFriends />}>
      <Box sx={{ minHeight: 200, background: '#5C6BC0', p: 6, pb: 2 }}>
        <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: 28 }}>
          Bắt đầu hành trình của bạn tại đây!
        </Typography>
        <Formik onSubmit={onSubmitRequestStudybud} initialValues={initialValuesRequestStudy}>
          <FormSearchStudy />
        </Formik>
      </Box>
      <SearchResult />
    </Layout>
  );
};

export default HomePageComponent;
