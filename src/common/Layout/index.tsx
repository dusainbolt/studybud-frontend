import { FC, ReactNode } from 'react';
import { Header } from './Header';
import { layoutStyle } from './layoutStyle';

interface LayoutProps {
  children: ReactNode;
  // breadcrumbs?: BreadcrumbsType[];
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const styles = layoutStyle();
  return (
    <div className={styles.root}>
      <Header />
      {children}
    </div>
  );
};
