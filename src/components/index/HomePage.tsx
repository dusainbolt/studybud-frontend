import DrawerAppBar from '@common/Layout/AppBar';
import LoginComponent from '@components/Login';
import { Container } from '@mui/material';
import { FC, Fragment } from 'react';
// import * as yup from 'yup';
// import Validate from '@utils/validate';

const HomePage: FC<any> = () => {
  // const { user, list } = useAppSelector(getUserSlice);

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

  // const onSubmitEditUser = async () => {
  //   // await updateUserMutation(values);
  // };

  return (
    <Fragment>
      <DrawerAppBar />
      <main>
        <Container maxWidth="lg">
          {/* <CardUser user={user} />
        <Button onClick={logOut} variant="contained">
          Dang xuat
        </Button>
        <Formik
          onSubmit={onSubmitEditUser}
          // validationSchema={validateFormEditUser}
          initialValues={{}}
        >
          <FormEditUser />
        </Formik>
        <Typography variant="h4" color="text.secondary">
          Danh sach user
        </Typography>
        {list?.map((item, index) => (
          <CardUser key={index} user={item} />
        ))} */}
          HOME PAGE
          <LoginComponent />
          <LoginComponent />
        </Container>
      </main>
    </Fragment>
  );
};

export default HomePage;
