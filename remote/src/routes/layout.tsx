import { Outlet } from '@modern-js/runtime/router';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}
