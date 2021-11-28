import React from "react";
import { Button } from "..";

const Form = ({ title, handleSubmit, handleChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <input
          type="email"
          placeholder="Email.."
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Password.."
          onChange={handleChange}
          required
        />
        <Button type="submit">{title}</Button>
      </form>
    </div>
  );
};

export default Form;
