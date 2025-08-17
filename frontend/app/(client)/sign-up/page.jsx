"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Lock,
  Mail,
  Phone,
  UserPlus,
  Mountain,
} from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Le numéro de téléphone est requis";
    } else if (!/^[0-9+\-\s()]{8,}$/.test(formData.number)) {
      newErrors.number = "Format de numéro invalide";
    }
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Données d'inscription:", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        number: formData.number,
        password: formData.password,
        // role: 'CLIENT' (par défaut)
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900">
      {/* Animated stone texture background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(120,113,108,0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(168,162,158,0.2)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Floating stone particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-lg">
          {/* Sign Up Card */}
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
                <UserPlus className="w-8 h-8 text-stone-100" />
              </div>
              <h1 className="text-3xl font-bold text-stone-800 mb-2">
                Créer un Compte
              </h1>
              <p className="text-stone-600">Rejoignez-nous aujourd'hui</p>
            </div>

            <div className="space-y-5">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Prénom
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                        errors.firstName
                          ? "border-red-400 focus:border-red-500"
                          : "border-stone-300 focus:border-stone-600"
                      }`}
                      placeholder="Votre prénom"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Nom
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                        errors.lastName
                          ? "border-red-400 focus:border-red-500"
                          : "border-stone-300 focus:border-stone-600"
                      }`}
                      placeholder="Votre nom"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Adresse Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-stone-300 focus:border-stone-600"
                    }`}
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Numéro de Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    id="number"
                    type="tel"
                    required
                    value={formData.number}
                    onChange={(e) =>
                      handleInputChange("number", e.target.value)
                    }
                    className={`w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                      errors.number
                        ? "border-red-400 focus:border-red-500"
                        : "border-stone-300 focus:border-stone-600"
                    }`}
                    placeholder="+216 12 345 678"
                  />
                </div>
                {errors.number && (
                  <p className="text-red-500 text-xs mt-1">{errors.number}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Mot de Passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className={`w-full pl-12 pr-12 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                      errors.password
                        ? "border-red-400 focus:border-red-500"
                        : "border-stone-300 focus:border-stone-600"
                    }`}
                    placeholder="Créer un mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-500 hover:text-stone-700 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Confirmer le Mot de Passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className={`w-full pl-12 pr-12 py-3 bg-white bg-opacity-70 border-2 rounded-xl focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500 ${
                      errors.confirmPassword
                        ? "border-red-400 focus:border-red-500"
                        : "border-stone-300 focus:border-stone-600"
                    }`}
                    placeholder="Confirmer votre mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-500 hover:text-stone-700 transition-colors duration-200"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-stone-600 border-stone-300 rounded focus:ring-stone-500 focus:ring-2 mt-1"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-stone-700">
                  J'accepte les{" "}
                  <button className="text-stone-800 hover:text-stone-900 font-medium underline transition-colors duration-200">
                    Conditions d'utilisation
                  </button>{" "}
                  et la{" "}
                  <button className="text-stone-800 hover:text-stone-900 font-medium underline transition-colors duration-200">
                    Politique de confidentialité
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-stone-600 to-stone-800 text-white font-semibold py-3 px-6 rounded-xl hover:from-stone-700 hover:to-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                Créer mon Compte
              </button>
            </div>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-stone-600">
              Vous avez déjà un compte ?{" "}
              <button className="font-medium text-stone-800 hover:text-stone-900 transition-colors duration-200">
                Se connecter
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
