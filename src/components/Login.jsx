import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionsAuth } from "../redux/auth-reducer";
import "../scss/Login.scss";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.auth = false;
  }, []);

  const setAuth = () => {
    localStorage.auth = true;
    dispatch(actionsAuth.setAuth(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    username === "Admin" && password === "12345"
      ? setAuth()
      : alert("Username or password incorrect");
    setUsername("");
    setPassword("");
  };

  return isAuth ? (
    <Redirect to="/list" />
  ) : (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={username}
        placeholder="enter username"
        onChange={({ target }) => setUsername(target.value)}
        className="form__login"
      />
      <input
        type="password"
        value={password}
        placeholder="enter password"
        onChange={({ target }) => setPassword(target.value)}
        className="form__password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
