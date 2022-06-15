import { PersonAdd } from "@mui/icons-material";
import { Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import { useContext, useState } from "react";
import { AppContext } from "../context/App-Context";

const MenuHeader = () => {
  const { currentUser } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return <div></div>;
};

export default MenuHeader;
