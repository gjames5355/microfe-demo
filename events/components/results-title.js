import Button from './ui/button';

import styles from '../styles/results-title.module.css';

const ResultsTitle = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all Events</Button>
    </section>
  );
};

export default ResultsTitle;
