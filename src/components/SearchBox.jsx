import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search" 
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
