import { IconButton, Paper } from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      elevation="0"
      sx={{
        borderRadius: "26px",
        width: "350px",
        border: "1px solid #dbdbdb",
      }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Recherche"
        inputProps={{ "aria-label": "Recherche" }}
      />
    </Paper>
  );
};
export default SearchBar;
