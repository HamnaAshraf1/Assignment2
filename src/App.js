import React from "react";
import { Grid } from "@material-ui/core";
import Tablesh from "./check/Tablesh";

function App() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={10}></Grid>
      <Grid item xs={15}>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={9}>
          <Tablesh></Tablesh>
      </Grid>
    </Grid>
  );
}

export default App;
