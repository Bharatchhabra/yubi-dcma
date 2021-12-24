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

export const FinancialForm = () => {
  const formik = useFormik({
    initialValues: {
      branchLocationCode: "",
      financialInstiWalletAdd: "",
      financialOfficeCode: "",
    },
    onSubmit: async (values) => {
      // await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      branchLocationCode: Yup.string().required(
        "Branch Location Code is required"
      ),
      financialInstiWalletAdd: Yup.string().required(
        "Wallet Address is required"
      ),
      financialOfficeCode: Yup.string().required(
        "Financial Office Code is required"
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
                <ListItemText primary="Originating Location" />
              </ListItem>
            </List>
            <FormField
              label="Branch Location Code"
              id="branchLocationCode"
              name="branchLocationCode"
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
                <ListItemText primary="Financial Institution Wallet" />
              </ListItem>
            </List>
            <FormField
              label="Financial Institution Wallet Address"
              id="financialInstiWalletAdd"
              name="financialInstiWalletAdd"
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
                <ListItemText primary="Originating Officer" />
              </ListItem>
            </List>
            <FormField
              label="Financial Office Code"
              id="financialOfficeCode"
              name="financialOfficeCode"
              type="text"
            />
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};
