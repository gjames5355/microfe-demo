import Head from 'next/head';
import ArticleList from '../components/ArticleList';

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1 className='title'>
          Welcome to Next.js using Webpack 5!!! <code>home</code>
        </h1>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};
// Home.getInitialProps = async ctx => {
//   const res = await fetch(`http://localhost:3001/api/articles`);
//   const articles = await res.json();
//   return { articles };
// };

//
Home.getInitialProps = async ctx => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return { articles };
};

export default Home;
