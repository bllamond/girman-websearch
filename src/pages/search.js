// pages/search.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { fetchUserData } from "./api";
import styles from "../styles/SearchResults.module.css";
import Navbar from "@/components/Navbar";
import NavbarSearch from "@/components/NavbarSearch";

export default function SearchResults() {
  const router = useRouter();
  const { q } = router.query; 
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (q) {
 
      fetchUserData(q)
        .then((data) => setResults(data))
        .catch((err) => setError(err.message));

      console.log(results);
    }
  }, [q]);

  if (error) return <div>Error: {error}</div>;
  if (!results.length) return (
    <div className="min-h-screen flex flex-col">
    <NavbarSearch />
    <div className="flex-grow bg-gray-50 flex flex-col items-center justify-center text-center">
      <div className="mt-8 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">No Results Found</h1>
        <p className="mt-2 text-gray-600">Couldn't find any matches for your search. Please try a different query.</p>
      </div>
    </div>
  </div>
  );

  return (
    <div className="bg-blue-50 h-screen">
      <NavbarSearch />
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {results.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
