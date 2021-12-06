import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox, 
} from "@mui/material";
import "./refine.scss";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      "& .MuiTableCell-root": {
        borderLeft: "1px solid rgba(224, 224, 224, 1)"
      }
    }
  });
  
  function createData(calories, fat, carbs, protein,) {
    return {calories, fat, carbs, protein, };
  }
  
  const rows = [
    createData('Line Item One', `$ 1,000,000`, '8,343', '35.23%', ),
    createData('Line Item Two', '$ 2,000,000', '3,444', '15.1%', ),
  ];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function RefineContent(props) {
     const classes = useStyles();

  return (
    <div className="refine_table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="td_one"> <img src={props.imgicon} className="icon-img"/> {props.dataname} </TableCell>
              <TableCell className="td_two">Total Amount USD</TableCell>
              <TableCell className="td_three">Total Transaction</TableCell>
              <TableCell className="td_four">Segment Percent</TableCell>
              <TableCell className="td_five">Include</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="data_one">{row.calories}</TableCell>
                <TableCell className="data_two">{row.fat}</TableCell>
                <TableCell className="data_three">{row.carbs}</TableCell>
                <TableCell className="data_four">{row.protein}</TableCell>
                <TableCell className="data_five"><Checkbox {...label} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RefineContent;
