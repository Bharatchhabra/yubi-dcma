import React from "react";
import { useFormik, FormikProvider, Form, useField } from "formik";
import "./search.scss";
import * as Yup from "yup";
import { TextField, Grid } from "@mui/material";
import { FormField } from "./FormField";

export const TransactionInfoForm = () => {
  const formik = useFormik({
    initialValues: {
      minimumTransactionAmount: "",
      beginningTransactionDate: "",
      minimumWalletDays: "",
      minimumWalletBalance: "",
      maximumTransactionAmount: "",
      endingTransactionDate: "",
      maximumWalletDays:"",
      maximumWalletBalance: "",
    },
    onSubmit: async (values) => {
      // await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      minimumTransactionAmount: Yup.string().required("Minimum Transaction Amount is required"),
      beginningTransactionDate: Yup.string().required("Beginning Transaction Date is required"),
      minimumWalletDays: Yup.string().required("Minimum Wallet Days is required"),
      minimumWalletBalance: Yup.string().required("Minimum Wallet Balance is required"),
      maximumTransactionAmount: Yup.string().required(
        "Maximum Transaction Amount is required"
      ),
      endingTransactionDate: Yup.string().required(
        "Ending Transaction Date is required"
      ),
      maximumWalletDays: Yup.string().required(
        "Maximum Wallet Days is required"
      ),
      maximumWalletBalance: Yup.string().required(
        "Maximum Wallet Balance is required"
      ),
    }),
  });
  return (
    <div>
      <FormikProvider value={formik}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormField
                label="Minimum Transaction Amount"
                id="minimumTransactionAmount"
                name="minimumTransactionAmount"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField
                label="Beginning Transaction Date"
                id="beginningTransactionDate"
                name="beginningTransactionDate"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField
                label="Minimum Wallet Days"
                id="minimumWalletDays"
                name="minimumWalletDays"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField
                label="Minimum Wallet Balance"
                id="minimumWalletBalance"
                name="minimumWalletBalance"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField
                label="Maximum Transaction Amount"
                id="maximumTransactionAmount"
                name="maximumTransactionAmount"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField
                label="Ending Transaction Date"
                id="endingTransactionDate"
                name="endingTransactionDate"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField
                label="Maximum Wallet Days"
                id="maximumWalletDays"
                name="maximumWalletDays"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField
                label="Maximum Wallet Balance"
                id="maximumWalletBalance"
                name="maximumWalletBalance"
                type="text"
              />
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </div>
  );
};
