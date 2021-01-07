import React from 'react';

const City = (props) => {
  return (
    <li className="list-group-item">
      <p>{props.name}</p>
    </li>
  );
};

export default City;
