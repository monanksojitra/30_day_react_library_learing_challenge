import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password must be at most 12 characters")
    .matches(
      `^(?=.*[!@#$%^&*)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$`,
      "Password must include at least one special character, one number, one lowercase letter, and one uppercase letter"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  age: Yup.number()
    .typeError("Invalid age")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  creditCard: Yup.string()
    .matches(/^\d{16}$/, "Invalid credit card number")
    .required("Required"),
});

const Day20 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      address: "",
      city: "",
      state: "",
      creditCard: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                {...formik.getFieldProps("firstName")}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                {...formik.getFieldProps("lastName")}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                {...formik.getFieldProps("password")}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                name="confirmPassword"
                {...formik.getFieldProps("confirmPassword")}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Age"
                variant="outlined"
                type="number"
                name="age"
                {...formik.getFieldProps("age")}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                name="city"
                {...formik.getFieldProps("city")}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="State"
                variant="outlined"
                name="state"
                {...formik.getFieldProps("state")}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Credit Card"
                variant="outlined"
                name="creditCard"
                {...formik.getFieldProps("creditCard")}
                error={
                  formik.touched.creditCard && Boolean(formik.errors.creditCard)
                }
                helperText={
                  formik.touched.creditCard && formik.errors.creditCard
                }
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                name="address"
                {...formik.getFieldProps("address")}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
          </Grid>
          <Box mt={2} textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Day20;
