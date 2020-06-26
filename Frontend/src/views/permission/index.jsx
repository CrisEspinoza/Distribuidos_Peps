import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
const blankUser = {
  rut: "",
  name: "",
  adress: "",
  goal: "",
};
const Permission = ({ ...props }) => {
  const [userData, setUserData] = useState({ ...blankUser });
  const changeUserData = (key) => (value) => {
    setUserData({ ...userData, [key]: value.target.value });
  };
  const submitData = () => {
    axios
      .post("http://localhost:1818/form", userData)
      .then((result) => {
        console.log(
          "Tu solicitus ha sido realizada satisfactoriamente: ",
          result
        );
      })
      .catch((e) => console.log("Error al procesar la solicitud: ", e));
    setTimeout(() => {}, 10000);
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
        id="adress"
        label="Dirección"
        value={userData.adress}
        onChange={changeUserData("adress")}
      />
      <TextField
        className="col-12 col-lg-6 "
        id="goal"
        label="Motivo del permiso"
        value={userData.goal}
        onChange={changeUserData("goal")}
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
