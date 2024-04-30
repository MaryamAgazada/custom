
import React, { useState, useEffect } from "react";

export default function Filter() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  const sortAsync = (prop) => {
    const sortedCategory = [...category].sort((a, b) =>
      a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0
    );
    setCategory(sortedCategory);
  };

  const sortDec = (prop) => {
    const sortedCategory = [...category].sort((a, b) =>
      a[prop] > b[prop] ? -1 : a[prop] < b[prop] ? 1 : 0
    );
    setCategory(sortedCategory);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => sortAsync("title")}>A-Z</button>
      <button onClick={() => sortDec("title")}>Z-A</button>
      {category
        .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
        .map((x) => (
          <div key={x.id}>
            <h2>{x.title}</h2>
            <h2>{x.price}</h2>
          </div>
        ))}
    </div>
  );
}
