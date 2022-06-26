import { StyledBadge } from '@common/Avatar/StyleBadge';
import { Avatar, Box, Divider, Drawer, List, ListItem, Stack, Toolbar, Typography } from '@mui/material';

const drawerWidth = 240;

export const DrawerListFriends = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', mt: 1 }}>
        <Stack alignItems="center">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 130, height: 130 }} />
          <Typography
            sx={{ textAlign: 'center', mt: 1.2, color: '#000000', fontWeight: 600, fontSize: 24 }}
            variant="body2"
          >
            Le Huy Du
          </Typography>
        </Stack>
        <List>
          <ListItem>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
            <Typography sx={{ color: '#000000', fontWeight: 600, ml: 1 }} variant="body2">
              Le Huy Du
            </Typography>
          </ListItem>
          <ListItem>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
            <Typography sx={{ color: '#000000', fontWeight: 600, ml: 1 }} variant="body2">
              Le Huy Du
            </Typography>
          </ListItem>{' '}
          <ListItem>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
            <Typography sx={{ color: '#000000', fontWeight: 600, ml: 1 }} variant="body2">
              Le Huy Du
            </Typography>
          </ListItem>
          <ListItem>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
            <Typography sx={{ color: '#000000', fontWeight: 600, ml: 1 }} variant="body2">
              Le Huy Du
            </Typography>
          </ListItem>
          <ListItem>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
            <Typography sx={{ color: '#000000', fontWeight: 600, ml: 1 }} variant="body2">
              Le Huy Du
            </Typography>
          </ListItem>
          <ListItem>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
            <Typography sx={{ color: '#000000', fontWeight: 600, ml: 1 }} variant="body2">
              Le Huy Du
            </Typography>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
