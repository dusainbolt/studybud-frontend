import { Layout } from '@common/Layout';
import { Container, Stack, Avatar, Typography } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';
import { homePageStyle } from './homePageStyle';
import { useAppSelector } from '@redux/store';
import { getUserSlice } from '@redux/slices/userSlice';

const HomePage: FC<any> = () => {
  const styles = homePageStyle();
  const { user } = useAppSelector(getUserSlice);

  // const dispatch = useAppDispatch();

  // const initValueFormEditUser: UpdateUserInput = { username: '' };

  // const validateFormEditUser = yup.object({
  //   username: yup.string().required(Validate.require('username')),
  //   // .min(4, Validate.during(4, 12))
  //   // .max(12, Validate.during(4, 12)),
  // });

  // useEffect(() => {
  //   dispatch(getListUserStart());
  // }, []);

  // const logOut = () => {
  //   dispatch(logout());
  // };

  // const onSubmitEditUser = async (values) => {
  //   await updateUserMutation(values);
  // };

  return (
    <Layout>
      <main className={clsx(styles.main, styles.spacingContent)}>
        <Container className={styles.container}>
          <div className={styles.cover}></div>
          <Stack className={styles.contentWrap} spacing={4} direction="row">
            <div className={styles.avatarWrap}>
              <Avatar alt={user?.name} src={user?.avatar || ''} />
              <Typography className={styles.username} variant="h1">
                Nguyễn Khánh Thùy Dương
              </Typography>
            </div>
            <Stack spacing={0.7}>
              <div>
                Xin chào. Mình là sinh viên năm nhất ở Fulbright University Vietnam. Hiện tại mình đang có hứng thú với
                mảng Công nghệ - Giáo dục và muốn được giaoi lưu làm quen với các bạn/anh/chị trong lĩnh vực này. Dương
                hiện đang học Python và sắp thi IELTS aim 8.0. Nhắn tin với mình để trao đổi thêm nhé. Mình có thể dành
                ra khoảng 1 giờ/tuần để học trực tuyến hoặc gặp bạn trực tiếp ở gần Quận 7, TP. HCM. Nice to meet you!
              </div>
              <div>
                <b>Hoạt động lần cuối:</b> 23/02/2022
              </div>
              <div>
                <b>37 ban chung</b>
              </div>
            </Stack>
          </Stack>
          {/* <CardUser user={user} /> */}
          {/* <Button onClick={logOut} variant="contained">
            Dang xuat
          </Button>
          <Formik
            onSubmit={onSubmitEditUser}
            validationSchema={validateFormEditUser}
            initialValues={initValueFormEditUser}
          >
            <FormEditUser />
          </Formik>
          <Typography variant="h4" color="text.secondary">
            Danh sach user
          </Typography>
          {list?.map((item, index) => (
            <CardUser key={index} user={item} />
          ))}
          {list?.map((item, index) => (
            <CardUser key={index} user={item} />
          ))}
          {list?.map((item, index) => (
            <CardUser key={index} user={item} />
          ))}
          {list?.map((item, index) => (
            <CardUser key={index} user={item} />
          ))} */}
        </Container>
      </main>
    </Layout>
  );
};

export default HomePage;
