import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import "./stepper.scss";
import Stepper from "react-stepper-horizontal";
import { LabelContext } from "./LabelDataContext";
import Validate from "../../pages/dcma/validate/Validate";
import Search from "../../pages/dcma/search/Search";
import Report from "../../pages/dcma/report/Report";
import {Refine} from "../../pages/dcma/refine/Refine";
import { Footer } from "../layout/footer/Footer";
import {Grid, Button, InputBase, Container} from "@mui/material";

const StepperPage = (props) => {
  const value = useContext(LabelContext);
  console.log(value);
  return (
    <>
    <Container maxWidth="xl">
      <div className="dcma_stepper">
        {value.page !== 3 && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item md={6} xs={12} >
            <Stepper            
            activeColor="#07D4FA"    
            completeColor="#07D4FA"
            completeBarColor="#07D4FA" steps={value.steps} activeStep={value.page} />
            </Grid>
          </Grid>
        )}

        {value.page === 0 && <Search />}
        {value.page === 1 && <Refine />}
        {value.page === 2 && <Report />}
        {value.page === 3 && <Validate />}
      </div>
    </Container>
    </>
  );
};
export default StepperPage;
