import React, { createContext, useContext, useState, cloneElement, Children } from 'react';
import { twMerge } from 'tailwind-merge';

const TabsContext = createContext({});

/**
 * Tabs component container
 * @param {Object} props - Component props
 * @param {string} [props.defaultValue] - Default active tab value
 * @param {React.ReactNode} props.children - Tab components
 * @param {string} [props.className] - Additional CSS classes
 * @param {function} [props.onValueChange] - Callback when active tab changes
 * @returns {JSX.Element} Tabs component
 */
const Tabs = ({
  defaultValue,
  children,
  className = '',
  onValueChange,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue || (children[0]?.props.value || ''));

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, onTabChange: handleTabChange }}>
      <div className={twMerge('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

/**
 * Tabs list component that contains the tab triggers
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - TabTrigger components
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} TabsList component
 */
const TabsList = ({ children, className = '', ...props }) => {
  const { activeTab, onTabChange } = useContext(TabsContext);
  
  return (
    <div 
      className={twMerge(
        'flex items-center border-b border-gray-200',
        className
      )}
      role="tablist"
      {...props}
    >
      {Children.map(children, (child) => {
        if (!child) return null;
        return cloneElement(child, {
          isActive: child.props.value === activeTab,
          onSelect: () => onTabChange(child.props.value),
        });
      })}
    </div>
  );
};

/**
 * Individual tab trigger component
 * @param {Object} props - Component props
 * @param {string} props.value - Unique value for the tab
 * @param {React.ReactNode} props.children - Tab content
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the tab is disabled
 * @param {boolean} [props.isActive] - Whether the tab is active (injected by TabsList)
 * @param {function} [props.onSelect] - Callback when tab is selected (injected by TabsList)
 * @returns {JSX.Element} TabTrigger component
 */
const TabTrigger = ({
  value,
  children,
  className = '',
  disabled = false,
  isActive = false,
  onSelect,
  ...props
}) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => !disabled && onSelect && onSelect()}
      className={twMerge(
        'px-4 py-2 text-sm font-medium transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2',
        isActive
          ? 'text-amber-600 border-b-2 border-amber-600'
          : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Tab content container
 * @param {Object} props - Component props
 * @param {string} props.value - Value of the tab this content belongs to
 * @param {React.ReactNode} props.children - Tab panel content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} TabContent component
 */
const TabContent = ({ value, children, className = '', ...props }) => {
  const { activeTab } = useContext(TabsContext);
  
  if (value !== activeTab) return null;
  
  return (
    <div
      role="tabpanel"
      className={twMerge('py-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Attach subcomponents to Tabs
Tabs.List = TabsList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export { Tabs };
