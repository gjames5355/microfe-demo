import dynamic from 'next/dynamic';
const page = import('../../realPages/events/[id]');

const Page = dynamic(() => import('../../realPages/events/[id]'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
