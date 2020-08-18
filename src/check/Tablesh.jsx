import React from "react";
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow,Paper,makeStyles} from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import Tablecheck from "./TableCheck";

const style = makeStyles({
  usestyle: {
     minWidth: 780,
  },
});

export default function Tablesh() {
  const classes = style();
  const tableRow = ["Estate", "5-6 Passengers","7 Passengers","8 Passengers","9 Passengers","15 Passengers","16 Passengers"];
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.usestyle} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableRow.map((tableRow) => (

              <TableCell key={tableRow}>
                {tableRow}
              </TableCell>
            
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          
          <TableRow>
            {tableRow.map((tableRow, index) => (
               
               <Tablecheck key={index}></Tablecheck>
            
            ))}
          </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
