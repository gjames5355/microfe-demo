import EventItem from './event-item';

import styles from '../../styles/event-list.module.css';

const EventList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
