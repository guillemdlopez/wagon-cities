import React from 'react';
import City from './city';

const CityList = (props) => {
  return (
    <div className="list-group cities">
      {props.cities.map(city => <City name={city.name} key={city.name} />)}
    </div>
  );
};

export default CityList;
