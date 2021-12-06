import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  ListItem,
  Button,
  AppBar,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import notif from "../../../assets/images/notif-nav-icon.png";
import search from "../../../assets/images/search-nav-icon.png";
import alert from "../../../assets/images/alerts-nav-icon.png";
import reports from "../../../assets/images/reports-nav-icon.png";
import Divider from '@mui/material/Divider';
import "./header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: '#fff',
  },
  hd: {
    display: "flex",
    justifyContent: "right",
    ["@media (max-width:476px)"]: {
      justifyContent: "right",
    },
  },
  logo: {
    textAlign: "left",
    paddingLeft: "20px",
    display: "flex",
  },
  tebs: {
    textAlign: "left",
  },
  menus: {
    padding: "6px 20px",
  },
  header: {
    padding: "6px 0px",
  },
  
  mview: {
    ["@media (min-width:780px)"]: {
      display: "none",
    },
    ["@media (max-width:476px)"]: {
      display: "none",
    },
  },
  mmview: {
    ["@media (min-width:476px)"]: {
      display: "none",
    },
  },
  dview: {
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logo_text: {
    ["@media (max-width:476px)"]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const handleTab =()=>{
     setValue("2")
    }
 
 return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          <Container>
          <Grid container
            direction="row"
            // justify = "space-between"
            alignItems="center"
            className={classes.header}
          >
            <Grid item lg={3} className={classes.logo}>
              <img src={logo} className="imgsize" />
            </Grid>
            <Grid item lg={4} xs={8} className={classes.mmview}>
              <div className={classes.menus}>
                
                  <Button className={classes.linkbtn}>
                  <img src={reports} className={classes.btnimg} />
                  </Button>
              
               
                  <Button className={classes.linkbtn}>
                    <img src={search} className={classes.btnimg} />
                  </Button>
                
              </div>
            </Grid>
            <Grid item xs={8} className={classes.mview}>
              <div className={classes.btnimg}>
                    <Button className={classes.menus}>
                      <img src={search} className={classes.cnimg} /> &nbsp;{" "}
                      <span>SEARCH</span>
                    </Button>
                    <Button className={classes.menus}>
                      <img src={reports} className={classes.cnimg} /> &nbsp;{" "}
                      <span>REPORTS</span>
                    </Button>
                    <Button className={classes.menus}>
                      <img src={alert} className={classes.cnimg} /> &nbsp;{" "}
                      <span>ALERTS</span>
                    </Button>
                    <Button className={classes.menus}>
                      <img src={notif} className={classes.cnimg} /> &nbsp;{" "}
                      <span>NOTIFICATIONS</span>
                    </Button>
              </div>
            </Grid>
            

            <Grid item lg={9} className={classes.dview}>
              <div className={classes.hd}>
                <Button className={classes.menus}>
                      <img src={search} className={classes.cnimg} /> &nbsp;{" "}
                      <span>SEARCH</span>
                    </Button>
                <Button className={classes.menus}>
                      <img src={reports} className={classes.cnimg} /> &nbsp;{" "}
                      <span>REPORTS</span>
                    </Button>
                <Button className={classes.menus}>
                      <img src={alert} className={classes.cnimg} /> &nbsp;{" "}
                      <span>ALERTS</span>
                    </Button>
                <Button className={classes.menus}>
                      <img src={notif} className={classes.cnimg} /> &nbsp;{" "}
                      <span>NOTIFICATIONS</span>
                    </Button>
              </div>
            </Grid>
          </Grid>
          </Container>
          <Divider />
        </AppBar>
       
    </div>
  );
}
