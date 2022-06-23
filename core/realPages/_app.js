import dynamic from 'next/dynamic';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import theme from '../utils/theme';
const Nav = dynamic(
  () => {
    const mod = import('home/nav');
    console.log(mod);
    return mod;
  },
  { ssr: false }
);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Nav />
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
