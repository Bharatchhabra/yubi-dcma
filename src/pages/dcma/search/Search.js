import React from "react";
import {
  Typography,
  Grid,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import "./search.scss";
import InstitutionSelect from "./InstitutionSelect";
import DocumentSelect from "./DocumentSelect";
import GeoSelect from "./GeoSelect";
import OfficeSelect from "./OfficeSelect";
import financial from "./../../../assets/images/financial-institutions.png";
import customer from "./../../../assets/images/customers.png";
import transaction from "./../../../assets/images/transaction-information.png";
import checkdone from "./../../../assets/images/check-done.png";
import EntityTypes from "./EntityTypes";
import GeoLocation from "./GeoLocation";
import IndustryTypes from "./IndustryTypes";
import TransactionTypes from "./TransactionTypes";
import WalletAge from "./WalletAge";
import WalletBalanceUSD from "./WalletBalanceUSD";
import TransactionSize from "./TransactionSize";
import TransactionDate from "./TransactionDate";
import { CgAddR } from "react-icons/cg";
import { useFormik } from "formik";
import * as Yup from "yup";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";

function Search() {
  const [expanded, setExpanded] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const validationSchema = Yup.object().shape({
    bCode: Yup.string().required("Branch code is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const formik = useFormik({
    initialValues: {
      bCode: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <div>
      <h2 className="mainheadingh2">Search Mode</h2>
      <Grid container spacing={2}>
        <Grid md={3} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 40 },
                    color: "#6A6A6A",
                    "&.Mui-checked": { color: "#07D4FA" },
                  }}
                />
              }
              label="Receiver Transaction"
              className="large"
            />
          </FormGroup>
        </Grid>
        <Grid md={3} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 40 },
                    color: "#6A6A6A",
                    "&.Mui-checked": { color: "#07D4FA" },
                  }}
                />
              }
              label="Sender Transaction"
              className="large"
            />
          </FormGroup>
        </Grid>
        <Grid md={3} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 40 },
                    color: "#6A6A6A",
                    "&.Mui-checked": { color: "#07D4FA" },
                  }}
                />
              }
              label="Receiver or Sender Transaction"
              className="large"
            />
          </FormGroup>
        </Grid>
      </Grid>

      <div className="accordion-box">
        <Accordion
          expanded={expanded === "panel"}
          onChange={handleChange("panel")}
        >
          <AccordionSummary
            expandIcon={expanded === "panel" ? <MinimizeIcon /> : <AddIcon />}
            aria-controls="panela-content"
            id="panela-header"
          >
            <Typography className="accordion-heading">
              {expanded === "panel" ? (
                <img src={financial} className="img-icons" />
              ) : (
                <img src={checkdone} className="img-icons" />
              )}
              &nbsp; Financial Institute
            </Typography>
          </AccordionSummary>
          <Divider className="accordion-hr" />
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Institution Types</h4>
                <InstitutionSelect />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Document Types</h4>
                <DocumentSelect />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Office Types</h4>
                <OfficeSelect />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Geo Location</h4>
                <GeoSelect />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <CgAddR />
                      </IconButton>
                    }
                  >
                    <ListItemText primary="Originating Location" />
                  </ListItem>
                </List>

                <input
                  id="standard-basic"
                  type="text"
                  label="Branch Location Code"
                  name="bCode"
                  onChange={formik.handleChange}
                  value={formik.values.bCode}
                />
              </Grid>
              <Grid item xs={12} md={3}>
              <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <CgAddR />
                      </IconButton>
                    }
                  >
                    <ListItemText primary="Financial Institution Wallet" />
                  </ListItem>
                </List>
                <TextField
                  id="standard-basic"
                  label="Financial Institution Wallet Address"
                  variant="standard"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={3}>
              <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <CgAddR />
                      </IconButton>
                    }
                  >
                    <ListItemText primary="Originating Officer" />
                  </ListItem>
                </List>
                
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="accordion-box">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={expanded === "panel1" ? <MinimizeIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion-heading">
              <img src={customer} className="img-icons" />
              &nbsp; Customers
            </Typography>
          </AccordionSummary>
          <Divider className="accordion-hr" />
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Entity Types</h4>
                <EntityTypes />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Industry Types</h4>
                <IndustryTypes />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Transaction Types</h4>
                <TransactionTypes />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Geo Location</h4>
                <GeoLocation />
              </Grid>
            </Grid>

            <h4 className="input-section-heading">Individual Information</h4>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
                <input
                  name="fullname"
                  type="text"
                  // className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>

            <h4 className="input-section-heading">Business Information</h4>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="accordion-box">
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={expanded === "panel2" ? <MinimizeIcon /> : <AddIcon />}
            aria-controls="panel2a-content"
            id="panel1a-header"
          >
            <Typography className="accordion-heading">
              <img src={transaction} className="img-icons" />
              &nbsp; Transaction Information
            </Typography>
          </AccordionSummary>
          <Divider className="accordion-hr" />
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Transaction Size</h4>
                <TransactionSize />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Transaction Date</h4>
                <TransactionDate />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Wallet Age</h4>
                <WalletAge />
              </Grid>
              <Grid item xs={12} md={3}>
                <h4 className="option_heading">Wallet Balance USD</h4>
                <WalletBalanceUSD />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>

            <h4 className="input-section-heading">
              Transaction Information (Optional)
            </h4>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <CgAddR />
                      </IconButton>
                    }
                  >
                    <ListItemText primary="International Swift Code" />
                  </ListItem>
                </List>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <CgAddR />
                      </IconButton>
                    }
                  >
                    <ListItemText primary="Domestic Routing Code" />
                  </ListItem>
                </List>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <CgAddR />
                      </IconButton>
                    }
                  >
                    <ListItemText primary="Bank Account Number" />
                  </ListItem>
                </List>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <CgAddR />
                      </IconButton>
                    }
                  >
                    <ListItemText primary="Settlement System" />
                  </ListItem>
                </List>
                <TextField
                  id="standard-basic"
                  label="Financial Office Code"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Search;
