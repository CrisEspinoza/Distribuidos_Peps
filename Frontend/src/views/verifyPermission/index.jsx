import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { PrimaryButton } from "../../components";
import axios from "axios";
import "./index.scss";

const VerifyPermission = ({ ...props }) => {
  const [permission, setpermission] = useState("");
  const [permissionStatus, setPermissionStatus] = useState({
    valid: false,
    wasQueried: false,
    error: "",
  });

  useState(() => {
    return () =>
      setPermissionStatus({ valid: false, wasQueried: false, error: "" });
  });

  const submitData = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/form/${permission}/valid`)
      .then((result) => {
        console.log("La solicitud ha sido realizada satisfactoriamente: ");
        console.log(result.data.valid);
        setPermissionStatus({
          valid: result.data.valid,
          wasQueried: true,
          error: "",
        });
      })
      .catch(({ response }) => {
        if (response.status === 404) {
          console.log("Error al procesar la solicitud: ", response);
          setPermissionStatus({
            valid: false,
            wasQueried: true,
            error: "El permiso que has solicitado no existe",
          });
        }
        console.log("Error al procesar la solicitud: ", response);
        setPermissionStatus({
          valid: false,
          wasQueried: true,
          error:
            "Ha ocurrido un problema al procesar tu solicitud, inténtalo nuevamente en unos minutos",
        });
      });
  };
  const showResult = () => {
    const message = permissionStatus.valid ? "Vigente" : "Inactivo";
    if (permissionStatus.error === "") {
      return (
        <div className="mt-4 result-box">
          <p>
            Tu permiso se encuentra
            <span style={{ color: permissionStatus.valid ? "#34A745" : "red" }}>
              {message}
            </span>
          </p>
        </div>
      );
    }
    return (
      <div className="mt-4 error-box">
        <p>
          <span style={{ color: "white" }}>{permissionStatus.error}</span>
        </p>
      </div>
    );
  };
  return (
    <div className="container mt-5 justify-content-center">
      <h1>Verificación de permiso</h1>
      <p>
        Ingresa en el campo 'Código de permiso' ingresa el código que se te ha
        entregado luego de generar el permiso de circulación{" "}
      </p>
      <form>
        <TextField
          className="col-12 col-lg-10 pr-lg-1 "
          id="permission-code"
          label="Código de permiso"
          value={permission}
          onChange={(e) => setpermission(e.target.value)}
        />
        <div className="mt-4">
          <PrimaryButton variant="contained" size="medium" onClick={submitData}>
            Validar permiso
          </PrimaryButton>
        </div>
      </form>
      {permissionStatus.wasQueried && showResult()}
    </div>
  );
};

export default VerifyPermission;
