import { useState } from "react";
import DestAutoComplete from "./GooglePlacesAutoComplete/DestAutoComplete";
import PickUpAutoComplete from "./GooglePlacesAutoComplete/PickUpAutoComplete";
import BasicTimePicker from "./ui/BasicTimePicker";
import ComboBoxServices from "./ui/ComboBoxColis/ComboBoxServices";
import ComboBoxTypeProduits from "./ui/ComboBoxColis/ComboBoxTypeProduits";
import DatePicker from "./ui/DatePicker";
import { useSendDelivery } from "@/hooks/use-send-delivery";

export default function ReservationSpace() {
  const [selectedService, setSelectedService] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [delivery, setDelivery] = useState({
    pickUpLocation,
    pickUpDateAndTime: date + " " + time,
    dropOffLocation,
    service: selectedService,
    productType: selectedProductType,
  });
  const { mutate: sendDelivery } = useSendDelivery();
  const handleSendDelivery = () => {
    sendDelivery({
      delivery,
    });
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Main Container with improved styling */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-500 via-stone-600 to-stone-900 rounded-3xl shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="relative z-10 p-8 lg:p-12">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Réservation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Planifiez votre livraison en quelques clics
            </p>
          </div>

          <div className="space-y-8">
            {/* Address Section with improved layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block uppercase tracking-wide">
                  Point de collecte
                </label>
                <div className="transform hover:scale-[1.02] transition-all duration-200">
                  <PickUpAutoComplete
                    pickUpLocation={pickUpLocation}
                    setPickUpLocation={setPickUpLocation}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block uppercase tracking-wide">
                  Point de livraison
                </label>
                <div className="transform hover:scale-[1.02] transition-all duration-200">
                  <DestAutoComplete
                    dropOffLocation={dropOffLocation}
                    setDropOffLocation={setDropOffLocation}
                  />
                </div>
              </div>
            </div>

            {/* Service Details Section with better spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block uppercase tracking-wide">
                  Service
                </label>
                <div className="transform hover:scale-[1.02] transition-all duration-200">
                  <ComboBoxServices
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block uppercase tracking-wide">
                  Type de produit
                </label>
                <div className="transform hover:scale-[1.02] transition-all duration-200">
                  <ComboBoxTypeProduits
                    service={selectedService}
                    setSelectedProductType={setSelectedProductType}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block uppercase tracking-wide">
                  Date
                </label>
                <div className="transform hover:scale-[1.02] transition-all duration-200">
                  <DatePicker date={date} setDate={setDate} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block uppercase tracking-wide">
                  Heure
                </label>
                <div className="transform hover:scale-[1.02] transition-all duration-200">
                  <BasicTimePicker time={time} setTime={setTime} />
                </div>
              </div>
            </div>

            {/* Action Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="flex-1 bg-gradient-to-r from-stone-400 to-stone-500 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl shadow-lg border border-blue-500/30">
                <span className="text-lg">Passer la demande</span>
              </button>
              <button className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl shadow-lg border border-gray-500/30">
                <span className="text-lg">Effacer la demande</span>
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mt-12 pt-8 border-t border-gray-600/50">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
