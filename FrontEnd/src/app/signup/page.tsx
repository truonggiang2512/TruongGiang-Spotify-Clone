import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";
import RootLayout from "../layout";
import theme from "../lib/theme";
import ShapeLeft from "./components/ShapeLeft";
import ShapeRight from "./components/ShapeRight";

type Props = {};
const SignUp = (props: Props) => {
  return (
    <RootLayout isHeader={true}>
      <Box
        sx={{
          backgroundColor: theme.background.paper,
          display: "flex",
          justifyContent: "center",
          px: { sm: "2", xs: 0, md: 0 },
          height: "100%",
        }}
      >
        <Box sx={{ maxWidth: "1200px", width: "100%" }}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection={{ sm: "column", md: "row", xs: "column" }}
            alignItems={{ sm: "center", md: "initial", xs: "center" }}
          >
            <ShapeLeft />
            <ShapeRight />
          </Box>
        </Box>
      </Box>
    </RootLayout>
  );
};

export default SignUp;
