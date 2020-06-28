import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
const blankUser = {
  rut: "",
  name: "",
  address: "",
  reason: "",
};
const Permission = ({ ...props }) => {
  const [userData, setUserData] = useState({ ...blankUser });
  const changeUserData = (key) => (value) => {
    setUserData({ ...userData, [key]: value.target.value });
  };
  const history = useHistory();
  const submitData = () => {
    axios
      .post("http://localhost:1818/form", userData)
      .then((result) => {
        console.log("La solicitud ha sido realizada satisfactoriamente: ");
        history.push("permissionSuccess", { permission: result.data });
      })
      .catch((e) => console.log("Error al procesar la solicitud: ", e));
  };
  return (
    <form className="permission-form">
      <TextField
        className="col-12 col-lg-6 pr-lg-1 "
        id="rut"
        label="Rut"
        value={userData.rut}
        onChange={changeUserData("rut")}
      />
      <TextField
        className="col-12 col-lg-6 pr-lg-1"
        id="name"
        label="Nombre"
        value={userData.name}
        onChange={changeUserData("name")}
      />
      <TextField
        className="col-12 col-lg-6 pr-lg-1"
        id="address"
        label="Dirección"
        value={userData.address}
        onChange={changeUserData("address")}
      />
      <TextField
        className="col-12 col-lg-6 pr-lg-1"
        id="reason"
        label="Motivo del permiso"
        value={userData.reason}
        onChange={changeUserData("reason")}
      />
      <Button
        className="mt-3"
        variant="contained"
        color="primary"
        onClick={submitData}
      >
        Enviar
      </Button>
    </form>
  );
};

export default Permission;
