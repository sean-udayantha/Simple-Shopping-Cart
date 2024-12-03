import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "./ProductCard";
import prodImg from "../../assets/images/prodImg.jpg";
import { TextField, Typography } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Puma RS-X Sneakers",
    price: "150",
    description:
      "Retro design meets modern technology for a bold, stylish sneaker.",
    image: prodImg,
  },
  {
    id: 2,
    name: "Balenciaga Sneakers",
    price: "200",
    description:
      "Retro design meets modern technology for a bold, stylish sneaker.",
    image: prodImg,
  },
  {
    id: 3,
    name: "Puma RS-X Sneakers",
    price: "500",
    description:
      "Retro design meets modern technology for a bold, stylish sneaker.",
    image: prodImg,
  },
  {
    id: 4,
    name: "Air Jordan Sneakers",
    price: "350",
    description:
      "Retro design meets modern technology for a bold, stylish sneaker.",
    image: prodImg,
  },
  {
    id: 5,
    name: "Gucci Sneakers",
    price: "1000",
    description:
      "Retro design meets modern technology for a bold, stylish sneaker.",
    image: prodImg,
  },
];

export default function ProductList() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ padding: "16px" }}>
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Grid container spacing={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 3 }}>
            No products found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
