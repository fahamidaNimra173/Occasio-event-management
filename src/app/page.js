import HeroBanner from "@/components/Banner";
import EventList from "@/components/EventList";
import Gallery from "@/components/Gallery";
import EventCard from "@/components/shared/EventCard";
import clientPromise from "@/lib/mongodb";


export default async function Home() {

  const client=await clientPromise;
  const db = client.db('eventManagement')
  const events = await db.collection("events").find({}).limit(6).toArray();
  const eventsData = events.map(e => ({ ...e, _id: e._id.toString() }));
  return (
   <div >
      <HeroBanner></HeroBanner>
      
      <div className="max-w-5/6 mx-auto">
      
      <h1 classname='md:text-4xl text-2xl text-black dark:text-white mx-auto my-5 '>Some of our recent events</h1>
             <EventList  events={eventsData}></EventList>
      </div>
      <Gallery></Gallery>
   
     

   </div>
  );
}
