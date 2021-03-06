import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"
import userService from "../service/userService";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";
import "../styles/form.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const handleSubmit = (e) => {
    let errorFlag = false;
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    if (email === "") {
      errorFlag = true;
      setEmailError(true);
    }
    if (password === "") {
      errorFlag = true;
      setPasswordError(true);
    }

    if (errorFlag) {
      console.log("Login Error");
    } else {
      let data = {
        email: email,
        password: password,
      };
      userService
        .login(data)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("Account", data.email);
            localStorage.setItem("token", response.data.token);
            console.log("Login successfully");
            setSuccess(true);
          } else {
            setFail(true);
            console.log("Login failed");
            console.log(response.data);
          }
        })
        .catch((e) => {
          setFail(true);
          console.log(e);
        });
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form id="login-form" onSubmit={handleSubmit} autoComplete="off">
      <Paper elevation={5} sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <span className="multicolortext">Book Store</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">to continue to Book Store</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email eg:name@gmail.com"
              variant="outlined"
              type="email"
              error={emailError}
              helperText={emailError ? "Email cannot be empty" : ""}
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? "Password cannot be empty" : ""}
            />
          </Grid>
          <Grid item xs={12} align="left">
            <FormControlLabel
              control={<Checkbox />}
              label="Show password"
              onClick={handleShowPassword}
            />
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Link} to="/forgot">
              Forgot password
            </Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button variant="contained" type="submit" id="submit">
              Submit
            </Button>
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Link} to="/">
              Create account
            </Button>
          </Grid>
        </Grid>
        {fail && (
          <Alert
            severity="error"
            onClose={() => {
              setFail(false);
            }}
          >
            Login Failed!!
          </Alert>
        )}
      </Paper>
      {success ? <Redirect to="/dashboard" /> : null}
    </form>
  );
};

export default Login;