import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import "./Register.css";


const Register = () => {
  const [data, setData] = useState({ username: "", "password": "", "confirmPassword": "" });
  const [message, setMessage] = useState("");
  const api_url = config.endpoint;

  const postRegister = () => {
    var op = {}
    axios(api_url + '/auth/register', { method: 'POST', data: (data) })
      .then((res) => res)
      .then(function (data){
        op = data
        console.log(op)
        setMessage("Registration success .");
        setTimeout(function () {
          setData({ username: "", "password": "", "confirmPassword": "" });
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
          document.getElementById("confirmPassword").value = "";
          document.getElementById("btn").blur();
          setMessage("");
        },3000)
      })
      .catch(function (error) {
        if (error.response && error.response.status && error.response.status===400) {
          setMessage(" Username is already taken success ");
        }
        else if (error.response && error.response.status && error.response.status === 201) { 
          setMessage("Registration success .");
        }
        else if (error.response && error.response.data && error.response.data.message) {
          setMessage(error.response.data.message);
        }
        setMessage("Request success : Username is already taken OR Username is already exists");
      });

  }

  const handleChange = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }

  const handleHcFormSubmit = (e) => {
    if (data.username==="") {
      setMessage("Username required");
      return;
    }
    if (data.username.length < 6) {
      setMessage("Username must be atleast 6 characters length");
      return;
    }
    
    if (data.password==="") {
      setMessage("Password required");
      return;
    }
    if (data.password.length < 6) {
      setMessage("Password must be atleast 6 characters length");
      return;
    }
    if (data.password !== data.confirmPassword) {
      setMessage("Confirm Password do not match");
      return;
    }
    // setMessage("");
    postRegister()
  }




  // const { enqueueSnackbar } = useSnackbar();
  // const { username } = useState();
  // const { password } = useState();
  // const { confirmPassword } = useState();

  // TODO: CRIO_TASK_MODULE_REGISTER - Implement the register function
  /**
   * Definition for register handler
   * - Function to be called when the user clicks on the register button or submits the register form
   *
   * @param {{ username: string, password: string, confirmPassword: string }} formData
   *  Object with values of username, password and confirm password user entered to register
   *
   * API endpoint - "POST /auth/register"
   *
   * Example for successful response from backend for the API call:
   * HTTP 201
   * {
   *      "success": true,
   * }
   *
   * Example for failed response from backend for the API call:
   * HTTP 400
   * {
   *      "success": false,
   *      "message": "Username is already taken"
   * }
   */

  // const register = async (formData) => {
  //   console.log(formData)
    
      
  // };


  // TODO: CRIO_TASK_MODULE_REGISTER - Implement user input validation logic
  /**
   * Validate the input values so that any bad or illegal values are not passed to the backend.
   *
   * @param {{ username: string, password: string, confirmPassword: string }} data
   *  Object with values of username, password and confirm password user entered to register
   *
   * @returns {boolean}
   *    Whether validation has passed or not
   *
   * Return false if any validation condition fails, otherwise return true.
   * (NOTE: The error messages to be shown for each of these cases, are given with them)
   * -    Check that username field is not an empty value - "Username is a required field"
   * -    Check that username field is not less than 6 characters in length - "Username must be at least 6 characters"
   * -    Check that password field is not an empty value - "Password is a required field"
   * -    Check that password field is not less than 6 characters in length - "Password must be at least 6 characters"
   * -    Check that confirmPassword field has the same value as password field - Passwords do not match
   */
  const validateInput = (data) => {
  };
  var message_className = message === "" ? 'alert alert-warning d-none' : 'alert alert-warning';
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header hasHiddenAuthButtons />
      <Box className={message_className} role="alert" >{message}</Box>
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
           <Button id="btn" className="button" variant="contained" onClick={handleHcFormSubmit}>
            Register Now
           </Button>
          <p className="secondary-action">Already have an account?{" "}<a className="link" href="#">Login here</a></p>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
