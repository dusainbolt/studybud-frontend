import { Layout } from '@common/Layout';
import { DrawerListFriends } from '@common/Layout/DrawerListFriends';
import { CardUserOverview } from '@common/Card/CardUserOverview';
import { SkeletonHomepageCard } from '@common/Skeleton/SkeletonHomepageCard';
import { useHomePage } from '@hooks/useHomePage';
import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import { FC } from 'react';
import { FormSearchStudy } from './FormSearchStudy';

const HomePageComponent: FC<any> = () => {
  const { 
    onSubmitRequestStudybud,
    loadingSearchForm,
    searchStudybudResult
  } = useHomePage();
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

      <Box>
        {loadingSearchForm && (
          <Grid container spacing={2} sx={{ p: 6 }} className="CardContainer">
            <SkeletonHomepageCard/>
            <SkeletonHomepageCard/>
            <SkeletonHomepageCard/>
            <SkeletonHomepageCard/>
            <SkeletonHomepageCard/>
            <SkeletonHomepageCard/>
          </Grid>
        )}

        <Grid container spacing={2} sx={{ p: 6 }} className="CardContainer">
          {searchStudybudResult.map((item, index) => {
            return (
              <Grid item key={index} xs={4}>
                <CardUserOverview searchStudybudOutput={item}  />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePageComponent;
