import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/contact/getAllContacted")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    })
    .then((data) => setContacts(data))
    .catch((err) => {
      console.error("Error fetching contacts:", err);
      alert("Something went wrong.");
    });
}, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 text-white">
      <h2 className="text-2xl font-bold mb-4">All Contact Submissions</h2>
      <table className="w-full table-auto border border-gray-600">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border border-gray-600">Name</th>
            <th className="p-2 border border-gray-600">Email</th>
            <th className="p-2 border border-gray-600">Phone</th>
            <th className="p-2 border border-gray-600">Message</th>
            <th className="p-2 border border-gray-600">Agreed to Updates?</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td className="p-2 border border-gray-600">{c.name}</td>
              <td className="p-2 border border-gray-600">{c.email}</td>
              <td className="p-2 border border-gray-600">{c.phone}</td>
              <td className="p-2 border border-gray-600">{c.message}</td>
              <td className="p-2 border border-gray-600">
                {c.agreeToUpdates ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
