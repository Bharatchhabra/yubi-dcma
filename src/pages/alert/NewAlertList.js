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
  IconButton,
  Button,
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { makeStyles } from "@material-ui/core";


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

export const NewAlertList = (props) => {
    

  return (
    <div>
        <Grid container spacing={0}>
          <Grid item xs={2} lg={1} className="p-0">
            <List sx={{ textAlign: "right" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{props.num}</Avatar>
                </ListItemAvatar>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={10} lg={6} className="p-0">
            <List
              sx={{ width: "100%", maxWidth: 560, }}
            >
              <ListItem
                sx={{
                  width: "100%",
                  maxWidth: 560,
                  boxShadow: "0px 4px 30px rgb(0 0 0 / 25%)",
                }}
              >
                <ListItemText primary={props.title}/>
                <ListItemAvatar>
                <IconButton aria-label="drag"><DragIndicatorIcon /></IconButton>
                </ListItemAvatar>
              </ListItem>
            </List>
          </Grid>
        </Grid>

    </div>
  );
};
