import React from 'react';
import { useState } from 'react';
import Map from '../../components/Map/Map';

const Reservation = () => {
  const [regions, setRegions] = useState([]);

  const handleRegionsClick = (e) => {
    if (regions.includes(e.currentTarget)) {
      //remove css class if item already exists
      e.currentTarget.setAttribute('class', 'yellow');
      const boss = regions.filter((region) => {
        return region.id !== e.currentTarget.id;
      });
      return setRegions([...boss]);
    }
    //add css class
    e.currentTarget.setAttribute('class', 'red');
    return setRegions([...regions, e.currentTarget]);
  };

  return (
    <div className='app-body'>
      {/* <WorldMap /> */}
      <div class='input-container'>
        <label htmlFor='states-box'>Selected Workplace: </label>
        <input
          id='states-box'
          type='text'
          value={regions.map((region) => region.id).join()}
        />
      </div>
      <div class='maps-container'>
        <Map height={200} width={40} handleClick={handleRegionsClick} />
      </div>
    </div>
  );
};

export default Reservation;
