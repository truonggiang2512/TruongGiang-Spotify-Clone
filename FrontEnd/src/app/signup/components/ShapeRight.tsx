import theme from "@/app/lib/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const ShapeRight = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "600px",
        backgroundColor: theme.background.paper,
        overflow: "auto",
        maxHeight: "calc(100vh - 64px)",
        height: "calc(100vh - 64px)",
        backgroundImage: "url('/Music.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "65% 60%",
        textAlign: "center",
      }}
    >
      <Box p={2}>
        <Typography variant="h5">
          Timeless, <span style={{ color: theme.primary }}>Davido’s</span>{" "}
          highly anticipated fourth album.
        </Typography>
      </Box>
      <Box
        width={"100%"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        sx={{
          position: "absolute",
          bottom: 0,
          textAlign: "bottom",
        }}
      >
        <img src="/Spotify_Logo_RGB_White 1.png" alt="" />
        <Box>Music for every mood.</Box>
      </Box>
    </Box>
  );
};

export default ShapeRight;
