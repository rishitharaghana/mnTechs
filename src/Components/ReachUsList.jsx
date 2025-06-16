import React, { useEffect, useState } from "react";

const ReachUsList = () => {
  const [reachUsEntries, setReachUsEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reach/getAllReachUS")
      .then((res) => res.json())
      .then((data) => {
        setReachUsEntries(data);
      })
      .catch((err) => {
        console.error("Error fetching reach us data:", err);
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
