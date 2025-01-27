
import React, { useState } from "react";

const Services = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${search}"...`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search for Information</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for scholarships, courses, etc."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-1/2"
        />
        <button type="submit" className="ml-2 bg-blue-500 p-2 rounded text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default Services;
