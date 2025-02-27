import React from 'react';

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrease}
        className="bg-gray-300 p-2 rounded hover:bg-gray-400"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={onIncrease}
        className="bg-gray-300 p-2 rounded hover:bg-gray-400"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
