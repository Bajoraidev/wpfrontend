import React from 'react';
import { useState } from 'react';
import { Map, Button } from '../../components';
import './../../App.scss';

const Reservation = () => {
  const [regions, setRegions] = useState([]);

  const handleRegionsClick = (e) => {
    /*if (regions.includes(e.currentTarget)) {
      //remove css class if item already exists
      e.currentTarget.setAttribute('class', 'yellow');
      const boss = regions.filter((region) => {
        return region.id !== e.currentTarget.id;
      });
      return setRegions([...boss]);
    }*/
    //add css class
    setRegions([e.currentTarget]);
    e.currentTarget.setAttribute('class', 'red');
  };

  const handleButtonClick = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/reservation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        workplaceid: 'Workplace2',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='app-body'>
      <div className='input-container'>
        <label htmlFor='seat-box'>Select Workplace on the map</label>
        <input
          id='seat-box'
          type='text'
          defaultValue={regions.map((regions) => regions.id)}
        />
      </div>
      <Button type='submit' handleButtonClick={handleButtonClick}>
        Book
      </Button>
      <div className='maps-container'>
        <Map height={50} width={87} handleClick={handleRegionsClick} />
      </div>
    </div>
  );
};

export default Reservation;
