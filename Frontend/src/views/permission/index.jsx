import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
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
  return (
    <form className="permission-form">
      <TextField
        className="col-12 col-lg-6 "
        id="rut"
        label="Rut"
        value={userData.rut}
        onChange={changeUserData("rut")}
      />
      <TextField
        className="col-12 col-lg-6 "
        id="name"
        label="Nombre"
        value={userData.name}
        onChange={changeUserData("name")}
      />
      <TextField
        className="col-12 col-lg-6 "
        id="address"
        label="Dirección"
        value={userData.address}
        onChange={changeUserData("address")}
      />
      <TextField
        className="col-12 col-lg-6 "
        id="reason"
        label="Motivo del permiso"
        value={userData.rut}
        onChange={changeUserData("rut")}
      />
      <Button
        className="mt-3"
        variant="contained"
        color="primary"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
};

export default Permission;
