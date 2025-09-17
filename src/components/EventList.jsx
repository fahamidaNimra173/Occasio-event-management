import EventCard from "./shared/EventCard";


export default function EventList({ events }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map(ev => (
        <EventCard key={ev._id} event={ev} />
      ))}
    </div>
  );
}
