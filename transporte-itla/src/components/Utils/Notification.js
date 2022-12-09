import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from "react";
import { useState, useEffect} from "react";
// import Slide from "@mui/material/Slide";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Notification = ({tipo, mensaje}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true)
  }, [])
  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // TransitionComponent={<Slide  direction="down" />}
      >
        <Alert onClose={handleClose} severity={tipo} sx={{ width: "100%" }}>
          {mensaje}
        </Alert>
      </Snackbar>
  );
};
