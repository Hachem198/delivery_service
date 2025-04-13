"use client";
import { useState } from "react";

const MessagesCard = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // You can send this data to your backend API here.
  };

  return (
    <div className="max-w-md mx-auto bg-stone-300 shadow-2xl rounded-lg p-6  ">
      <h2 className="text-2xl font-bold mb-4 text-center">Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="nom"
          >
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-[30px]"
            required
          />
        </div>
        {/* Prénom */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="prenom"
          >
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-[30px]"
            required
          />
        </div>
        {/* Email */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-[30px]"
            required
          />
        </div>
        {/* Message */}
        <div className="relative w-full max-w-md overflow-hidden">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Entrez votre message"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none h-[200px]"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-stone-700 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:ring focus:ring-blue-300"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default MessagesCard;
