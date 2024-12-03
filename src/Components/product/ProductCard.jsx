import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useCart } from "../../Context/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useCart();

  // const addToCart = (product) => {
  //   // Retrieve the existing cart from local storage
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];

  //   // Check if the product is already in the cart
  //   const productIndex = cart.findIndex((item) => item.id === product.id);

  //   if (productIndex > -1) {
  //     // If the product already exists, increase its quantity
  //     cart[productIndex].quantity += 1;
  //   } else {
  //     // If the product does not exist, add it to the cart with a quantity of 1
  //     cart.push({ ...product, quantity: 1 });
  //   }

  //   // Update the cart in local storage
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   toast.success("Item added to cart success");
  //   // Optionally show a confirmation message

  // };
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Card
      sx={{
        // maxWidth: 345,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #e0e0e0",
        borderRadius: "0",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "cover",
          width: "100%",
          aspectRatio: "16/9",
          borderBottom: "2px solid #f0f0f0",
        }}
      />
      <CardContent
        sx={{
          flex: "1 0 auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {product.name}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#E64A19",
            fontWeight: "bold",
            marginTop: "4px",
            marginBottom: "4px",
          }}
        >
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0",
          marginTop: "auto",
        }}
      >
        <Button
          variant="contained"
          size="small"
          aria-label={`Add ${product.name} to cart`}
          sx={{
            backgroundColor: "#FF5722",
            color: "#fff",
            textTransform: "capitalize",
            padding: "10px",
            fontWeight: "bold",
            width: "100%",
            marginTop: "4px",
            borderRadius: "0",
            "&:hover": {
              backgroundColor: "#E64A19",
            },
          }}
          onClick={() =>
            addToCart({ ...product, price: Number(product.price) })
          }
          disabled={isInCart}
        >
          {isInCart ? "IN CART" : "ADD TO Cart"}
        </Button>
      </CardActions>
    </Card>
  );
}
