import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import sawMillLogo from "../../assets/images/sawMillLogo.png";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/features/auth/authSlice";
import { useCart } from "../../Context/CartContext";

export default function HeaderMain() {
  const[cartItemCount, setCartItemCount] = useState(0);
  const { cart} = useCart();
  const dispatch = useDispatch();
  const onClickLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  useEffect(() => {
    // const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(cart.length);
  }, [cart]);

  return (
    <>
      <AppBar position="sticky" color="inherit" sx={{ boxShadow: 1, height: 80, backgroundColor: "#111" }}>
        <Toolbar>
          <Box component={Link} to={"/"} paddingX={2} marginTop={1}>
            <img alt="Logo" src={sawMillLogo} width={60} />
          </Box>

          <Stack
            spacing={3}
            direction={"row"}
            marginX={2}
            sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
          >
            <Button
              variant="text"
              sx={{ color: "#fff" }}
              //TODO:
              // component={Link}
              // to={"/where/to"}
            >
              About Us
            </Button>
            <Button
              variant="text"
              sx={{ color: "#fff" }}
              //TODO:
              // component={Link}
              // to={"/where/to"}
            >
              Contact Us
            </Button>
          </Stack>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            columnGap={2}
          >
            <Button
              variant="text"
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "8px", // Space between icon and text
              }}
              // onClick={(e) => onClickLogOut(e)}
              component={Link}
              to={"/cart"}
            >
              <Badge
                badgeContent={cartItemCount}
                color="primary"
                sx={{
                  "& .MuiBadge-badge": {
                    right: -3,
                    top: 3,
                    border: `2px solid #fff`,
                    padding: "0 4px",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </Button>
            <Button
              variant="text"
              sx={{ color: "#fff" }}
              onClick={(e) => onClickLogOut(e)}
              //TODO:
              // component={Link}
              // to={"/where/to"}
            >
              Sign Out
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
