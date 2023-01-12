/* eslint-disable @typescript-eslint/no-empty-function */
import { CacheProvider, EmotionCache } from '@emotion/react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import NoSsr from '@mui/material/NoSsr';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { wrapper } from '@redux/store';
import { compose } from '@reduxjs/toolkit';
import axios from '@request/axios';
import '@styles/globals.css';
import { createEmotionCache, getThemeConfig } from '@styles/theme';
import Constant from '@utils/constant';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, FC, useEffect, useMemo, useState } from 'react';
//@ts-ignore
import { useStore } from 'react-redux';
import { Store } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { UserSlice } from '@type/user';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const onBeforeLift = (store: Store) => () => {
  const userSlice: UserSlice = store.getState().userSlice;
  axios.setTokenRequest(userSlice.token as any);
};

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const ThemeContext = createContext(Constant.theme.LIGHT);

const MyApp: FC<MyAppProps> = (props: MyAppProps) => {
  const isClient = typeof window !== 'undefined';

  const store = useStore();

  const themeMode: any = isClient
    ? localStorage.getItem(Constant.theme.KEY) || Constant.theme.LIGHT
    : Constant.theme.LIGHT;

  // theme logic
  const [mode, setMode] = useState<PaletteMode>(themeMode);

  useEffect(() => {
    mode && localStorage.setItem(Constant.theme.KEY, mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        // store.dispatch(toggleThemeMode());

        setMode((prevMode) => (prevMode === Constant.theme.LIGHT ? Constant.theme.DARK : Constant.theme.LIGHT));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getThemeConfig(mode)), [mode]);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles?.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);

  const PageComponent = isClient ? (
    <PersistGate persistor={(store as any).__persistor} onBeforeLift={onBeforeLift(store)} loading={null}>
      <Component {...pageProps} />
    </PersistGate>
  ) : (
    <Component {...pageProps} />
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Du Talk</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext.Provider value={mode}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {PageComponent}
            <NoSsr>
              <ToastContainer />
            </NoSsr>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
};

export default compose(wrapper.withRedux)(MyApp);
