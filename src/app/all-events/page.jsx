import EventPagination from "@/components/EventPagination";
import EventCard from "@/components/shared/EventCard";
import clientPromise from "@/lib/mongodb";




export default async function Events() {
  const client=await clientPromise;
  const db = client.db('eventManagement')
  const events = await db.collection("events").find({}).toArray();
  const eventsData = events.map(e => ({ ...e, _id: e._id.toString() }));
return <EventPagination eventsData={eventsData} />;
}
