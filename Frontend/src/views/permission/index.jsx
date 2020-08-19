import React, { useState } from "react";
import { Button, TextField, withStyles } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../components";
const blankUser = {
  rut: "",
  name: "",
  address: "",
  reason: "",
};
const reverseString = (value) => {
  if (!value) return "";
  return value.split("").reverse().join("");
};
const parseRutToString = (arr) => {
  if (!arr) return null;
  let formattedRut = arr.reduce((prev, curr, curr_index) => {
    if (curr_index === 0) {
      return prev;
    }
    if (curr_index === 1) {
      return curr + "-";
    }
    return `${prev}${curr}.`;
  }, "");
  formattedRut = reverseString(formattedRut).slice(1)
  return formattedRut
};

const Permission = ({ ...props }) => {
  const [userData, setUserData] = useState({ ...blankUser });
  const changeUserData = (key) => (value) => {
    if (key === "rut") {
      console.log("rut: ", value.target.value);
      let rut = reverseString(value.target.value);
      let rutArr = rut.match(
        "^([k]|[1-9]{1})([1-9]{1,3})([1-9]{1,3})([1-9]{1,3})$"
      );
      let rutFormatted = parseRutToString(rutArr);
      console.log("value Match");
      console.log(rutFormatted);
    }
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
    <form className="permission-form mt-3">
      <h1>Permiso de circulación</h1>
      <p>
        Completa el formulario para solicitar tu permiso de circulación, una vez
        completo presiona el botón Enviar, este permiso dura 12 horas.
      </p>
      <TextField
        className="col-12 col-lg-10 pr-lg-1 "
        id="rut"
        label="Rut"
        value={userData.rut}
        onChange={changeUserData("rut")}
      />
      <TextField
        className="col-12 col-lg-10 pr-lg-1"
        id="name"
        label="Nombre"
        value={userData.name}
        onChange={changeUserData("name")}
      />
      <TextField
        className="col-12 col-lg-10 pr-lg-1"
        id="address"
        label="Dirección"
        value={userData.address}
        onChange={changeUserData("address")}
      />
      <TextField
        className="col-12 col-lg-10 pr-lg-1"
        id="reason"
        label="Motivo del permiso"
        value={userData.reason}
        onChange={changeUserData("reason")}
      />
      <div className="mt-5 col-lg-12">
        <PrimaryButton variant="contained" size="medium" onClick={submitData}>
          Enviar
        </PrimaryButton>
      </div>
    </form>
  );
};

export default Permission;
