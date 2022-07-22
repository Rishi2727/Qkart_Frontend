import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
<<<<<<< HEAD
import { useHistory, Link} from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  
   const handleLogoClick = ()=>{
    history.push("/");
   }
  
  
  const logout = ()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    history.push("/",{from:"Header"})
    window.location.reload();
  }



  if(hasHiddenAuthButtons){
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon" onClick={handleLogoClick}></img>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/", { from: "Header" })}
        >
          Back to explore
        </Button>
      </Box>
    );
  }
  
=======

const Header = ({ children, hasHiddenAuthButtons }) => {
>>>>>>> e7ef4956fa0d9eed00ff1db4b4fed8bbb6626109
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
<<<<<<< HEAD

        {children}
      <Stack direction="row" spacing={1} alignItems="center">
        {localStorage.getItem("username")
          ? (
            <>
              <Avatar
                src="avatar.png"
                alt={localStorage.getItem("username")}
              />
              <p className="username-text">{localStorage.getItem("username")}</p>
 
              <Button type="primary" onClick={logout}>Logout</Button>
            </>
) : (
            <>
              <Button  onClick={()=>history.push("/login",{from:"Header"})}>Login</Button>
              <Button variant="contained" onClick={()=>history.push("/register",{from:"Header"})}>Register</Button>
            </>
          )
        }
      </Stack>
    </Box>
  );
=======
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
        >
          Back to explore
        </Button>
      </Box>
    );
>>>>>>> e7ef4956fa0d9eed00ff1db4b4fed8bbb6626109
};

export default Header;
