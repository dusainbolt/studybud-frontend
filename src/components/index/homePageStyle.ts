import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const homePageStyle = makeStyles((theme: Theme) => ({
  main: {},
  spacingContent: {},
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
  // title: {
  //   fontSize: 58,
  // },

  // // spacingContentSmall: {
  // //   marginTop: theme.spacing(2),
  // // },
  // btnMetamask: {
  //   ...defaultStyle.btnStyle('#dc6a00', '#dc6a001c'),
  //   '& .icon-metamask': {
  //     width: 32,
  //   },
  // },
  // btnWalletConnect: {
  //   borderColor: '#5dabfc',
  //   color: '#5dabfc',
  // },

  // btnGroupToggle: {
  //   '& button': {
  //     marginRight: theme.spacing(1),
  //     border: 'none !important',
  //     borderRadius: `${theme.spacing(2)} !important`,
  //   },
  // },
}));
