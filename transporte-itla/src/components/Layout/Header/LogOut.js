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
import { Tooltip } from "@mui/material";

const cookies = new Cookies();

export const LogOut = ({ usuario }) => {
  
  let nav = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const LoggingOut = () => {
    cookies.remove("usuario", { path: "/" });
    window.location.href = "./";
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
      <div>
        <Tooltip title='usuario'>
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
        </Tooltip>
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
          <MenuItem onClick={User.estudiantes[0] ? ToBalance: null} divider>       
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
