import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  drawerLeft: ReactNode;
  // breadcrumbs?: BreadcrumbsType[];
}

export const Layout: FC<LayoutProps> = ({ children, drawerLeft }) => {
  return (
    <Box sx={{ display: 'flex', background: '#D1D2E4' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          borderBottom: 'solid 1px #E7EBF0',
          background: 'white',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: (theme) => theme.spacing(9),
        }}
      >
        <Header />
      </AppBar>
      {drawerLeft}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
