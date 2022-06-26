import { Layout } from '@common/Layout';
import { DrawerListFriends } from '@common/Layout/DrawerListFriends';
import { FC } from 'react';

const HomePageComponent: FC<any> = () => {
  return <Layout drawerLeft={<DrawerListFriends />}>Home Page</Layout>;
};

export default HomePageComponent;
