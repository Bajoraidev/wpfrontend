import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

const Register = () => {
  const [input, setInput] = useState();
  const Navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                alert('Registration was successful');
                setInput('');
                Navigate('/', { replace: true });
                // e.target.reset();
              }
            })
            .catch((err) => alert(err.message))
            .finally(() => e.target.reset());
        }}
      >
        <h1>Register</h1>
        <input
          type='email'
          placeholder='Email..'
          onChange={(e) => {
            setInput({ ...input, email: e.target.value.trim().toLowerCase() });
          }}
          required
        />
        <input
          type='text'
          placeholder='Password..'
          onChange={(e) => {
            setInput({ ...input, password: e.target.value });
          }}
          required
        />
        <Button type='submit'>Register</Button>
      </form>
    </div>
  );
};

export default Register;
