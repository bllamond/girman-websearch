// pages/api/users.js
import userData from '../../../data/users.json'; // Import JSON data


export default function handler(req, res) {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  const results = userData.filter(user =>
    user.first_name.toLowerCase().includes(query.toLowerCase()) ||
    user.last_name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(results);
}
