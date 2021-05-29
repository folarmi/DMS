import React from "react";

import deliveryMan from "../assets/deliveryMan.png";

const Banner = () => {
  return (
    <div className="text-center mr-16" style={{ flex: "1" }}>
      <div className="flex justify-center">
        <img src={deliveryMan} alt="deliveryMan" className="w-24 pb-10" />
      </div>
      <p className="text-3xl font-medium">
        Let’s help you manage your riders and delivery systems.
      </p>
      <p className="text-sm py-6">
        Every logistics company whether it’s a multi-national branding
        corporation or a regular local deserves the basic standard necessities
        in achieving a high service delivery
      </p>
      <button className="text-white bg-primary rounded-lg py-4 px-6 font-bold text-sm">
        Get Started
      </button>
    </div>
  );
};

export default Banner;
