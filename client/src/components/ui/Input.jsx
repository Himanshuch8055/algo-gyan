import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const inputSizes = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-2.5 text-lg',
};

const inputVariants = {
  default: 'border-gray-300 focus:border-amber-500 focus:ring-amber-500',
  error: 'border-amber-500 text-amber-900 placeholder-amber-300 focus:border-amber-500 focus:ring-amber-500',
  success: 'border-amber-500 text-amber-900 placeholder-amber-300 focus:border-amber-500 focus:ring-amber-500',
  warning: 'border-amber-500 text-amber-900 placeholder-amber-300 focus:border-amber-500 focus:ring-amber-500',
};

/**
 * A customizable input component with various styles and validation states
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size of the input
 * @param {string} [props.variant] - Visual variant (default, error, success, warning)
 * @param {string} [props.label] - Label text
 * @param {string} [props.helpText] - Help text to display below the input
 * @param {React.ReactNode} [props.leftIcon] - Icon to display on the left side
 * @param {React.ReactNode} [props.rightIcon] - Icon to display on the right side
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.labelClassName] - Additional classes for the label
 * @param {string} [props.helpTextClassName] - Additional classes for the help text
 * @param {string} [props.wrapperClassName] - Additional classes for the wrapper div
 * @param {boolean} [props.fullWidth] - If true, input takes full width of its container
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Standard input props
 * @returns {JSX.Element} Input component
 */
const Input = forwardRef(({
  size = 'md',
  variant = 'default',
  label,
  helpText,
  leftIcon,
  rightIcon,
  className = '',
  labelClassName = '',
  helpTextClassName = '',
  wrapperClassName = '',
  fullWidth = false,
  id,
  ...props
}, ref) => {
  const sizeClass = inputSizes[size] || inputSizes.md;
  const variantClass = inputVariants[variant] || inputVariants.default;
  const widthClass = fullWidth ? 'w-full' : '';
  
  const hasLeftIcon = Boolean(leftIcon);
  const hasRightIcon = Boolean(rightIcon);
  
  const inputClasses = twMerge(
    'block rounded-md border bg-white text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none',
    sizeClass,
    variantClass,
    hasLeftIcon ? 'pl-10' : '',
    hasRightIcon ? 'pr-10' : '',
    props.disabled ? 'opacity-50 cursor-not-allowed' : '',
    widthClass,
    className
  );
  
  const renderInput = () => (
    <div className={`relative ${widthClass}`}>
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {leftIcon}
        </div>
      )}
      <input
        ref={ref}
        id={id}
        className={inputClasses}
        {...props}
      />
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {rightIcon}
        </div>
      )}
    </div>
  );
  
  // If there's no label or help text, just return the input
  if (!label && !helpText) {
    return renderInput();
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
      {renderInput()}
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
Input.displayName = 'Input';

export { Input };
