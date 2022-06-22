import dynamic from 'next/dynamic';
const page = import('../../realPages/article/[...slug]');

const Page = dynamic(() => import('../../realPages/article/[...slug]'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
