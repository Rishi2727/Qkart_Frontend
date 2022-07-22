import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import { useHistory, Link } from "react-router-dom";
import "./Register.css";


const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({ username: "", "password": "", "confirmPassword": "" });
  const api_url = config.endpoint;
  const history = useHistory()

  const register = async (formData) => {
    var op = {}
    setLoading(true)
    axios(api_url + '/auth/register', { method: 'POST', data: (formData) })
      .then((res) => res)
      .then(function (data) {
        setLoading(false)
        op = data
        console.log(op)
        enqueueSnackbar("Registration success .");
        setTimeout(function () {
          setData({ username: "", "password": "", "confirmPassword": "" });
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
          document.getElementById("confirmPassword").value = "";
          document.getElementById("btn").blur();
        },3000)
      })
      .catch(function (error) {
        setLoading(false)
        if (error.response && error.response.status && error.response.status===400) {
          enqueueSnackbar(" Username is already taken success ");
        }
        else if (error.response && error.response.status && error.response.status === 201) { 
          enqueueSnackbar("Registration success .");
          history.push("/login");
        }
        else if (error.response && error.response.data && error.response.data.message) {
          enqueueSnackbar(error.response.data.message);
        }
        enqueueSnackbar("Request success : Username is already taken OR Username is already exists");
      });
  };


  const handleChange = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }

  const handleHcFormSubmit = (e) => {
    if (validateInput(data)) {
      register(data)
    }
  }

  
  const checkLogin = () => {
    if ( localStorage.getItem('token') && localStorage.getItem('username') && localStorage.getItem('balance')){
      history.push("/");
    } else{
      history.push("/login");
    }
  }
  checkLogin();


  /**
   * Return false if any validation condition fails, otherwise return true.
   * (NOTE: The error messages to be shown for each of these cases, are given with them)
   * -    Check that username field is not an empty value - "Username is a required field"
   * -    Check that username field is not less than 6 characters in length - "Username must be at least 6 characters"
   * -    Check that password field is not an empty value - "Password is a required field"
   * -    Check that password field is not less than 6 characters in length - "Password must be at least 6 characters"
   * -    Check that confirmPassword field has the same value as password field - Passwords do not match
   */
  const validateInput = (data) => {
    if (data.username==="") {
      enqueueSnackbar("Username required");
      return;
    }
    if (data.username.length < 6) {
      enqueueSnackbar("Username must be atleast 6 characters length");
      return;
    }
    
    if (data.password==="") {
      enqueueSnackbar("Password required");
      return false;
    }
    if (data.password.length < 6) {
      enqueueSnackbar("Password must be atleast 6 characters length");
      return false;
    }
    if (data.password !== data.confirmPassword) {
      enqueueSnackbar("Confirm Password do not match");
      return false;
    }
    return true;
  };
  // var message_className = message === "" ? 'alert alert-warning d-none' : 'alert alert-warning';

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header hasHiddenAuthButtons />
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Register</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            helperText="Password must be atleast 6 characters length"
            onChange={handleChange}
            fullWidth
            placeholder="Enter a password with minimum 6 characters"
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            fullWidth
          />
           <Button id="btn" className="button" disabled={isLoading} variant="contained" onClick={handleHcFormSubmit}>
            {isLoading && <CircularProgress color="secondary" />}  Register Now
           </Button>
          <p className="secondary-action">Already have an account?
            <Link to="/login">Login here</Link>
            {/* <a className="link" href="./login">Login here</a> */}
          </p>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
