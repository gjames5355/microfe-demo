import dynamic from 'next/dynamic';
const page = import('../realPages/login');

const Page = dynamic(() => import('../realPages/login'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
