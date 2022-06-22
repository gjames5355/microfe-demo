import EventList from '../../components/events/event-list';
import { getFeaturedEvents } from '../../dummy-data';

const Featured = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

Featured.getInitialProps = async () => {
  return {};
};

export default Featured;
