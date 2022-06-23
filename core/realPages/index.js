// import { createFederatedCatchAll } from 'nextjs-shared';
import { useRouter } from 'next/router';
import React from 'react';

// export default createFederatedCatchAll(['home', 'events']);

const Page = () => {
  const router = useRouter();
  router.push('/core');
  return null;
};

Page.getInitialProps = async (context) => {
  // const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  // return swapi;
  context.res?.writeHead(302, {
    Location: '/core',
  });
  context.res?.end();

  return {};
};

export default Page;
