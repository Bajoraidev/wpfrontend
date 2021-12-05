import React from 'react';
import { useState } from 'react';
import { Map } from '../../components';
import './../../App.scss';

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
      <div className='input-container'>
        <label htmlFor='states-box'>Selected Workplace: </label>
        <input
          id='states-box'
          type='text'
          defaultValue={regions.map((region) => region.id).join()}
        />
      </div>
      <div className='maps-container'>
        <Map height={20} width={200} handleClick={handleRegionsClick} />
      </div>
    </div>
  );
};

export default Reservation;
