import React from "react";

const Input = ({
  label = "",
  name = "",
  type = "text",
  inpClassName = "w-72",
  className = "",
  isRequired = true,
  placeholder = "",
  autoComplete = "on",
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className={`${inpClassName}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-800 "
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
        placeholder={placeholder}
        required={isRequired}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
