import React from "react";
import "./alert.scss";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Container,
  Avatar,
  Grid,
  InputBase,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { NewAlertList } from "./NewAlertList";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
  },
  saveBtn: {
    marginLeft: "auto",
  },
  inputInput: {
    padding: "0 10px",
  },
  lstSec: { padding: "40px 0" },
}));

export const NewAlert = () => {
  const classes = useStyles();
  return (
    <div className="dcma_stepper">
      <Container maxWidth="xl">
        <h2 className="mainheadingh2">New Alert</h2>

        <NewAlertList num="1" title="Daily Limit Money Xfer" />
        <NewAlertList num="2" title="Weekly Limit Money Xfer" />
        <NewAlertList num="3" title="Send Money To Mixer" />

        <Grid container spacing={0}>
          <Grid item xs={2} lg={1}>
            <List sx={{ textAlign: "right" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar> </Avatar>
                </ListItemAvatar>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={10} lg={6}>
            <List sx={{ width: "100%", maxWidth: 560 }}>
              <ListItem
                sx={{
                  width: "100%",
                  maxWidth: 560,
                  bgcolor: "background.paper",
                  boxShadow: "0px 4px 30px rgb(0 0 0 / 25%)",
                }}
              >
                <Grid container>
                  <Grid md="12" xs="12">
                    <h2 className="option_heading">Add New Step</h2>
                  </Grid>
                  <Grid md="8" xs="12">
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
                </Grid>
              </ListItem>
            </List>
            <Grid
              container
              spacing={0}
              justifyContent="end"
              className="alert-footer-btn"
            >
              <Grid item xs={6} md={3} className="buttons">
                <Button variant="outlined">Cancel</Button>
              </Grid>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={1}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
