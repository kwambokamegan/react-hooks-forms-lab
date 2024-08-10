import React from 'react';

function ItemList({ items }) {
  return (
    <div>
      {items.map(item => (
        <span key={item.id}>{item.name}</span>
      ))}
    </div>
  );
}

export default ItemList;
