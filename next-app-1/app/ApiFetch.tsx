// app/api-fetch/page.tsx
'use client';

import { useEffect, useState } from 'react';

const ApiFetch = () => {
  const [allData, setAllData] = useState<any[]>([]);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageData = allData.slice(start, end);
    setCurrentData(pageData);
  }, [page, allData]);

  const totalPages = Math.ceil(allData.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="mt-10 p-5 border border-black rounded-xl w-[400px] h-[500px] mx-auto bg-blue-200 flex flex-col justify-between">
      <div>
        <h2 className="text-center text-xl font-bold mb-4">API Data Fetch</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : currentData.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {currentData.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-red-600">No pages</p>
        )}
      </div>

      {currentData.length > 0 && (
        <div className="text-center mt-4">
          <div className="mb-2 font-medium">Page: {page}</div>
          <div className="flex justify-center gap-5">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50`}
            >
              ⬅️ Previous
            </button>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50`}
            >
              Next ➡️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiFetch;
