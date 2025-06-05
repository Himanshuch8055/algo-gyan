import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const toastIcons = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
};

const toastColors = {
  success: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    icon: 'text-amber-400',
    border: 'border-amber-100',
  },
  error: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    icon: 'text-amber-400',
    border: 'border-amber-100',
  },
  warning: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    icon: 'text-amber-400',
    border: 'border-amber-100',
  },
  info: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    icon: 'text-amber-400',
    border: 'border-amber-100',
  },
};

/**
 * Toast notification component
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the toast
 * @param {string} props.message - Message to display
 * @param {'success'|'error'|'warning'|'info'} [props.type='info'] - Type of toast
 * @param {number} [props.duration=5000] - Duration in milliseconds before auto-dismiss
 * @param {function} props.onDismiss - Callback when toast is dismissed
 * @param {boolean} [props.autoDismiss=true] - Whether to auto-dismiss the toast
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Toast component
 */
const Toast = ({
  id,
  message,
  type = 'info',
  duration = 5000,
  onDismiss,
  autoDismiss = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const Icon = toastIcons[type] || InformationCircleIcon;
  const colors = toastColors[type] || toastColors.info;
  
  // Auto-dismiss the toast after the specified duration
  useEffect(() => {
    if (!autoDismiss || !isVisible || isHovered) return;
    
    const timer = setTimeout(() => {
      handleDismiss();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [isVisible, isHovered, duration, autoDismiss]);
  
  // Handle dismiss with animation
  const handleDismiss = () => {
    setIsExiting(true);
    
    // Wait for the exit animation to complete before removing
    setTimeout(() => {
      setIsVisible(false);
      if (onDismiss) {
        onDismiss(id);
      }
    }, 300); // Match this with the CSS transition duration
  };
  
  // Don't render if not visible
  if (!isVisible) return null;
  
  return (
    <div 
      className={twMerge(
        'relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg',
        'transform transition-all duration-300 ease-in-out',
        isExiting ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0',
        colors.bg,
        colors.border,
        'mb-2',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="alert"
      aria-live="assertive"
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${colors.icon}`}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className={`ml-3 w-0 flex-1 pt-0.5 ${colors.text}`}>
            <p className="text-sm font-medium">{message}</p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className={`inline-flex rounded-md ${colors.text} hover:${colors.icon} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500`}
              onClick={handleDismiss}
              aria-label="Dismiss"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {autoDismiss && (
        <div 
          className={twMerge(
            'h-1 w-full bg-opacity-25',
            colors.icon.replace('text-', 'bg-'),
            isHovered ? 'animate-pause' : ''
          )}
          style={{
            animation: `progress ${duration}ms linear forwards`,
            animationPlayState: isHovered ? 'paused' : 'running',
          }}
        />
      )}
      <style jsx global>{`
        @keyframes progress {
          0% { width: 100%; }
          100% { width: 0%; }
        }
        .animate-pause {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export { Toast };
