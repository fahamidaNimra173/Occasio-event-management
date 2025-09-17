import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

import Link from "next/link";
import { Original_Surfer } from "next/font/google";




const surfer = Original_Surfer({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-surfer',
});


export default async function EventDetails({ params }) {
    const client = await clientPromise;
    const db = client.db("eventManagement");
    const event = await db.collection("events")
        .findOne({ _id: new ObjectId(params.id) });

    if (!event) return <div>Event not found</div>;

    return (
        <section className="px-6 py-30 min-h-screen">

            <div className="flex flex-col  gap-10 lg:flex-row items-center justify-center">
                <div className="flex flex-col lg:items-start gap-7 items-center justify-center">
                    <h1 className={`text-3xl dark:text-white text-black font-bold ${surfer.className}`}>{event.title}</h1>
                    <p className="dark:text-white text-black">{event.date}</p>
                    <Link href={`/book-events/${event._id}`}>
                        <button className="bg-pink-400 px-7 cursor-pointer py-3">BOOK NOW</button>
                    </Link>

                </div>
                <img src={event.image2}
                    className="h-96" alt="" />
            </div>
            <div className="flex mt-30 items-center justify-center flex-col-reverse md:flex-row lg:px-20 px-10 gap-10">
                <img src={event.image2} className=" lg:max-w-1/3" alt="" />
                <p className="pt-10 text-2xl dark:text-white text-black ">{event.longDesc}</p>
            </div>
        </section>
    );
}
// app
// └─ events
//    └─ [id]
//     |  └─ page.jsx
//     |
//     |└─ book-events
//              └─ [id]
//                 └─ page.jsx
//                 └─ BookForm.jsx.jsx         