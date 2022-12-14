import React from 'react';
import { Notification } from '../components/Utils/Notification';

const NotificationContext = React.createContext(null);

export const NotificationProvider = ({children}) => {

    const [msg, setMsg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState(undefined);

    const getNotification = (msg,severity) => {
        setSeverity(severity);
        setOpen(true);
        setMsg(msg);
    };

    const handleClose = ()=>{
        setOpen(false)
    }

    const value = {
      getNotification,
    }
    return (
      <NotificationContext.Provider value={value}>
        <Notification
          handleClose={handleClose}
          open={open}
          severity={severity}
          msg={msg}
        />
        {children}
      </NotificationContext.Provider>
    );


};

export const useNotification = () =>{
    const context = React.useContext(NotificationContext)
    if (!context) throw new Error("No existe el contexto");
    return context;
    
}