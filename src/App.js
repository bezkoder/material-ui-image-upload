import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";

import UploadImages from "./components/upload-images.component";

function App() {
  return (
    <div className="container">
      <div className="mg20">
        <Typography variant="h5">bezkoder.com</Typography>
        <Typography variant="h6">Material UI Image Upload with Preview</Typography>
      </div>

      <UploadImages />
    </div>
  );
}

export default App;
