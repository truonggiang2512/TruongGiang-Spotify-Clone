import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../lib/theme";

const PlaylistTag = ({
  image,
  title,
  id,
}: {
  image: string;
  title: string;
  id?: number;
}) => {
  return (
    <Button
      sx={{
        p: 0,
        position: "relative",
        maxWidth: "400px",
        backgroundColor: "rgba(200, 200, 200, 0)",
        "& .playIcon": {
          opacity: 0,
        },
        "&:hover": {
          backgroundColor: "rgba(200, 200, 200, 0.2)",
          "& .playIcon": {
            opacity: 1,
          },
        },
      }}
    >
      <img src={image} height={"100%"} alt="" />
      <Box
        sx={{
          position: "absolute",
          top: "57%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
        className="playIcon"
      >
        <img
          src="/Play_Greem Hover.png"
          width={60}
          height={60}
          alt="Play icon"
        />
      </Box>
      <Box width={300}>
        <Box p={2} textAlign="start">
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
      </Box>
    </Button>
  );
};

export default PlaylistTag;
