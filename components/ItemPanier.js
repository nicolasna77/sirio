import {
  Grid,
  IconButton,
  Input,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const ItemPanier = () => {
  return (
    <div>
      <ListItem>
        <Grid item>
          <ListItem>
            <img src={""} alt="" srcset="" width="120px" />
          </ListItem>
        </Grid>

        <Grid item xs={7}>
          <ListItemText primary="Table Salon" secondary="color : grey" />
        </Grid>
        <Grid item xs="3">
          <Input
            defaultValue="1"
            sx={{ width: "35px" }}
            size="small"
            name="quantiteProduit"
            type="number"
          ></Input>
        </Grid>

        <Grid item xs="3">
          <Typography variant="h6">
            {/* {price} */}
            {""}€
          </Typography>
        </Grid>

        <Grid item>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon color="error" />
          </IconButton>
        </Grid>
      </ListItem>
    </div>
  );
};

export default ItemPanier;
