import React from 'react';

const List = ({ items }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {items.map((item, index) => (
        <div key={index} className="py-2">
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-gray-500">{item.time}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
