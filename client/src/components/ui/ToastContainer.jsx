import React, { useState, useCallback, useEffect } from 'react';
import { Toast } from './Toast';

export const ToastContext = React.createContext();

let toastCount = 0;

/**
 * Toast container component that manages and displays toast notifications
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {number} [props.limit=5] - Maximum number of toasts to display
 * @param {string} [props.position='top-right'] - Position of the toast container
 * @returns {JSX.Element} ToastContainer component
 */
export const ToastProvider = ({ 
  children, 
  limit = 5, 
  position = 'top-right',
}) => {
  const [toasts, setToasts] = useState([]);
  
  // Position classes for the toast container
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
  };
  
  // Add a new toast
  const addToast = useCallback(({ 
    message, 
    type = 'info', 
    duration = 5000,
    autoDismiss = true,
  }) => {
    const id = `toast-${toastCount++}`;
    
    setToasts(prevToasts => [
      ...prevToasts.slice(-(limit - 1)), // Keep only the last (limit-1) toasts
      { id, message, type, duration, autoDismiss },
    ]);
    
    return id;
  }, [limit]);
  
  // Remove a toast by ID
  const removeToast = useCallback((id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);
  
  // Clear all toasts
  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []); 
  
  // Context value
  const contextValue = {
    addToast,
    removeToast,
    clearAllToasts,
  };
  
  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div 
        className={`fixed z-50 flex flex-col space-y-2 ${positionClasses[position] || positionClasses['top-right']}`}
        style={{
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'auto',
        }}
      >
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            {...toast}
            onDismiss={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

/**
 * Hook to use the toast context
 * @returns {Object} Toast context with addToast, removeToast, and clearAllToasts methods
 */
export const useToast = () => {
  const context = React.useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  return context;
};

/**
 * Higher-order component to provide toast context
 * @param {React.ComponentType} Component - Component to wrap with toast context
 * @returns {React.ComponentType} Wrapped component with toast context
 */
export const withToast = (Component) => (props) => {
  const toast = useToast();
  return <Component {...props} toast={toast} />;
};

/**
 * Toast container component (alias for ToastProvider for backward compatibility)
 */
export const ToastContainer = ToastProvider;
