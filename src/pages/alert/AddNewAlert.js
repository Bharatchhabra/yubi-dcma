import React from "react";
import "./alert.scss";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  IconButton,
  Switch,
  Button,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { FiEdit } from 'react-icons/fi'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('11/12/2021', 'Daily Limit Money Xfer', 'D. Hubbard', 24, 4.0),
  createData('12/08/2021', 'Weekly Limit Money Xfer', 'D. Hubbard', 37, 4.3),
  createData('12/08/2021', 'Sending Money to Mixer', 'D. Hubbard', 24, 6.0),
  createData('12/08/2021', 'Daily Limit Money Xfer', 'D. Hubbard', 67, 4.3),
];

export const AddNewAlert = () => {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <div className="dcma_stepper">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid xs={12} md={8}>
            <h2 className="mainheadingh2">Add New Alert</h2>
          </Grid>
          <Grid xs={12} md={4} className="alert-btn-grid">
            <Button
              onClick={handleClick}
              startIcon={<AddIcon />}
              variant="contained"
              className="alert-btn"
            >
              Add New Alert
            </Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper} className="table-shadow">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="border-0 alerttabheading">Date Created</TableCell>
                <TableCell className="border-0 alerttabheading">Alert</TableCell>
                <TableCell className="border-0 alerttabheading">Created By</TableCell>
                <TableCell className="border-0 alerttabheading">Status</TableCell>
                <TableCell align="center" className="border-0 alerttabheading">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className="border-0 alert-data">
                    {row.name}
                  </TableCell>
                  <TableCell className="border-0 alert-data">{row.calories}</TableCell>
                  <TableCell className="border-0 alert-data">{row.fat}</TableCell>
                  <TableCell className="border-0 alert-data"><Button variant="contained" className="active-btn">Active</Button></TableCell>
                  <TableCell align="center" className="border-0 alert-data">
                  <IconButton aria-label="edit"><FiEdit className="editbtn"/></IconButton><IconButton aria-label="delete"> <HighlightOffIcon className="delete"/></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};
