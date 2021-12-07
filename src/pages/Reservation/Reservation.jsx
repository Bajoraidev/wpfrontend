import React, { useState, useEffect } from 'react';
import { Map, Button, Section, Table } from '../../components';

import './../../App.scss';

const Reservation = () => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [refetch, setRefetch] = useState(0);

  const getData = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/reservation/`)
      .then((res) => res.json())
      .then((items) => {
        if (!items || items.length < 0 || items.err) {
          return setError(items.err || 'Unknown error');
        }
        return setData(items);
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    getData();
  }, [refetch]);

  const [regions, setRegions] = useState([]);

  const handleRegionsClick = (e) => {
    setRegions([e.currentTarget]);
    e.currentTarget.setAttribute('class', 'red');
  };

  const handleButtonClick = (e) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/reservation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        workplaceid: `${regions.map((regions) => regions.id)}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Reservation success! ${regions.map((regions) => regions.id)}`);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='app-body'>
      <h2>Select Workplace on the map</h2>
      <div className='top-section'>
        <div className='input-container'>
          <input
            id='seat-box'
            type='text'
            defaultValue={regions.map((regions) => regions.id)}
          />
          <Button type='submit' handleButtonClick={handleButtonClick}>
            Book seat
          </Button>
        </div>
        <div>
          {!data && !error && <h2 className='title'>Loading...</h2>}
          {error && <h2 className='title'>{error}</h2>}
          {data && <Table headings={['Workplace', 'Timestamp']} data={data} />}
        </div>
      </div>
      <div className='maps-container'>
        <Map height={50} width={87} handleClick={handleRegionsClick} />
      </div>
    </div>
  );
};

export default Reservation;
