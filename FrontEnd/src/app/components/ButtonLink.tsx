import React from "react";
import { Box, Typography } from "@mui/material";

const ButtonLink = ({
  children,
  onClick,
  icon,
  isSquareButton,
  gapElement,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  isSquareButton?: boolean;
  gapElement?: number;
}) => {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#0000",
        color: "#FFFFFF",
        border: "1px solid #FFFFFF",
        borderRadius: isSquareButton ? 0 : "40px",
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
      <Box
        display={icon ? "flex" : "block"}
        gap={gapElement ? gapElement : 3}
        alignItems={"center"}
        px={2}
      >
        {icon ? (
          <Box>
            <img
              width={icon === "/Ellipse 3.png" ? "100%" : "80%"}
              height={icon === "/Ellipse 3.png" ? "100%" : "80%"}
              src={`${icon}`}
              alt=""
            />
          </Box>
        ) : (
          <></>
        )}
        <Box textAlign={icon ? "left" : "center"}>
          <Typography variant="h6">{children}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ButtonLink;
