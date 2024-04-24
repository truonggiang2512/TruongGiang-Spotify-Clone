import React from "react";
import { Box, Typography } from "@mui/material";

type ButtonSubmitProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isSpuare?: boolean;
};

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  children,
  onClick,
  isSpuare,
}) => {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#1ED760",
        color: "#FFFFFF",
        border: "1px solid #FFFFFF",
        borderRadius: isSpuare ? 0 : "40px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#1ED760",
        },
        width: "100%",
        height: "50px",
        fontSize: "18px",
        marginTop: "16px",
      }}
      py={10}
    >
      <Typography variant="h6">{children}</Typography>
    </Box>
  );
};

export default ButtonSubmit;
