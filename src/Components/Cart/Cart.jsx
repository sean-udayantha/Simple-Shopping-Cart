import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  IconButton,
} from "@mui/material";
import { useCart } from "../../Context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: "16px", textAlign: "center" }}
      >
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" textAlign="center">
          Your cart is empty.
        </Typography>
      ) : (
        cart.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              gap: "16px",
              marginBottom: "16px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#f9f9f9",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
              },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: { xs: "100%", sm: "120px" },
                height: { xs: "auto", sm: "120px" },
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            {/* Product Details */}
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#FF5722" }}>
                ${Number(item.price || 0).toFixed(2)}{" "}
                {/* Ensure price is a number */}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <Typography variant="body1">{item.quantity}</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </Box>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>

            {/* Remove Button */}
            <IconButton
              color="error"
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))
      )}
      {cart.length > 0 && (
        <Box
          sx={{
            marginTop: "16px",
            textAlign: "center",
            borderTop: "1px solid #e0e0e0",
            paddingTop: "16px",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "8px" }}>
            Total: ${getTotalPrice().toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
