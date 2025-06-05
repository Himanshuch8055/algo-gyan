import React from 'react';

const spinnerSizes = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

const spinnerColors = {
  primary: 'text-amber-600',
  secondary: 'text-gray-600',
  light: 'text-white',
  dark: 'text-gray-800',
  success: 'text-amber-500',
  danger: 'text-amber-500',
  warning: 'text-amber-500',
};

/**
 * A customizable loading spinner component
 * @param {Object} props - Component props
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} [props.size='md'] - Size of the spinner
 * @param {'primary'|'secondary'|'light'|'dark'|'success'|'danger'|'warning'} [props.variant='primary'] - Color variant
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Spinner component
 */
const Spinner = ({
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  const sizeClass = spinnerSizes[size] || spinnerSizes.md;
  const colorClass = spinnerColors[variant] || spinnerColors.primary;
  
  return (
    <svg
      className={`animate-spin ${sizeClass} ${colorClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export { Spinner };
