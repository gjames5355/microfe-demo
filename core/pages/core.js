import dynamic from 'next/dynamic';
const page = import('../realPages/core');

const Page = dynamic(() => import('../realPages/core'));
Page.getInitialProps = async (ctx) => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
