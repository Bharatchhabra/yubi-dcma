import React from "react";
import { useFormik, FormikProvider, Form, useField } from "formik";
import "./search.scss";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import { FormField } from "./FormField";

export const BusinessInfoForm = () => {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      dateofIncorporation: "",
      businessRegistrationNumber: "",
      globalEntityIdentifier: "",
    },
    onSubmit: async (values) => {
      // await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business Name is required"),
      dateofIncorporation: Yup.string().required(
        "Date of Incorporation is required"
      ),
      businessRegistrationNumber: Yup.string().required(
        "Business Registration Number is required"
      ),
      globalEntityIdentifier: Yup.string().required(
        "Global Entity Identifier (GPI) is required"
      ),
    }),
  });
  return (
    <FormikProvider value={formik}>
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <FormField
              label="Business Name"
              id="businessName"
              name="businessName"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField
              label="Date of Incorporation"
              id="dateofIncorporation"
              name="dateofIncorporation"
              type="date"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField
              label="Business Registration Number"
              id="businessRegistrationNumber"
              name="businessRegistrationNumber"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField
              label="Global Entity Identifier (GPI)"
              id="globalEntityIdentifier"
              name="globalEntityIdentifier"
              type="text"
            />
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};
