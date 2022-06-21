import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Input,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartState } from "../context/App-Context";

const ItemPanier = (props, { prod }) => {
  const {
    prod: { id, title, image, body, stars, price, color },
  } = props;
  console.log({ prod });

  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <ListItem>
      <Grid item sx={{ mr: 3 }}>
        <Avatar
          sx={{ width: 124, height: 74 }}
          variant="square"
          src={image}
          alt=""
          srcset=""
        />
      </Grid>
      <Grid item xs={4}>
        <ListItemText primary={title} secondary="color :" />
      </Grid>
      <Grid item xs={2}>
        <Typography variant={"h6"}>{price}€</Typography>
      </Grid>
      <Grid item xs={1}>
        <Input
          defaultValue="1"
          sx={{ width: "35px" }}
          size="small"
          name="quantiteProduit"
          type="number"
        ></Input>
      </Grid>
      <Grid item>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            })
          }
        >
          <DeleteIcon color="error" />
        </IconButton>
      </Grid>
      <Divider />
    </ListItem>
  );
};

export default ItemPanier;
