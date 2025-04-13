import React, { useState } from "react";
import Link from "next/link";
import { CiCircleInfo } from "react-icons/ci"; // Info icon
import { MdDelete, MdEdit } from "react-icons/md"; // Delete and Edit icons

const tableData = [
  {
    id: 1,
    nom: "Chaibi",
    prenom: "Mohamed Hachem",
    email: "1500 kg",
    numero: "20",
  },
  {
    id: 2,
    nom: "Camion B",
    prenom: "Transport B",
    email: "2000 kg",
    numero: "25",
  },
  {
    id: 3,
    nom: "Camion C",
    prenom: "Transport C",
    email: "1200 kg",
    numero: "15",
  },
  // Add more rows as needed...
];

export default function ClientsInfoTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const openModal = (camion) => {
    setSelectedClient(camion);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-8xl p-8 ml-[60px]">
        <table className="table-auto w-full border-collapse text-sm sm:text-base lg:text-xl rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-stone-300">
            <tr>
              <th className="px-4 py-6 text-left text-gray-700 w-[200px] lg:w-[400px] md:w-[300px] sm:w-[200px]">
                Id
              </th>
              <th className="px-4 py-6 text-left text-gray-700  w-[200px] lg:w-[500px] md:w-[300px] sm:w-[200px]">
                Nom du Admin
              </th>
              <th className="px-4 py-6 text-left text-gray-700 w-[200px] lg:w-[500px] md:w-[300px] sm:w-[200px]">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-200 transition-colors cursor-pointer`}
                onClick={() => openModal(item)} // Open modal on row click
              >
                <td className="px-4 py-6">{item.id}</td>
                <td className="px-4 py-6">
                  {item.nom} {item.prenom}
                </td>
                <td className="px-4 py-6 flex mt-2 space-x-2 justify-start ml-4">
                  <Link href="#">
                    <MdDelete />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for details */}
        {isModalOpen && selectedClient && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closeModal} // Close modal on overlay click
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <h3 className="text-xl font-bold mb-2">
                {selectedClient.nom} {selectedClient.prenom}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                ID: {selectedClient.id}
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Email:</strong> {selectedClient.email}
              </p>
              <p className="text-gray-800 mb-4">
                <strong>Numéro:</strong> {selectedClient.quantite}
              </p>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
