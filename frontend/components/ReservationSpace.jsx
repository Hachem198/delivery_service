import { useState } from "react";
import DestAutoComplete from "./GooglePlacesAutoComplete/DestAutoComplete";
import PickUpAutoComplete from "./GooglePlacesAutoComplete/PickUpAutoComplete";
import BasicTimePicker from "./ui/BasicTimePicker";
import ComboBoxServices from "./ui/ComboBoxColis/ComboBoxServices";
import ComboBoxTypeProduits from "./ui/ComboBoxColis/ComboBoxTypeProduits";
import DatePicker from "./ui/DatePicker";

export default function ReservationSpace() {
  const [selectedService, setSelectedService] = useState("");
  return (
    //desktop navigation
    <div className="w-full max-w-[1000px] h-[500px] px-4 py-6 border-2  text-white rounded-lg shadow-lg bg-stone-400">
      <div className="md:pt-20">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:space-x-2 w-full">
          <PickUpAutoComplete></PickUpAutoComplete>
          <DestAutoComplete></DestAutoComplete>
        </div>
        <div className="grid md:grid-cols-4 pt-10 gap-4 md:ml-12">
          <ComboBoxServices
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          ></ComboBoxServices>
          <ComboBoxTypeProduits
            service={selectedService}
          ></ComboBoxTypeProduits>
          <div>
            <DatePicker></DatePicker>
          </div>
          <div className="flex justify-center items-center sm:mr-20">
            <BasicTimePicker></BasicTimePicker>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-white bg-stone-400 border-2 mt-8 w-[50%] h-[50px]">
            Passer la demande
          </button>
          <button className="text-white bg-stone-400 border-2 mt-8 w-[50%] h-[50px]">
            Effacer la demande
          </button>
        </div>
      </div>
    </div>
  );
}
