// components/FloatingInput.tsx
'use client'

import React, { useState, useEffect } from 'react';

interface FloatingInputProps {
  label: string;
  className: string;
  value?: string;
  onChange?: (newValue: string) => void; // Make onChange optional
}

const FloatingInput: React.FC<FloatingInputProps> = ({ label, className, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if(value) {
        setIsFocused(true);
    } else {
        setIsFocused(false)
    }
    
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange && typeof onChange === 'function') {
      onChange(newValue); // Call onChange if it's a valid function
    }
  };

  useEffect(() => {
    // Check if the input has a non-empty value, and keep the label at the top
    if (value) {
        
      setIsFocused(false);
    }
  }, [value]);

  return (
    <div className="relative">
      <input
        type="text"
        id="myInput"
        className={className}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        value={value}
      />
      <label
        htmlFor="myInput"
        className={`absolute top-[11px] left-3 text-[#878787] bg-white z-10 transition-all duration-300 ${
          isFocused  ? 'text-black text-sm -translate-y-5 left-3' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
