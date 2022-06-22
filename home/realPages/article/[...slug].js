import Link from 'next/link';
import { useRouter } from 'next/router';

const Article = ({ articles }) => {
  const router = useRouter();
  const { slug } = router.query;

  const filteredArticle = articles.filter(article => article.id === Number(slug[0]));

  // const filteredArticle = articles.filter(article => article.id === Number(slug[1]));

  return (
    <>
      <h1>{filteredArticle[0].title}</h1>
      <p>{filteredArticle[0].body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

// Article.getInitialProps = async ctx => {
//   const res = await fetch(`http://localhost:3001/api/articles`);
//   const articles = await res.json();
//   return { articles };
// };

Article.getInitialProps = async ctx => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return { articles };
};

export default Article;
