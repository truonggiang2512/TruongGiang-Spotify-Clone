import ButtonLink from "@/app/components/ButtonLink";
import RootLayout from "@/app/layout";
import theme from "@/app/lib/theme";
import { Avatar, Box, Button, FormControl, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";

type Props = {};

const ShapeLeft = (props: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "600px",
        backgroundColor: theme.background.paper,
        overflow: "auto",
        maxHeight: "calc(100vh - 64px)",
      }}
    >
      <Box textAlign="center" p={4}>
        <Box>
          <Button>
            <Avatar
              src={"/logo-icon.svg"}
              alt="logo"
              sx={{ width: 44, height: 44 }}
            />
          </Button>
          <Box py={2}>
            <Typography variant="h5">
              Create your account for free and start listening
            </Typography>
          </Box>
          <Typography variant="subtitle1">
            By Clicking on sign-up, you agree to the
            <Box>Spotify Tearms and Conditions and Privacy Policy</Box>
          </Typography>
          <Box py={2}>
            <RegisterForm />
          </Box>

          <FormControl sx={{ width: "430px" }} variant="outlined">
            <ButtonLink
              gapElement={10}
              isSquareButton={true}
              icon={"/Ellipse 1.png"}
            >
              Continue with Google
            </ButtonLink>
          </FormControl>
        </Box>
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
      </Box>
    </Box>
  );
};

export default ShapeLeft;
