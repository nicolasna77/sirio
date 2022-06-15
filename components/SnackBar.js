import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const SnackbarComp = (props) => {
  const [open, setOpen] = useState(false);

  const { body } = props;
  return (
    <Snackbar open={open} autoHideDuration={1000}>
      <Alert severity="success">{body}</Alert>
    </Snackbar>
  );
};
export default SnackbarComp;
