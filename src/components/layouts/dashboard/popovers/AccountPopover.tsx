import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import { ExpandMore } from "@mui/icons-material";

// styled components
const Divider = styled(Box)(({ theme }) => ({
  margin: "0.5rem 0",
  border: `1px dashed ${theme.palette.grey[200]}`,
}));

const AccountPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  // console.log("userrrr", user);
  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  return (
    <Box>
      <IconButton
        // sx={{ padding: 0 }}
        aria-haspopup="true"
        onClick={handleClick}
        // aria-expanded={open ? "true" : undefined}
        // aria-controls={open ? "account-menu" : undefined}
      >
        <img
          style={{ borderRadius: "none", width: 40, marginRight: 8 }}
          alt=""
          src="/assets/user-image.png"
        />
        <Typography
          variant="body1"
          fontWeight={700}
          color={"black"}
          marginRight={1}
        >
          alexkataev
        </Typography>
        <ExpandMore sx={{ color: "black" }} />
      </IconButton>

      <Menu
        open={open}
        id="account-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            boxShadow: 2,
            minWidth: 200,
            borderRadius: "8px",
            overflow: "visible",
            border: "1px solid",
            borderColor: "grey.200",
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "grey.200",
            },
            "&:before": {
              top: 0,
              right: 14,
              zIndex: 0,
              width: 10,
              height: 10,
              content: '""',
              display: "block",
              position: "absolute",
              borderTop: "1px solid",
              borderLeft: "1px solid",
              borderColor: "grey.200",
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
            },
          },
        }}
      >
        <Box px={2} pt={1}>
          <Typography variant="h4">Hello! alexkataev</Typography>
        </Box>

        <Divider />
        <MenuItem>Profile</MenuItem>

        <Divider />
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountPopover;
