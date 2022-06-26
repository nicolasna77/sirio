/* eslint-disable jsx-a11y/alt-text */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Button,
  ButtonBase,
  CardContent,
  Grid,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import SearchBar from "./SearchBar";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import LockIcon from "@mui/icons-material/Lock";
import { loginOut } from "../context/firebase";

import {
  AccountCircle,
  Logout,
  LogoutOutlined,
  LogoutRounded,
  LogoutTwoTone,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import AppContext from "../context/AuthContext";
import { CartState } from "../context/App-Context";
const Header = () => {
  const { user } = useContext(AppContext);

  const clickLogin = async () => {
    if (user) {
      await loginOut();
    } else {
      navigate("/connection");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Box sx={{ flexGrow: 1 }} elevation={1}>
      <AppBar color="default" position="relative">
        <Toolbar>
          <Link href="/">
            <div>
              <Image
                name="logo"
                // className="logoHeader"
                src={logo}
                width={70}
                height={36}
              />
            </div>
          </Link>
          <Grid
            container
            justifyContent="center"
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <SearchBar />
          </Grid>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
            <IconButton size="large">
              <SearchIcon />
            </IconButton>
          </Box>

          <Link href="/panier">
            <IconButton size="large">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>

          {user ? (
            <IconButton onClick={handleClick}>
              <Avatar>{user.lastName}</Avatar>
            </IconButton>
          ) : (
            <IconButton size="large" onClick={handleClick}>
              <PersonIcon />
            </IconButton>
          )}

          <Box>
            {user ? (
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 1,
                  sx: {
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <CardContent sx={{ px: 2.5, textAlign: "center" }}>
                  <Stack alignItems="center">
                    <Typography variant="subtitle1">
                      {user.firstName} {user.lastName}
                    </Typography>
                  </Stack>
                </CardContent>
                <Link href="/profil">
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize={"small"} />
                    </ListItemIcon>
                    {"Mon Profil"}
                  </MenuItem>
                </Link>
                <MenuItem onClick={clickLogin}>
                  <ListItemIcon>
                    <LogoutOutlined color={"secondary"} fontSize={"small"} />
                  </ListItemIcon>
                  <Typography color={"secondary"}>{"Deconnection"}</Typography>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  sx: {
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link href="/inscription">
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    {"S'inscrire"}
                  </MenuItem>
                </Link>
                <Link href="/connection">
                  <MenuItem>
                    <ListItemIcon>
                      <LockIcon fontSize="small" />
                    </ListItemIcon>
                    {"Connection"}
                  </MenuItem>
                </Link>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
