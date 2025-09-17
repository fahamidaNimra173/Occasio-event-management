import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db("eventManagement");

  await db.collection("bookedEvents").insertOne(data);

  return Response.json({ success: true });
}
