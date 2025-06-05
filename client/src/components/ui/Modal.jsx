import React, { useEffect, useRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Custom hook to handle outside clicks
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// Custom hook to handle escape key press
const useEscapeKey = (handler) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handler(event);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handler]);
};

/**
 * Modal component for dialogs, alerts, and other overlays
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls the visibility of the modal
 * @param {function} props.onClose - Callback when modal is closed
 * @param {string} [props.title] - Modal title
 * @param {React.ReactNode} props.children - Modal content
 * @param {React.ReactNode} [props.footer] - Footer content (e.g., action buttons)
 * @param {string} [props.size='md'] - Size of the modal (sm, md, lg, xl, full)
 * @param {boolean} [props.closeOnOverlayClick=true] - Close modal when clicking outside
 * @param {boolean} [props.closeOnEscape=true] - Close modal when pressing escape key
 * @param {boolean} [props.showCloseButton=true] - Show close button in the header
 * @param {string} [props.className] - Additional CSS classes for the modal content
 * @param {string} [props.overlayClassName] - Additional CSS classes for the overlay
 * @param {Object} [props.contentProps] - Additional props for the modal content
 * @returns {React.ReactPortal|null} Modal component or null if not open
 */
const Modal = ({
  isOpen = false,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
  overlayClassName = '',
  contentProps = {},
}) => {
  const modalRef = useRef(null);
  
  // Handle outside clicks
  useOnClickOutside(modalRef, closeOnOverlayClick ? onClose : () => {});
  
  // Handle escape key
  useEscapeKey(closeOnEscape ? onClose : () => {});
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // Define modal size classes
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full w-full m-4',
  };
  
  if (!isOpen) return null;
  
  return createPortal(
    <div 
      className={twMerge(
        'fixed inset-0 z-50 overflow-y-auto',
        'flex items-center justify-center',
        'bg-black bg-opacity-50 backdrop-blur-sm',
        'transition-opacity duration-300',
        overlayClassName
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className={twMerge(
          'relative bg-white rounded-lg shadow-xl',
          'w-full mx-4 my-8',
          sizeClasses[size] || sizeClasses.md,
          'transform transition-all duration-300',
          'max-h-[90vh] overflow-y-auto',
          className
        )}
        {...contentProps}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {title && (
              <h3 
                id="modal-title" 
                className="text-lg font-medium text-gray-900"
              >
                {title}
              </h3>
            )}
            {showCloseButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
                aria-label="Close"
              >
                <XMarkIcon className="h-5 w-5" />
              </Button>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// Modal components
const ModalHeader = ({ children, className = '', ...props }) => (
  <div 
    className={twMerge('px-6 py-4 border-b border-gray-200', className)}
    {...props}
  >
    {children}
  </div>
);

const ModalBody = ({ children, className = '', ...props }) => (
  <div 
    className={twMerge('p-6', className)}
    {...props}
  >
    {children}
  </div>
);

const ModalFooter = ({ children, className = '', ...props }) => (
  <div 
    className={twMerge('px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg', className)}
    {...props}
  >
    <div className="flex justify-end space-x-3">
      {children}
    </div>
  </div>
);

// Attach subcomponents to Modal
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
