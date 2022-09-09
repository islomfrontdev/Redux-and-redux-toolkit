import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { authActions } from "../store/auth";

export default function Auth() {
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div>
      <h1>Auth</h1>
      <div>
        <form>
          <label>Email</label>
          <input type={"text"} placeholder="your email" />
          <label>Password</label>
          <input type={"password"} placeholder="your email" />
          <br />
          <button onClick={(e) => handleRegister(e)}>Register</button>
        </form>
      </div>
    </div>
  );
}
