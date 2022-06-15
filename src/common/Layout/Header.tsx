import { AppPopover } from '@common/Popover';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Badge, MenuItem, MenuList, Stack } from '@mui/material';
import { getUserSlice, logout } from '@redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { headerStyle } from './headerStyle';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
  const styles = headerStyle();
  const user = useAppSelector(getUserSlice).user;
  const router = useRouter();

  const dispatch = useAppDispatch();
  const onClickLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
    <header className={styles.header}>
      <Stack className={styles.headerContainer} direction="row" justifyContent="space-between" alignItems="center">
        <a href="/" className={styles.logo}>
          Studybud
        </a>
        <Stack className={styles.headerControlWrap} direction="row" alignItems="center" spacing={4}>
          <Badge color="primary" badgeContent={100} max={99}>
            <PeopleAltIcon />
          </Badge>
          <Badge color="primary" badgeContent={100} max={99}>
            <MessageIcon />
          </Badge>
          <Badge color="primary" badgeContent={100} max={99}>
            <NotificationsIcon />
          </Badge>
          <AppPopover
            content={
              <MenuList>
                <Link href={`/${user?.username || user?._id}`}>
                  <MenuItem sx={{ p: 1 }}>
                    <PersonIcon />
                    Trang có nhân
                  </MenuItem>
                </Link>
                <MenuItem sx={{ p: 1 }} onClick={onClickLogout}>
                  <PersonIcon />
                  Đăng xuất
                </MenuItem>
              </MenuList>
            }
            name="profile"
          >
            <Avatar alt={user?.name} src={user?.avatar || ''} />
          </AppPopover>
        </Stack>
      </Stack>
    </header>
  );
};
