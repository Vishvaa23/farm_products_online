import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label> Name:  </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
        />
        <br /><br />
        <label> Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <br /><br />
        <label> Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <br />
      Already have an account? 
      <button onClick={() => props.onFormSwitch('login')}>Login here</button>
    </div>
  );
};