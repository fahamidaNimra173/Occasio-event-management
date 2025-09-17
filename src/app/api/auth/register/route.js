import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("eventManagement");

    const existing = await db.collection("users").findOne({ email });
    if (existing) return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashed };
    const result = await db.collection("users").insertOne(newUser);

    const token = jwt.sign(
      { _id: result.insertedId, name, email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return new Response(JSON.stringify({ token }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
