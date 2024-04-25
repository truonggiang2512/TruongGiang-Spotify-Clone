import { Box, Typography } from "@mui/material";
import React from "react";

type PlayListItemProps = {
  artist: string;
  title: string;
  id?: number;
  image: string;
};

const PlayListItem = ({ artist, id, image, title }: PlayListItemProps) => {
  return (
    <Box
      sx={{
        height: "43vh",
        maxHeight: "43vh",
        backgroundColor: "rgba(180, 180, 180, 0.0000004)",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box p={2}>
        <img
          style={{ objectFit: "cover" }}
          width={"100%"}
          height={"100%"}
          src={image}
        />
      </Box>
      <Box height={"100%"} p={2}>
        <Box pb={1}>
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              textTransform: "none",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
            variant="body2"
          >
            {artist}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayListItem;
