import * as React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);

  const anchorRef = React.useRef(null);
  const anchorRefFilter = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggleFilter = () => {
    setOpenFilter((prevOpenFilter) => !prevOpenFilter);
  };

  const handleCloseFilter = (event) => {
    if (
      anchorRefFilter.current &&
      anchorRefFilter.current.contains(event.target)
    ) {
      return;
    }

    setOpenFilter(false);
  };
  return (
    <Grid container>
      <Grid>
        <Button
          ref={anchorRefFilter}
          variant="outlined"
          color="primary"
          id="filter-button"
          aria-controls={openFilter ? "menuFilter" : undefined}
          aria-expanded={openFilter ? "true" : undefined}
          aria-haspopup="true"
          startIcon={<FilterAltIcon />}
          onClick={handleToggleFilter}
        >
          Trier par
        </Button>
      </Grid>
      <Popper
        openFilter={openFilter}
        anchorEl={anchorRefFilter.current}
        placement={"bottom-start"}
        transition
        disablePortal
        className="menuFilter"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: (placement = "right top"),
            }}
          >
            <Paper>bonjour</Paper>
          </Grow>
        )}
      </Popper>
      <Grid>
        <IconButton
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className="iconSort"
        >
          <SortIcon />
        </IconButton>
      </Grid>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
        className="menuSort"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: (placement = "right top"),
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <MenuItem onClick={handleClose}>Prix croissants</MenuItem>
                  <MenuItem onClick={handleClose}>Prix d??croissants</MenuItem>
                  <MenuItem onClick={handleClose}>Notes croissantes</MenuItem>
                  <MenuItem onClick={handleClose}>Notes d??croissantes</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Grid>
  );
};

export default Filter;
