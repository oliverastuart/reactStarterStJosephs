import React, { useState } from "react";
import Logo from "../../resources/assets/josephsLogo.png";
import { PRUSSIAN_BLUE } from "../../resources/constants/Theme";
import { Button, TextField, Typography } from "@mui/material";
import { LOGIN } from "../../resources/constants/String";
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../../resources/constants/Url";
export default function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function validateUser() {
    if (email === "stuart@gmail.com" && password === "stuart123") {
      navigate(PATH_HOME);
    } else {
      alert("not valid");
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: PRUSSIAN_BLUE,
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt=""></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "30%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color={PRUSSIAN_BLUE} fontSize={22} fontWeight={22}>
            {LOGIN}
          </Typography>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ marginTop: 10 }}
            id="emailinput1"
            label="Email-ID"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={password}
            onChange={(event) => {
              console.log("hello1", event);
              setPassword(event.target.value);
            }}
            style={{ marginTop: 10 }}
            id="passwordinput1"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
          />
          <Button
            style={{ marginTop: 10 }}
            variant="contained"
            fullWidth
            color="success"
            onClick={validateUser}
          >
            {LOGIN}
          </Button>
        </div>
      </div>
    </div>
  );
}
