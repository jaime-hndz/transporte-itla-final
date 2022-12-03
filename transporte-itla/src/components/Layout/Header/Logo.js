import React from "react";
import logo from "../../../resources/itla-transporte.svg";
import { useNavigate } from "react-router-dom";

export const Logo = () => {

  let nav = useNavigate()
  const GoHome = () =>{
    nav('/')
  }
  return (
    <div className="logo-container" onClick={GoHome}>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};
