// components/FloatingInput.tsx
import { type } from 'os';
import React, { useState, useEffect } from 'react';

interface FloatingInputProps {
  label: string;
  className: string;
  value?: string | number;
  relative?: string;
  onChange?: (newValue: string) => void;
  type:string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ label, className, value, onChange, relative,type }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange && typeof onChange === 'function') {
      onChange(newValue);
    }
  };


  return (
    <div className="relative">
      <input
        type={type}
        id="myInput"
        className={className}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange} // Call handleInputChange to trigger onChange
        value={value}
      />
      <label
        htmlFor="myInput"
        className={`absolute text-xs top-[15px] left-3 text-[#878787] bg-white z-10 transition-all duration-300 ${
          isFocused ? ' text-xs -translate-y-[22px] left-3' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
