import React from "react";
import { useFormik, FormikProvider, Form, useField } from "formik";
import "./search.scss";
import * as Yup from "yup";
import {
  TextField,
  Grid,
  List,
  ListItem,
  IconButton,
  ListItemText,
} from "@mui/material";
import { FormField } from "./FormField";
import { CgAddR } from "react-icons/cg";

export const TransInfoOptionalForm = () => {
  const formik = useFormik({
    initialValues: {
      internationalSwiftCode: "",
      domesticRoutingCode: "",
      bankAccountNumber: "",
      settlementSystemCode: "",
    },
    onSubmit: async (values) => {
      // await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      internationalSwiftCode: Yup.string().required("Swift Code is required"),
      domesticRoutingCode: Yup.string().required(
        "Domestic Routing Code is required"
      ),
      bankAccountNumber: Yup.string().required(
        "Bank Account Number is required"
      ),
      settlementSystemCode: Yup.string().required(
        "Settlement System Code is required"
      ),
    }),
  });
  return (
    <FormikProvider value={formik}>
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="add">
                    <CgAddR />
                  </IconButton>
                }
              >
                <ListItemText primary="International Swift Code" />
              </ListItem>
            </List>
            <FormField
              label="International Swift Code"
              id="internationalSwiftCode"
              name="internationalSwiftCode"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="add">
                    <CgAddR />
                  </IconButton>
                }
              >
                <ListItemText primary="Domestic Routing Code" />
              </ListItem>
            </List>
            <FormField
              label="Domestic Routing Code"
              id="domesticRoutingCode"
              name="domesticRoutingCode"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="add">
                    <CgAddR />
                  </IconButton>
                }
              >
                <ListItemText primary="Bank Account Number" />
              </ListItem>
            </List>
            <FormField
              label="Bank Account Number"
              id="bankAccountNumber"
              name="bankAccountNumber"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="add">
                    <CgAddR />
                  </IconButton>
                }
              >
                <ListItemText primary="Settlement System" />
              </ListItem>
            </List>
            <FormField
              label="Settlement System Code"
              id="settlementSystemCode"
              name="settlementSystemCode"
              type="text"
            />
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};
