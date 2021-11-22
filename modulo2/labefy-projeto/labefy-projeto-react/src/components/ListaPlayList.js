import React from 'react';

const ListItem = ({name, onDelete, id}) => {
  return (
    <div className="Item-container">
      <h1>{name}</h1>
      <button onClick={onDelete}>Excluir</button>
      {/*  */}
    </div>
  );
};

export default ListItem;