import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "universal-cookie";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Balance } from "./Balance.js";
import { usuario as User } from "../../../helpers/UserProvider.js";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

export const LogOut = ({ usuario }) => {
  
  let nav = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const LoggingOut = () => {
    cookies.remove("usuario", { path: "/" });
    window.location.href = "./login";
  };

  const ToBalance = () => {
    nav('/saldo')
  }


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
          anchorEl={anchorEl}
          // anchorOrigin={{
          //   vertical: "top",
          //   horizontal: "right",
          // }}
          // keepMounted
          // transformOrigin={{
          //   vertical: "top",
          //   horizontal: "right",
          // }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} style={{cursor: 'default'}} disableTouchRipple>
            {usuario}
          </MenuItem>
          <MenuItem onClick={ToBalance} divider>       
            {User.estudiantes[0] ? <Balance saldo={User.estudiantes[0].saldo} /> : <div style={{color: 'blue'}}>Administrador/a</div>}
          </MenuItem>
          <MenuItem onClick={LoggingOut}>       
            Cerrar sesión &nbsp;<LogoutIcon size='small' />
          </MenuItem>
        </Menu>
        
      </div>
    </>
  );
};
