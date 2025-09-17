// components/EventPagination.jsx
"use client";
import { useState } from "react";
import EventCard from "./shared/EventCard";

export default function EventPagination({ eventsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(eventsData.length / eventsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-30 lg:px-10 px-5">
        {currentEvents.map((ev) => (
          <EventCard key={ev._id} event={ev} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`px-4 py-2 rounded ${
              num === currentPage ? "bg-green-700 text-white" : "bg-pink-200 text-black"
            }`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
