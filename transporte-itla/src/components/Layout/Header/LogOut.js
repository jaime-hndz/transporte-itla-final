import React from "react";
// import LogoutIcon from "@mui/icons-material/Logout";
// import Cookies from "universal-cookie";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import { Balance } from './Balance.js';
// import { usuario } from "../../../helpers/UserProvider.js";

// const cookies = new Cookies();

export const LogOut = ({ usuario }) => {
  // const LoggingOut = () => {
  //   cookies.remove("usuario", { path: "/" });
  //   window.location.href = "./login";
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* <div
        style={{ display: "flex", cursor: "pointer", color: "black" }}
        onClick={LoggingOut}
      >
        <div>{usuario}</div>
        <div>
          <LogoutIcon />
        </div>
      </div> */}
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
        {/* {usuario.estudiantes[0] ? <Balance saldo={usuario.estudiantes[0].saldo} /> : <div style={{color: 'blue'}}>Administrador/a</div>} */}
      </div>
    </>
  );
};
