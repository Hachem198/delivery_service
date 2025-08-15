"use client";
import { TypeAnimation } from "react-type-animation";
import ReservationSpace from "../../components/ReservationSpace.jsx";

export default function HomePage() {
  return (
    <div className="bg-[url('/images/vanPhoto.jpg')] bg-cover bg-center h-screen ">
      <div className="text-white text-2xl font-bold  flex justify-center items-center pt-20 ">
        <div className="hidden md:block">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Fast Delivery.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "All Over The Country.",
              1000,
              "With The Best Prices.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="flex justify-center items-center pt-20 px-4 ">
        <ReservationSpace></ReservationSpace>
      </div>
    </div>
  );
}
