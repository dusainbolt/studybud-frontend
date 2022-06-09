import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { defaultStyle } from '@styles/theme';

export const profilePageStyle = makeStyles((theme: Theme) => ({
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
    position: 'relative',
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
  btnEditAvatar: {
    ...defaultStyle.btnStyle('#000000'),
    position: 'absolute',
    top: '28px',
    left: '135px',
    color: '#ffffff',
  },
  username: {
    fontSize: 30,
    fontWeight: 700,
    paddingTop: 60,
  },
  btnControlProfile: {
    ...defaultStyle.btnStyle('#000000'),
    height: 48,
    '&.MuiButton-sizeSmall': {
      height: 36,
      padding: theme.spacing(1.5),
      fontSize: 16,
    },
  },
  btnEditCover: {
    position: 'absolute',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
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
  cardSubject: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  cardSubjectHeader: {
    background: '#D0D0D0',
    padding: `22px 44px`,
    '& h3': {
      margin: 0,
    },
  },
  cardSubjectBottom: {
    background: '#ffffff',
    padding: `22px 44px`,
  },
  breadCrumbsTarget: {
    '& .MuiBreadcrumbs-separator': {
      marginRight: 6,
      marginLeft: 6,
    },
    '& .MuiBreadcrumbs-li .MuiTypography-root': {
      color: '#000000',
      fontSize: 18,
      fontWeight: 600,
    },
  },
  buttonIcon: {
    // ...defaultStyle.btnStyle('#000000'),
    // color: '#ffffff',
    marginLeft: 4,
    width: 36,
    height: 36,
  },
}));
