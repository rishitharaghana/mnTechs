import React, { useEffect, useState } from "react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const ReachUsList = () => {
  const [reachUsEntries, setReachUsEntries] = useState([]);

useEffect(() => {
  ngrokAxiosInstance
    .get('/reach/getAllReachUS')
    .then((res) => setReachUsEntries(res.data))
    .catch((err) => {
      console.error('Error fetching reach us data:', err.response ? err.response.data : err.message);
    });
}, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Reach Us Submissions</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">First Name</th>
            <th className="py-2 px-4 border">Last Name</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Company</th>
            <th className="py-2 px-4 border">Design</th>
            <th className="py-2 px-4 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {reachUsEntries.map((entry) => (
            <tr key={entry._id}>
              <td className="py-2 px-4 border">{entry.first_name}</td>
              <td className="py-2 px-4 border">{entry.last_name}</td>
              <td className="py-2 px-4 border">{entry.phone}</td>
              <td className="py-2 px-4 border">{entry.company}</td>
              <td className="py-2 px-4 border">{entry.product_design}</td>
              <td className="py-2 px-4 border">{entry.product_description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReachUsList;
