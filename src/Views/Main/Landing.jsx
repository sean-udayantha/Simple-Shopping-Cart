import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductList from "../../Components/product/ProductList";
import Cart from "../../Components/Cart/Cart";

const Landing = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        p={2}
      >
        <Grid item>
          <Typography variant="h4" color={"primary"} p={2}>
            Welcome
          </Typography>
          <ProductList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
