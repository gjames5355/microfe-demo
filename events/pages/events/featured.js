import dynamic from 'next/dynamic';
const page = import('../../realPages/events/featured');

const Page = dynamic(() => import('../../realPages/events/featured'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
