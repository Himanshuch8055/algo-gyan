import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { HiChevronDown } from 'react-icons/hi';

const selectSizes = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-2.5 text-lg',
};

const selectVariants = {
  default: 'border-gray-300 focus:border-amber-500 focus:ring-amber-500',
  error: 'border-amber-500 text-amber-900 focus:border-amber-500 focus:ring-amber-500',
  success: 'border-amber-500 text-amber-900 focus:border-amber-500 focus:ring-amber-500',
  warning: 'border-amber-500 text-amber-900 focus:border-amber-500 focus:ring-amber-500',
};

/**
 * A customizable select component with various styles and validation states
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size of the select
 * @param {string} [props.variant] - Visual variant (default, error, success, warning)
 * @param {string} [props.label] - Label text
 * @param {string} [props.helpText] - Help text to display below the select
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.labelClassName] - Additional classes for the label
 * @param {string} [props.helpTextClassName] - Additional classes for the help text
 * @param {string} [props.wrapperClassName] - Additional classes for the wrapper div
 * @param {boolean} [props.fullWidth] - If true, select takes full width of its container
 * @param {Array<{value: string, label: string}>} [props.options] - Array of options
 * @param {React.SelectHTMLAttributes<HTMLSelectElement>} props - Standard select props
 * @returns {JSX.Element} Select component
 */
const Select = forwardRef(({
  size = 'md',
  variant = 'default',
  label,
  helpText,
  className = '',
  labelClassName = '',
  helpTextClassName = '',
  wrapperClassName = '',
  fullWidth = false,
  options = [],
  children,
  id,
  ...props
}, ref) => {
  const sizeClass = selectSizes[size] || selectSizes.md;
  const variantClass = selectVariants[variant] || selectVariants.default;
  const widthClass = fullWidth ? 'w-full' : '';
  
  const selectClasses = twMerge(
    'appearance-none block pl-3 pr-10 py-2 border rounded-md shadow-sm focus:outline-none bg-white',
    sizeClass,
    variantClass,
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    widthClass,
    className
  );
  
  const renderSelect = () => (
    <div className="relative">
      <select
        ref={ref}
        id={id}
        className={selectClasses}
        {...props}
      >
        {children || options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <HiChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
  
  // If there's no label or help text, just return the select
  if (!label && !helpText) {
    return renderSelect();
  }
  
  // Otherwise, wrap it with label and help text
  return (
    <div className={wrapperClassName}>
      {label && (
        <label 
          htmlFor={id} 
          className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      {renderSelect()}
      {helpText && (
        <p 
          className={`mt-1 text-sm ${
            variant === 'error' 
              ? 'text-amber-600' 
              : variant === 'success' 
                ? 'text-amber-600' 
                : 'text-gray-500'
          } ${helpTextClassName}`}
        >
          {helpText}
        </p>
      )}
    </div>
  );
});

// Set display name for better dev tools experience
Select.displayName = 'Select';

export { Select };
