import React, { Suspense, useState, useTransition } from "react";

function fetchResults(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = ["React", "Redux", "Router", "Suspense", "Transition", "Hooks"];
      resolve(data.filter((item) => item.toLowerCase().includes(query.toLowerCase())));
    }, 1500);
  });
}

const cache = new Map();

function getResults(query) {
  if (!query) return null;
  if (!cache.has(query)) {
    cache.set(query, fetchResults(query));
  }
  return cache.get(query);
}

function useData(promise) {
  if (!promise) return null;
  if (promise.status === "fulfilled") return promise.value;
  if (promise.status === "rejected") throw promise.reason;
  if (promise.status === "pending") throw promise;

  // Initialize
  promise.status = "pending";
  promise.then(
    (r) => {
      promise.status = "fulfilled";
      promise.value = r;
    },
    (e) => {
      promise.status = "rejected";
      promise.reason = e;
    }
  );
  throw promise;
}

function SearchResults({ query }) {
  const results = useData(getResults(query)); 

  if (!query) return <p>Type something to search...</p>;

  return (
    <ul>
      {results.length ? (
        results.map((item) => <li key={item}>{item}</li>)
      ) : (
        <li>No results found</li>
      )}
    </ul>
  );
}


function Sustrans() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      setSearch(value);
    });
  }

  return (
    <div style={{ padding: 20 }}>
      <h1> Suspense + useTransition Example</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {isPending && <p style={{ color: "gray" }}>Updating...</p>}

      <Suspense fallback={<p>Loading results...</p>}>
        <SearchResults query={search} />
      </Suspense>
    </div>
  );
}

export default Sustrans;
