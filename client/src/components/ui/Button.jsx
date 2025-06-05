import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner } from './Spinner';

const buttonVariants = {
  primary: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  success: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
  danger: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
  warning: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400',
  outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  link: 'bg-transparent text-amber-600 hover:text-amber-800 hover:underline p-0',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/**
 * A customizable button component with loading state and various styles
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'outline'|'ghost'|'link'} [props.variant='primary'] - Button style variant
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 * @param {boolean} [props.isLoading] - Shows loading spinner when true
 * @param {boolean} [props.disabled] - Disables the button when true
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Additional button props
 * @returns {JSX.Element} Button component
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variantClasses = buttonVariants[variant] || buttonVariants.primary;
  const sizeClasses = buttonSizes[size] || buttonSizes.md;
  
  const loadingClasses = isLoading ? 'opacity-75 cursor-not-allowed' : '';
  
  return (
    <button
      className={twMerge(
        baseClasses,
        variantClasses,
        sizeClasses,
        loadingClasses,
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <span className="mr-2">
          <Spinner size="sm" variant={variant === 'ghost' || variant === 'link' ? 'dark' : 'light'} />
        </span>
      )}
      {children}
    </button>
  );
};

export { Button };
