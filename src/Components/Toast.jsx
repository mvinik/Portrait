import React, { useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Hide toast after 3 seconds

    return () => clearTimeout(timer); // Clear timeout if the component is unmounted
  }, [message, onClose]);

  const toastStyles = {
    success: 'bg-green-500',
    error: 'bg-red-400',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <div
      className={`fixed top-20 right-4 flex justify-center items-center p-4 rounded shadow-lg ${toastStyles[type]} text-white`}
      role="alert"
    >
      <div className="flex items-center space-x-2">
        <p>{message}</p>
        <button onClick={onClose} className="ml-2 font-semibold hover:text-gray-300">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
