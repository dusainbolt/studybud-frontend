import { Layout } from '@common/Layout';
import { FC } from 'react';

const HomePageComponent: FC<any> = () => {
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
      <main>Home Page</main>
    </Layout>
  );
};

export default HomePageComponent;
