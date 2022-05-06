import React, { useState, useEffect } from 'react';
import { Map, Button, Table } from '../../components';
//import { Login, currentUser } from '../Login/Login';

import './../../App.scss';

const Reservation = () => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [refetch, setRefetch] = useState(0);
  // const [status, setStatus] = useState(false);

  const getData = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/reservation/${date}`)
      .then((res) => res.json())
      .then((items) => {
        if (!items || items.length < 0 || items.err) {
          return setError(items.err || 'Unknown error');
        }
        /*console.log(
          data.map((row, [index]) =>
            Object.values(row).map((item) => `${item}`)
          )
        );*/
        return setData(items);
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    getData();
  }, [refetch]);

  const [regions, setRegions] = useState([]);

  //REGION
  const handleRegionsClick = (e) => {
    setRegions([e.currentTarget]);
    //console.log(date);
    //console.log(data[0]);
    //console.log(regions);

    fetch(
      `${process.env.REACT_APP_BASE_URL}/v1/reservation/status/${e.currentTarget.id}/${date}`
    )
      .then((res) => res.json())
      .then((items) => {
        if (!items || items.length === 0 || items.err) {
          return setError(items.err || 'Unknown error');
        }
        return alert('vieta jau yra rezervuota!');
        //setData(items);
      })
      .catch((err) => setError(err.message));
    //e.currentTarget.setAttribute('class', 'red');
  };

  const [date, setDate] = useState([]);
  const handleDateClick = (e) => {
    setDate(e.target.value);
    setRefetch(refetch + 1);
  };

  const [name, setName] = useState([]);
  const handleUserClick = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = (e) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/reservation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: `${name}`,
        workplaceid: `${regions.map((regions) => regions.id)}`,
        res_day: `${date}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(
          `Reservation success! ${regions.map((regions) => regions.id)} ${date}`
        );
        setRefetch(refetch + 1);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='app-body'>
      <h2>Select Date to see availability</h2>

      <div className='top-section'>
        <div className='input-container'>
          <input type='date' onChange={handleDateClick} value={date} />
        </div>
      </div>

      <h2>Write your Name</h2>

      <div className='top-section'>
        <div className='input-container'>
          <input type='text' onChange={handleUserClick} value={name} />
        </div>
      </div>

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
          {!data && !error && <h2>Loading...</h2>}
          {error && <h2>{error}</h2>}
          {data && (
            <Table
              headings={['Workplace', 'Reservation_day', 'User']}
              data={data}
            />
          )}
        </div>
      </div>
      <div className='maps-container'>
        <Map height={50} width={87} handleClick={handleRegionsClick} />
      </div>
    </div>
  );
};

export default Reservation;
