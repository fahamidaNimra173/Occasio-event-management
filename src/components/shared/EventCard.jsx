"use client";
import Link from "next/link";

export default function EventCard({ event }) {
    return (
        <div className="border p-4 rounded-lg bg-pink-300  flex flex-col justify-between h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-pink-300">
            <div>
                <img
                    src={event.image1}
                    alt={event.title}
                    className="rounded-md mb-4 object-cover w-full h-48 transition-transform duration-500 hover:scale-110"
                />
                <div className="flex justify-between items-center py-3">
                    <h2 className="text-2xl text-black font-semibold transition-colors duration-300 hover:text-gray-900">
                        {event.title}
                    </h2>
                    <p className="bg-green-700 px-4 py-1 rounded-2xl text-center text-[15px] max-w-1/4 font-medium text-white">
                        {event.date}
                    </p>
                </div>
                <p className="text-black text-[18px] mt-2 h-20 overflow-hidden">
                    {event.shortDesc}
                </p>
            </div>

            <Link href={`/events/${event._id.toString()}`}>
                <button className="mt-4 bg-green-700 cursor-pointer text-white font-medium py-2 px-6  hover:bg-green-800 transition duration-300 self-start">
                    See Details
                </button>
            </Link>
        </div>

    );
}
