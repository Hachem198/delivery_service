"use client";
import React, { useEffect, useState, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";

export default function PickUpAutoComplete() {
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.apiKey,
    libraries,
  });
  const [input, setInput] = useState({});
  const inputRef = useRef(null);
  useEffect(() => {
    if (!isLoaded || loadError) return;

    const options = {
      componentRestrictions: { country: "TN" },
      fields: ["address_components", "geometry"],
    };

    const autocomplete = new google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autocomplete.addListener("place_changed", () =>
      handlePlaceChanged(autocomplete)
    );

    // return () => autocomplete.removeListener("place_changed", handlePlaceChanged);
  }, [isLoaded, loadError]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handlePlaceChanged = async (address) => {
    if (!isLoaded) return;
    const place = address.getPlace();

    if (!place || !place.geometry) {
      setInput({});
      return;
    }
    formData(place);
  };
  const formData = (data) => {
    const addressComponents = data?.address_components;

    const componentMap = {
      subPremise: "",
      premise: "",
      street_number: "",
      route: "",
      country: "",
      postal_code: "",
      administrative_area_level_2: "",
      administrative_area_level_1: "",
    };

    for (const component of addressComponents) {
      const componentType = component.types[0];
      if (componentMap.hasOwnProperty(componentType)) {
        componentMap[componentType] = component.long_name;
      }
    }

    const formattedAddress =
      `${componentMap.subPremise} ${componentMap.premise} ${componentMap.street_number} ${componentMap.route}`.trim();
    const latitude = data?.geometry?.location?.lat();
    const longitude = data?.geometry?.location?.lng();

    setInput((values) => ({
      ...values,
      streetAddress: formattedAddress,
      country: componentMap.country,
      zipCode: componentMap.postal_code,
      city: componentMap.administrative_area_level_2,
      state: componentMap.administrative_area_level_1,
      latitude: latitude,
      longitude: longitude,
    }));
  };
  return (
    isLoaded && (
      <div>
        <div className="flex flex-col  rounded-3xl ">
          <label className="text-md">Street</label>
          <input
            className="h-[40px] rounded-md w-full"
            type="text"
            name="streetAdress"
            ref={inputRef}
            value={input.streetAddress || ""}
            onChange={handleChange}
            required
          ></input>
        </div>
      </div>
    )
  );
}
