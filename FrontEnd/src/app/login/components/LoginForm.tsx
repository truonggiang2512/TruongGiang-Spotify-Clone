import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ButtonSubmit from "@/app/components/ButtonSubmit";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box width={"100%"}>
      <Formik
        initialValues={{ email: "", username: "" }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <Form style={{ padding: "0 8px" }}>
          <Box maxWidth={"100%"}>
            <FormControl sx={{ width: "330px" }} variant="outlined">
              <OutlinedInput
                label="Email or username"
                id="outlined-adornment-email"
              />
              <InputLabel htmlFor="outlined-adornment-email">
                Email or username
              </InputLabel>
            </FormControl>
          </Box>
          <Box py={2} maxWidth={"100%"}>
            <FormControl sx={{ width: "330px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
          <FormControl sx={{ width: "330px" }} variant="outlined">
            <Box textAlign={"left"}>
              <FormControlLabel
                sx={{ ml: 0 }}
                value=""
                control={<Switch color="primary" />}
                label="Remember me"
                labelPlacement="end"
              />
            </Box>
          </FormControl>
          <FormControl sx={{ width: "330px" }} variant="outlined">
            <ButtonSubmit>Log in</ButtonSubmit>
          </FormControl>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
