import React, { Fragment, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends UseFormRegisterReturn {
  options: Option[];
  htmlfor: string;
  label: string;
  addClass?: string;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { htmlfor, label, options, addClass, ...rest },
  ref
) => {
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
            className='text-gray-50'
            htmlFor={htmlfor}
        >
            {label}
        </label>
        <select
            id={htmlfor}
            ref={ref}
            className={`
                bg-green-800
                w-96
                h-12
                text-gray-50
                px-2
            `}
            {...rest}
            >
                {options.map((option) => (
                    <Fragment key={option.value}>
                    <option value={option.value}>{option.label}</option>
                    </Fragment>
                ))}
        </select>
    </div>
  );
};

export default forwardRef<HTMLSelectElement, SelectProps>(Select);
