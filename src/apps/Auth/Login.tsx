import { Box, TextField, Typography, Button, Card } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../../api/Auth";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    Authentication.login();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      <Typography
        variant="h4"
        justifySelf="flex-start"
        width="100%"
        textAlign="center"
      >
        Labs Website
      </Typography>
      <Card
        style={{
          width: "40%",
          height: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
          // border="solid grey 1px"
          width="75%"
          height="75%"
          style={{ borderRadius: "15px" }}
        >
          <Typography
            variant="h6"
            justifySelf="flex-start"
            width="100%"
            textAlign="center"
          >
            Login to your account
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) =>
              setFormData((o) => {
                return { ...o, email: e.target.value };
              })
            }
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            onChange={(e) =>
              setFormData((o) => {
                return { ...o, password: e.target.value };
              })
            }
          />
          <Button variant="contained" fullWidth onClick={handleLogin}>
            Login
          </Button>
          <Button variant="outlined" fullWidth>
            Signup
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default Login;
