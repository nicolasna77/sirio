import {
  Autocomplete,
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useApi from "./service/useApi";
import Link from "next/link";

const SearchBar = () => {
  const { res } = useApi();

  return (
    <div>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={res}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => (
          <Link href={"/produit/" + option.uid}>
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <image
                loading="lazy"
                width={50}
                src={option.image}
                srcSet={option.image}
                alt={option.image}
              />
              <Grid container>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    component={"span"}
                  ></Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="subtitle2">{option.title}</Typography>
                </Grid>
                <Grid item xs={2} sx={{ float: "right" }}>
                  <Typography variant="subtitle2">{option.price}€</Typography>
                </Grid>
              </Grid>
            </Box>
          </Link>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={"Recherche"}
            sx={{ minWidth: "350px", background: "#fff" }}
            size="small"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <React.Fragment>
                  <IconButton size="small">
                    <SearchIcon />
                  </IconButton>
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};
export default SearchBar;
