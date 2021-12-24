import React from "react";
import { useFormik, FormikProvider, Form, useField } from "formik";
import "./search.scss";
import * as Yup from "yup";
import { TextField, Grid } from "@mui/material";
import {FormField} from './FormField'

export const IndividualInfoForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      lastName2: "",
      middleName: "",
      dob: "",
      governmentBirthNumber: "",
      passportNumber: "",
      governmentIDNumber: "",
      email: "",
      phoneNumber: "",
      globalPersonIdentifier: "",
    },
    onSubmit: async (values) => {
      // await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
       .required("Name is required"),
      lastName: Yup.string()
       .required("Last Name is required"),
      lastName2: Yup.string()
      .required("Last Name is required"),
      middleName: Yup.string()
      .required("Middle Name is required"),
      dob: Yup.string()
      .required("Date of Birth  is required"),
      governmentBirthNumber: Yup.string()
      .required("Government Birth Number is required"),
      passportNumber: Yup.string()
      .required("Passport Number is required"),
      governmentIDNumber: Yup.string()
      .required("Government ID Number is required"),
      email: Yup.string()
      .required("lastName is required"),
      phoneNumber: Yup.string()
      .required("lastName is required"),
      globalPersonIdentifier: Yup.string()
      .required("Global Person Identifier is required"),
    }),
  });
  return (
    <div>
      <FormikProvider value={formik}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormField label="First Name" id="name" name="name" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Middle Name" id="middleName" name="middleName" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Last Name" id="lastName" name="lastName" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Last Name" id="lastName2" name="lastName2" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Date of Birth" id="dob" name="dob" type="Date" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Government Birth Number (i.e.,SSN)" id="governmentBirthNumber" name="governmentBirthNumber" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Passport Number" id="passportNumber" name="passportNumber" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Government ID Number" id="governmentIDNumber" name="governmentIDNumber" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Email Address" id="email" name="email" type="email" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Mobile Phone Number" id="phoneNumber" name="phoneNumber" type="text" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField label="Global Person Identifier" id="globalPersonIdentifier" name="globalPersonIdentifier" type="text" />
            </Grid>
          </Grid>
          
        </Form>
      </FormikProvider>
    </div>
  );
};
