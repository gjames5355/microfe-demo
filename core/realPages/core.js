import React from 'react';
import Head from 'next/head';
import { getSession, signOut, useSession } from 'next-auth/react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Core = (props) => {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  if (session.status === 'loading') {
    <p>...loading</p>;
  }
  if (session.status === 'unauthenticated') {
    router.replace('/login');
  }
  return (
    <div>
      <Head>
        <title>Core</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='hero'>
        <Button
          onClick={() => {
            signOut();
          }}>
          Log Out
        </Button>
        <h1 className='title' style={{ fontSize: '48px' }}>
          Vision Core
        </h1>
        <h3 className='title'>
          This is a federated page owned by localhost:3000
        </h3>
        <span>
          {' '}
          Data from federated <pre>getInitalProps</pre>
        </span>
        <br />
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 20px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
};
Core.getInitialProps = async (ctx) => {
  // const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  // return swapi;

  const session = await getSession({ req: ctx.req });

  if (!session) {
    ctx.res?.writeHead(302, {
      Location: '/login',
    });
    ctx.res?.end();
    return {};
  } else {
    return { session: session };
  }
};
export default Core;
