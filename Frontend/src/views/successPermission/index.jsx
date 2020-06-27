import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import moment from "moment";
import { Button } from "@material-ui/core";
const SuccessPermision = () => {
  const location = useLocation();
  const { permission } = location.state;
  const history = useHistory();
  console.log("permission: ", permission);
  return (
    <div>
      <h2>Tu permiso ha sido otorgado con éxito.</h2>
      <h3>El id de tu permiso es: {permission.id}</h3>
      <p>
        Tu pedido es vigente entre:{" "}
        {moment(permission.stardDate).format("DD/MM/YYYY HH:mm:ss")} -{" "}
        {moment(permission.finishDate).format("DD/MM/YYYY HH:mm:ss")}
      </p>
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push("/")}
      >
        Pedir otro permiso
      </Button>
    </div>
  );
};

export default SuccessPermision;
