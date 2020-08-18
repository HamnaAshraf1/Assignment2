import React, { useState } from 'react';
import { TextField, Checkbox, TableCell } from "@material-ui/core";


const TableCheck = (props) => {
    
    const [cbox1, setcbox1] = useState(false);
    const [textfield1, settextfield1] = useState(true);
    const [percent, setPercent] = useState(0);
    const [cbox2, setcbox2] = useState(false);
    const [textfield2, settextfield2] = useState(true);
    const [price, setPrice] = useState(0);
    
 
    return (
      <TableCell component="th" scope="row">
        <Checkbox checked={cbox1}
          
          onChange={() => {
            setcbox2(false);
            setcbox1(true);
            settextfield1(false);
            settextfield2(true);
            setPrice(0);
          }}
        />
        <TextField type="number" size="small" disabled={textfield1}
          error={percent >= 0 && percent <= 100 ? false : true}
          helperText={
            percent >= 0 && percent <= 100 ? "" : "Percent should be >= 0 and <= 100"
          }
          onChange={(props) => {
            setPercent(props.target.value);
          }}
          value={percent}
          label="%"
          variant="outlined"
         
        ></TextField>
        <br />
        <br />
        <Checkbox
          checked={cbox2}
          onChange={() => {
            setcbox2(true);
            setcbox1(false);
            settextfield2(false);
            settextfield1(true);
            setPercent(0);
          }}
        />
        <TextField type="number" size="small" error={price >= 0 ? false : true}  disabled={textfield2}
           helperText={price >= 0 ? "" : "Price should be > or = 0"}
           value={price}
           onChange={(props) => {
             setPrice(props.target.value);
           }}
           label="£"
          variant="outlined"
        ></TextField>
      </TableCell>
    );
  };
  

 
export default TableCheck;