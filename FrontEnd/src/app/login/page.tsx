"use client";
import React from "react";
import RootLayout from "../layout";
import { Box, Divider, FormControl, Typography } from "@mui/material";
// import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import theme from "../lib/theme";

// Define a styled component
// const ModalStyledComponent = styled.div`
//   position: absolute;
//   top: 67%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: ${theme.background.paper};
//   border: 1px solid ${theme.background.paper};
//   border-radius: 10px;
//   width: 90%;
//   max-width: 700px;
// `;

const Login = () => {
  return (
    <RootLayout isHeader={true}>
      <Box
        sx={{
          position: "absolute",
          top: "67%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme.background.paper,
          border: `1px solid ${theme.background.paper}`,
          borderRadius: "10px",
          width: "90%",
          maxWidth: "700px",
        }}
      >
        <Box p={2} textAlign="center">
          <Typography variant="h4">Log in to Spotify</Typography>
          <Box pt={4} pb={2}>
            <FormControl sx={{ width: "330px" }} variant="outlined">
              <ButtonLink icon={"/Ellipse 1.png"}>
                Continue with Google
              </ButtonLink>
              <ButtonLink icon={"/Ellipse 2.png"}>
                Continue with Facebook
              </ButtonLink>
              <ButtonLink icon={"/Ellipse 3.png"}>
                Continue with Apple
              </ButtonLink>
              <ButtonLink>Continue with phone number</ButtonLink>
            </FormControl>{" "}
          </Box>
          <LoginForm />
          <Box py={3}>
            <Link
              style={{
                color: "#FFFFFF",
              }}
              href={"/forgot-password"}
            >
              Forgot Password?
            </Link>
          </Box>
          <Divider variant="fullWidth" />
          <Box py={3}>
            <Typography color={"#5E5E5E"}>
              Don't have an account? &#160;
              <Link
                style={{
                  color: "#FFFFFF",
                }}
                href={"/signup"}
              >
                Sign up for Spotify
              </Link>
            </Typography>
          </Box>
          <Box pt={3}>
            <Typography variant="subtitle2">
              This site is protected by reCAPTCHA and includes the Google
              Privacy Policy and Terms of Service.
            </Typography>
          </Box>
        </Box>
      </Box>
    </RootLayout>
  );
};

export default Login;
