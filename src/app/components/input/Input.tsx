// components/FloatingInput.tsx
'use client'
import React, { useState } from 'react';

interface FloatingInputProps {
  label: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative mt-4">
      <input
        type="text"
        id="myInput"
        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:border-blue-500 focus:outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor="myInput"
        className={`absolute top-0 left-2 transition-all duration-300 ${
          isFocused ? 'text-blue-500 text-xs -translate-y-2' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
