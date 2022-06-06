import MessageIcon from '@mui/icons-material/Message';
import { Avatar, Badge, Stack } from '@mui/material';
import { headerStyle } from './headerStyle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useAppSelector } from '@redux/store';
import { getUserSlice } from '@redux/slices/userSlice';

export const Header = () => {
  const styles = headerStyle();
  const user = useAppSelector(getUserSlice).user;

  return (
    <header className={styles.header}>
      <Stack className={styles.headerContainer} direction="row" justifyContent="space-between" alignItems="center">
        <div className={styles.logo}>Studybud</div>
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
          <Avatar alt={user?.name} src={user?.avatar || ''} />
        </Stack>
      </Stack>
    </header>
  );
};
