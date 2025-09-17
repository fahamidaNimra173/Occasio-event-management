"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookForm({ event }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    eventId: event._id,
    eventName: event.title || "",
    category: event.category || "",
    date: event.date || "",
    days: "",
    people: "",
    location: event.location || "",
    description: event.longDesc || event.description || "",
    price: event.price || "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/bookEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      // success - navigate or show message
      router.push("/"); // or router.push("/my-bookings")
    } else {
      alert("Booking failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl  py-30 mx-auto p-6 space-y-4">
      <h2 className="text-2xl text-center font-bold">Book: {form.eventName}</h2>

      <input name="eventId" type="hidden" value={form.eventId} />

      <label className="block">
        Event Name
        <input name="eventName" value={form.eventName} readOnly className="w-full border p-2" />
      </label>

      <label className="block">
        Category
        <input name="category" value={form.category} readOnly className="w-full border p-2" />
      </label>

      <label className="block">
        Date
        <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full border p-2" />
      </label>

      <label className="block">
        Days to arrange
        <input name="days" type="number" value={form.days} onChange={handleChange} className="w-full border p-2" required />
      </label>

      <label className="block">
        People
        <input name="people" type="number" value={form.people} onChange={handleChange} className="w-full border p-2" required/>
      </label>

      <label className="block">
        Location
        <input name="location" value={form.location} onChange={handleChange} className="w-full border p-2" />
      </label>

      <label className="block">
        Description
        <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2" rows={4} />
      </label>

      <label className="block">
        Price
        <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full border p-2" />
      </label>

      <button type="submit" disabled={loading} className="bg-pink-500 text-white px-4 py-2 rounded">
        {loading ? "Booking..." : "Book"}
      </button>
    </form>
  );
}
// app
//   (auth)
//     └─ login
//     │   └─ page.jsx
//     └─ register
//         └─ page.jsx
