import React, { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errors?: any
  type: "text" | "email" | "number" | "password";
  name: string;
  placeholder?: string;
  htmlfor: string;
  width: string;
  addClass?: string;
  value?: string | number | readonly string[] | undefined
//   icon: ; 
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, placeholder, name, errors, htmlfor, width, addClass, value, ...rest }, ref) => {
    return (
      <div 
        className={`
            flex 
            flex-col 
            w-auto
            mb-4
            ${addClass}
        `}
      >
        <label 
        htmlFor={htmlfor}
        className={`
            text-gray-50
            mb-2.5
        `}
        >
            {label}
        </label>
        <input
            id={htmlfor}
            className={`
                ${errors ? "border-red-600 border focus:border-red-600" : " focus:border-gray-50 focus:border"} 
                ${width}
                focus:outline-none 
                p-2  
                leading-tight
                h-12
                bg-green-50
                rounded
                text-gray-800 
                placeholder:text-gray-800
            `}
            type={type}
            placeholder={placeholder}
            name={name}
            ref={ref}
            {...rest}
            value={value}
            min={0}
            style={{MozAppearance: 'textfield'}}
        />
        {errors && (
            <span className={`text-red-600 text-sm ${width} break-words`}>
                {errors.message}
            </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
