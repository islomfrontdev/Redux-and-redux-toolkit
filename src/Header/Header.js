import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { authActions } from "../store/auth";
export default function Header() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <button onClick={() => handleLogOut()}>Logout</button>
    </div>
  );
}
