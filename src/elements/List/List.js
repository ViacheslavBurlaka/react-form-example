import React from 'react';

const List = ({data}) => {
  const items = Object.entries(data).map((item, index) => {
    const name = item[0];
    const value = item[1];

    if (value.length) {
      return (
        <li key={index}><strong>{name}:</strong> <span>{value}</span></li>
      )
    }
    return false;
  });

  return (
    <ul className="List">
      {items}
    </ul>
  );
};

export default List;
