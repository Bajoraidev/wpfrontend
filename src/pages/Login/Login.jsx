import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

const Login = () => {
  const [input, setInput] = useState();
  const Navigate = useNavigate();

  return (
    <div>
      <div className='formContainer'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(input),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.token) {
                  window.localStorage.setItem('token', data.token);
                  Navigate('/', { replace: true });
                  return alert('Success!');
                }
                return alert(data.err);
              })
              .catch((err) => alert(err.message))
              .finally(() => e.target.reset());
          }}
        >
          <h1>Login</h1>
          <input
            type='email'
            placeholder='Email..'
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
            }}
            required
          />

          <input
            type='password'
            placeholder='Password..'
            onChange={(e) => {
              setInput({
                ...input,
                password: e.target.value,
              });
            }}
            required
          />

          <Button type='submit'>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
