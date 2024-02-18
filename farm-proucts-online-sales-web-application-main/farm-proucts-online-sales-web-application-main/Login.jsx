import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    console.log(email);  
  }
  return (
    <div className="auth-form-container">
      <h1>DGH service</h1>

      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
        <label> Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <br></br><br></br>
        <label> Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <br></br><br></br>
        <button type="submit">Login</button>
      </form>
      <br></br>
      Don't have an account <button onClick={() => props.onFormSwitch('register')}>Create an account</button>
    </div>
  );
};