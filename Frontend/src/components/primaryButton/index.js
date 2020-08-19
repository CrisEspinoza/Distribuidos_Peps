import React from "react";
import { Button, TextField, withStyles } from "@material-ui/core";

const ButtonConfirm = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#34A745",
    "&:hover": {
      backgroundColor: "#2a8e39",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
  },
}))(Button);

export default ButtonConfirm;
