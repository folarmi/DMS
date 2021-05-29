import React from "react";

const Input = ({ type, label, placeholder }) => {
  return (
    <div className="border border-lightAsh rounded-md overflow-hidden mb-6">
      <input
        type={type}
        placeholder={placeholder}
        label={label}
        className="w-full p-2"
      />
    </div>
  );
};

export default Input;
