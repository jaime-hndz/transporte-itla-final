import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const NavTo = ({ icon, to, start = false,text }) => {
  let nav = useNavigate();
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: "#0E6CB4" }}
      startIcon={start ? icon : null}
      endIcon={start ? null : icon}
      onClick={() => nav(to)}
    >
      {text}
    </Button>
  );
};
