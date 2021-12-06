import React, { useContext } from "react";
import {Grid, Button, InputBase, Container} from "@mui/material";
import './footer.scss'
import { makeStyles } from "@material-ui/core";
import { LabelContext } from "../../Stepper/LabelDataContext";


const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)',
  },
  saveBtn: {
    marginLeft: 'auto',
  },
  inputInput: {
    padding: '0 10px',
  },
  lstSec: {padding: '40px 0'}
}));

export const Footer = (props) => {
    const classes = useStyles();
    const value = useContext(LabelContext);

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        justifyContent="flex-end"
        className={classes.lstSec}
      >
        {/* <Grid item xs={6} md={1} className="buttons">
          <Button variant="outlined">Cancel</Button>
        </Grid> */}
        <Grid item xs={12} md={4}>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}    
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.saveBtn}>
              <Button variant="contained">Save</Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} md={1} className="buttons">
          <Button variant="outlined">Cancel</Button>
        </Grid>
        <Grid item xs={6} md={1} className="buttons">
          <Button variant="contained" onClick={() => value.nextPage()}>Next</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
