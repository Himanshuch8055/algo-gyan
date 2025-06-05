import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * A flexible card component with different variants
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'outline'|'elevated'|'flat'} [props.variant='default'] - Card style variant
 * @param {boolean} [props.hoverable] - Adds hover effect if true
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional div props
 * @returns {JSX.Element} Card component
 */
const Card = ({
  children,
  className = '',
  variant = 'default',
  hoverable = false,
  ...props
}) => {
  const baseClasses = 'rounded-lg transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    outline: 'border border-gray-200 bg-transparent',
    elevated: 'bg-white shadow-sm',
    flat: 'bg-gray-50',
  };
  
  const hoverClasses = hoverable 
    ? 'hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5' 
    : '';
  
  return (
    <div
      className={twMerge(
        baseClasses,
        variantClasses[variant] || variantClasses.default,
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card header component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Header content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} CardHeader component
 */
const CardHeader = ({ children, className = '', ...props }) => (
  <div
    className={twMerge('px-6 py-4 border-b border-gray-100', className)}
    {...props}
  >
    {children}
  </div>
);

/**
 * Card title component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Title content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} CardTitle component
 */
const CardTitle = ({ children, className = '', ...props }) => (
  <h3
    className={twMerge('text-lg font-semibold text-gray-900', className)}
    {...props}
  >
    {children}
  </h3>
);

/**
 * Card description component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Description content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} CardDescription component
 */
const CardDescription = ({ children, className = '', ...props }) => (
  <p
    className={twMerge('mt-1 text-sm text-gray-500', className)}
    {...props}
  >
    {children}
  </p>
);

/**
 * Card content component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.padded=true] - Adds padding if true
 * @returns {JSX.Element} CardContent component
 */
const CardContent = ({
  children,
  className = '',
  padded = true,
  ...props
}) => (
  <div
    className={twMerge(padded ? 'p-6' : '', className)}
    {...props}
  >
    {children}
  </div>
);

/**
 * Card footer component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Footer content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} CardFooter component
 */
const CardFooter = ({ children, className = '', ...props }) => (
  <div
    className={twMerge('px-6 py-4 border-t border-gray-100', className)}
    {...props}
  >
    {children}
  </div>
);

// Attach subcomponents to Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };
