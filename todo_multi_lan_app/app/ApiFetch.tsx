// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';

// interface Data {
//   id: number;
//   title: string;
// }

// const ApiFetch = () => {
//   const [data, setData] = useState<Data[]>([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const { t } = useTranslation();

//   const fetchData = async (pageNumber: number) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${pageNumber}`);
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error('Failed to fetch:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   return (
//     <div className="mt-8">
//       <h3 className="text-xl font-semibold mb-4">{t('apiTitle')}</h3>

//       {loading ? (
//         <p>{t('loading')}</p>
//       ) : data.length > 0 ? (
//         <ul className="space-y-2">
//           {data.map((item) => (
//             <li key={item.id} className="bg-white p-3 rounded shadow">
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>{t('noPages')}</p>
//       )}

//       <div className="flex justify-between mt-4">
//         <button
//           onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//           disabled={page === 1}
//           className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
//         >
//           ⬅️
//         </button>
//         <span>
//           {t('page')}: {page}
//         </span>
//         <button
//           onClick={() => setPage((prev) => prev + 1)}
//           className="bg-gray-300 px-4 py-2 rounded"
//         >
//           ➡️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApiFetch;
