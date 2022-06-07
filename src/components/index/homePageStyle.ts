import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { defaultStyle } from '@styles/theme';

export const homePageStyle = makeStyles((theme: Theme) => ({
  main: {},
  spacingContent: {
    marginTop: theme.spacing(4),
  },
  container: {
    maxWidth: 1920,
    padding: `0 ${theme.spacing(6)}`,
  },
  cover: {
    height: 155,
    background: '#C4C4C4',
  },
  contentWrap: {
    background: '#ffffff',
    padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
    position: 'relative',
  },
  avatarWrap: {
    maxWidth: 312,
    width: '100%',
    '& .MuiAvatar-root': {
      width: 139,
      height: 139,
      position: 'absolute',
      top: -72,
    },
  },
  username: {
    fontSize: 30,
    fontWeight: 700,
    paddingTop: 60,
  },
  btnControlProfile: {
    ...defaultStyle.btnStyle('#000000'),
  },
  profileBody: {},
  profileContentLeft: {
    maxWidth: 343,
    width: '100%',
  },
  profileContentRight: {
    width: '100%',
  },
  profileContentBox: {
    background: '#ffffff',
    padding: 32,
    borderRadius: 18,
    '& h2': {
      margin: 0,
    },
  },
  aboutMeQABox: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 18,
    padding: 8,
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
}));
