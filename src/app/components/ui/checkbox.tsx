import React, { useState, useEffect, ForwardedRef } from "react";

interface CheckboxProps {
  label: string;
  name?: string;
  change?: () => void;
  defaultChecked?: boolean;
  addClass?: string;
  check: boolean;
  errors?: any
}

const Checkbox = React.forwardRef(
  ({ check, label, name, change, defaultChecked, addClass,errors }: CheckboxProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    
    return (
      <label 
        htmlFor={name}
        className={`cursor-pointer flex flex-col gap-1 w-fit select-none ${addClass}`}
      >
        <div className="flex items-center">
          <input
            className="hidden"
            ref={forwardedRef}
            type="checkbox"
            name={name}
            checked={check}
            onChange={change}
            id={name}
          />
          <div className={`
              w-6
              h-6
              ${check ? 'bg-sky-300' : 'bg-neutral-50'}
              ${errors ? "border-red-600 border focus:border-red-600" : ""} 
              rounded
              flex
              item-center
              justify-center
              text-gray-50
              select-none
          `}>
              {check ? '✔️' : ''}
          </div>
          <label 
            htmlFor={name}
            className="
                text-gray-200
                ml-3
                cursor-pointer
            "
          >  
              {label} 
          </label>
        </div>
        {errors && (
            <span className="text-red-600 text-sm">
                {errors}
            </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
