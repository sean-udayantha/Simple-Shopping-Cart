import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../Redux/features/auth/authSlice";
import { isValidLogin } from "../../utils/validate";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const [error, setError] = React.useState({});
  const [payload, setPayload] = React.useState({
    Name:"",
    email: "",
    password: "",
  });
  console.log("🚀 ~ Register ~ payload:", payload)
  const onChangeInput = (e) => {
    setError({ ...error, [e.target.name]: false });
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const isValidRegister = (payload, error, setError) => {
    let isValid = true;

    // Check for email and password validations (if any exist in isValidLogin)
    if (!isValidLogin(payload, error, setError)) {
      isValid = false;
    }
    // else if (payload.password !== payload.confirmPassword) {
    //   toast.error("Passwords do not match");
    //   isValid = false;
    // }

    return isValid;
  };
  
  const onClickSignup = (e) => {
    e.preventDefault();
    if (!isValidRegister(payload, error, setError)) {
      return;
    } else {
      dispatch(register(payload));
    }
      console.log("🚀 ~ onClickSignup ~ payload:", payload)
  };
  return (
    <Container>
      <Card sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center", mb: 3 }}
          >
            Sign up
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 3 }}>
            Enter your details below to create your account and get started.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField 
              label="Name" 
              variant="outlined"
              name="Name"
              error={error.Name}
              helperText={error.Name ? error.Name : " "}
              onChange={(e) => onChangeInput(e)}
              fullWidth />
            </Grid>
            <Grid item xs={12} >
              <TextField 
              label="Email" 
              variant="outlined"
              name="email"
              error={error.email}
              helperText={error.email ? error.email : " "}
              onChange={(e) => onChangeInput(e)}
              fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                error={error.password}
                helperText={error.password ? error.password : " "}
                onChange={(e) => onChangeInput(e)}
                fullWidth
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                name="ConfirmPassword"
                error={error.password}
                helperText={error.password ? error.password : " "}
                onChange={(e) => onChangeInput(e)}
                fullWidth
              />
            </Grid> */}
          </Grid>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            mt={2}
          >
            <Button variant="outlined" fullWidth>
              Cancel
            </Button>
            <Button 
            variant="contained" 
            color="primary" 
            onClick={(e) => onClickSignup(e)}
            fullWidth
            >
              Confirm
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            mt={2}
          >
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Already have an account?
            </Typography>
            <Typography
              component={Link}
              to={"/auth/sign-in"}
              variant="body2"
              sx={{ textAlign: "center", textDecoration: "none" }}
            >
              Sign In
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
