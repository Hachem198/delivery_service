"use client";
import { useState } from "react";
import { User, Mail, MessageCircle, Send, Phone } from "lucide-react";

const MessagesCard = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form Data Submitted: ", formData);

      // Reset form on success
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        message: "",
      });

      // You can add a success message here
      alert("Message envoyé avec succès!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 py-8 px-4 flex items-center justify-center">
      {/* Animated stone texture background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(120,113,108,0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(168,162,158,0.2)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Floating stone particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-stone-400 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <div
          className={`bg-gradient-to-br from-stone-100 to-stone-200 backdrop-blur-lg rounded-2xl shadow-2xl border border-stone-300 p-8 transform transition-all duration-500 ${
            isHovered ? "scale-105 shadow-3xl" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-800 rounded-full mb-4 shadow-lg">
              <MessageCircle className="w-8 h-8 text-stone-100" />
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">
              Contactez-nous
            </h2>
            <p className="text-stone-600">Nous sommes là pour vous aider</p>
          </div>

          <div className="space-y-6">
            {/* Nom & Prénom */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-semibold text-stone-700 mb-2"
                  htmlFor="nom"
                >
                  Nom
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                      errors.nom
                        ? "border-red-400 focus:border-red-500"
                        : "border-stone-300 focus:border-stone-600"
                    }`}
                    required
                  />
                </div>
                {errors.nom && (
                  <p className="text-red-500 text-xs mt-1">{errors.nom}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-stone-700 mb-2"
                  htmlFor="prenom"
                >
                  Prénom
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                    className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                      errors.prenom
                        ? "border-red-400 focus:border-red-500"
                        : "border-stone-300 focus:border-stone-600"
                    }`}
                    required
                  />
                </div>
                {errors.prenom && (
                  <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-semibold text-stone-700 mb-2"
                htmlFor="email"
              >
                Adresse Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                  className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-stone-300 focus:border-stone-600"
                  }`}
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-semibold text-stone-700 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-stone-500" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande en détail..."
                  rows="6"
                  className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 resize-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-stone-300 focus:border-stone-600"
                  }`}
                  required
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-stone-500">Minimum 10 caractères</p>
                <p className="text-xs text-stone-500">
                  {formData.message.length} caractères
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-stone-600 to-stone-800 text-white font-semibold py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:from-stone-700 hover:to-stone-900"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer le Message
                </>
              )}
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-stone-300">
            <p className="text-center text-sm text-stone-600 mb-4">
              Ou contactez-nous directement
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@wassali.tn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+216 12 345 678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesCard;
