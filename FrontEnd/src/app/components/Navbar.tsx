import { Box, Button, Container } from "@mui/material";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{ bgcolor: "#000000", maxHeight: "100%" }}
    >
      <Box px={5} pt={1}>
        <img width={"220px"} height={"80px"} src="/Rectangle 12.png" />
      </Box>
    </Container>
  );
};

export default Navbar;
