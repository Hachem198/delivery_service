"use client";
import { useState } from "react";

const AdminMessageCard = ({ message }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setModalOpen(true)}
        className="bg-white shadow-md rounded-lg  mb-4 max-w-xl cursor-pointer hover:shadow-lg transition"
      >
        <div className="bg-stone-300 w-full h-[40px] border rounded-sm">
          <h3 className="text-lg font-semibold text-gray-800">
            {message.nom} {message.prenom}
          </h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600">Email: {message.email}</p>
          <p className="mt-2 text-gray-700">Message:</p>
          <p className="text-gray-800 mt-1 line-clamp-3">{message.message}</p>
          <p className="text-sm text-blue-600 mt-2 hover:underline">
            Clicker pour voir plus...
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setModalOpen(false)} // Close modal on overlay click
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2">
              {message.nom} {message.prenom}
            </h3>
            <p className="text-sm text-gray-600 mb-4">Email: {message.email}</p>
            <p className="text-gray-800 whitespace-normal break-words">
              {message.message}
            </p>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
              >
                Fermer
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminMessageCard;
