import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const headerStyle = makeStyles((theme: Theme) => ({
  header: {
    position: 'sticky',
    left: 0,
    top: 0,
    zIndex: 10,
    willChange: 'transform',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e8ebed',
    background: '#ffffff',
    height: theme.spacing(9),
  },
  headerContainer: {
    padding: `0 ${theme.spacing(6)}`,
    maxWidth: 1920,
    width: '100%',
    height: '100%',
  },
  logo: {
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 32,
    color: '#44178E',
  },
  headerControlWrap: {
    '& .MuiSvgIcon-root, .MuiBadge-root, .MuiAvatar-root': {
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.7,
      },
    },
    '& .MuiBadge-colorPrimary': {
      background: '#FF0000',
      fontWeight: 500,
      fontFamily: 'Montserrat',
    },
  },
}));
