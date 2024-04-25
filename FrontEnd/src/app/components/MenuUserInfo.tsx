import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function MenuUserInfo() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "3px",
          borderRadius: "40px",
          width: "180px",
          justifyContent: "space-between",
          backgroundColor: "#1E1E1E",
          "&:hover": {
            color: "inherit",
            backgroundColor: "transparent",
          },
        }}
      >
        <Box maxWidth={150} display="flex" alignItems="center">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            sx={{ marginRight: 1 }}
          >
            <Avatar
              alt="User"
              src="/Frame 11.png"
              sx={{ width: 32, height: 32 }}
            />
          </Badge>

          <Typography
            variant="subtitle2"
            sx={{
              textTransform: "none",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Truong Gianggghhh
          </Typography>
        </Box>
        <KeyboardArrowDownIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Typography variant="subtitle2">Account</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography variant="subtitle2"> Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography variant="subtitle2">Upgrade to Premium</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography variant="subtitle2">Private session</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography variant="subtitle2">Settings</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disableRipple>
          <Typography variant="subtitle2">Log out</Typography>
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}
