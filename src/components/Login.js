import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useHistory, Link} from "react-router-dom";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import "./Login.css";
 
//Login function
const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState({ username: "", "password": ""});
  const api_url = config.endpoint;
  const history = useHistory()
  const [isLoading, setLoading] = useState(false);

  const login = async (formData) => {
    var op = {}
    setLoading(true)
    await axios(api_url + '/auth/login', { method: 'POST', data: (formData) })
      .then((res) => res)
      .then(function (data) {
        setLoading(false)
        op = data.data;
        // console.log(op)
        // {"success": true,"token": "testtoken","username": "criodo","balance": 5000}
        persistLogin(op.token, op.username, op.balance, op.token);
        enqueueSnackbar("Logged in successfully"); 

      })
      .catch(function (error) {
        setLoading(false)
        if (error.response && error.response.status && error.response.status===400) {
          enqueueSnackbar(error.response.data.message);
        }
        else if ( ! (error.response && error.response.status && error.response.status===201 ) ) {
          enqueueSnackbar("Something went wrong.Check that the backend is running, reachable and returns valid JSON.");
        }
      });
  };

  

  const handleChange = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }

  const handleHcFormSubmit = (e) => {
    if (validateInput(data)) {
      login(data)
    }
  }

  /**
   * Example for successful response from backend:
   * HTTP 201
   * {
   *      "success": true,
   *      "token": "testtoken",
   *      "username": "criodo",
   *      "balance": 5000
   * }
   * Example for failed response from backend:
   * HTTP 400
   * {
   *      "success": false,
   *      "message": "Password is incorrect"
   * }
   */

 const validateInput = (data) => {
    if (data.username==="") {
      enqueueSnackbar("Username is a required field");
      return;
    }
    if (data.password==="") {
      enqueueSnackbar("Password required");
      return false;
    }
    return true;
  };

  // TODO: CRIO_TASK_MODULE_LOGIN - Persist user's login information
  /**
   * Store the login information so that it can be used to identify the user in subsequent API calls
   *
   * @param {string} token
   *    API token used for authentication of requests after logging in
   * @param {string} username
   *    Username of the logged in user
   * @param {string} balance
   *    Wallet balance amount of the logged in user
   *
   * Make use of localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   * -    `token` field in localStorage can be used to store the Oauth token
   * -    `username` field in localStorage can be used to store the username that the user is logged in as
   * -    `balance` field in localStorage can be used to store the balance amount in the user's wallet
   */
  const persistLogin = (token, username, balance) => {
    
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('balance', balance);
		checkLogin();
  };
  
  
  const checkLogin = () => {
    if ( localStorage.getItem('token') && localStorage.getItem('username') && localStorage.getItem('balance')){
      history.push("/");
    } 
  }
  checkLogin();

    
 

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
          <h2 className="title">Login</h2>
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
          <Button id="btn" className="button" disabled={isLoading} variant="contained" onClick={handleHcFormSubmit}>
            {isLoading && <CircularProgress color="secondary" />} LOGIN TO QKART
          </Button>
          <p className="secondary-action">Don’t have an account? Register now
            <Link to="/register">Register now</Link>
            {/* <a className="link" href='./signup' >Register now</a> */}
          </p>
        </Stack>
      </Box>
      <Footer />
    </Box>
  
  );
};

export default Login;
