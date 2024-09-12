// import userData from '../../../data/users.json'; // Import JSON data

// export default function handler(req, res) {
//   const { query } = req.query;
//   if (!query) {
//     return res.status(400).json({ message: 'Query parameter is required' });
//   }

//   const results = userData.filter(user =>
//     user.first_name.toLowerCase().includes(query.toLowerCase()) ||
//     user.last_name.toLowerCase().includes(query.toLowerCase())
//   );

//   res.status(200).json(results);
// }

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("users");

  if (req.method === "GET") {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    const results = await collection
      .find({
        $or: [
          { first_name: { $regex: query, $options: "i" } },
          { last_name: { $regex: query, $options: "i" } },
        ],
      })
      .toArray();

    res.status(200).json(results);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
