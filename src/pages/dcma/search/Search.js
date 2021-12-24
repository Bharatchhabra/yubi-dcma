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
  List,
  ListItem,
  IconButton,
  ListItemText,
} from "@mui/material";
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
import { IndividualInfoForm } from "./IndividualInfoForm";
import { TransactionInfoForm } from "./TransactionInfoForm";
import { FinancialForm } from "./FinancialForm";
import { TransInfoOptionalForm } from "./TransInfoOptionalForm";
import { BusinessInfoForm } from "./BusinessInfoForm";

function Search() {
  const [expanded, setExpanded] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

            <FinancialForm />

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
            <IndividualInfoForm />

            <h4 className="input-section-heading">Business Information</h4>
            <BusinessInfoForm />
            
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

            <TransactionInfoForm />

            <h4 className="input-section-heading">
              Transaction Information (Optional)
            </h4>
            <TransInfoOptionalForm />

          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Search;
