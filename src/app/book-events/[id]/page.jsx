import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import BookForm from "./BookForm";


export default async function BookEventPage({ params }) {
  const client = await clientPromise;
  const db = client.db("eventManagement");

  const event = await db
    .collection("events")
    .findOne({ _id: new ObjectId(params.id) });

  if (!event) return <div className="p-6">Event not found</div>;

  // convert _id to string for client
  const eventForClient = { ...event, _id: event._id.toString() };

  return <BookForm event={eventForClient} />;
}
