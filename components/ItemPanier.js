import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Input,
  Link,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartState } from "../context/App-Context";

const ItemPanier = ({ prod }) => {
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
          src={prod.image}
          alt=""
          srcset=""
        />
      </Grid>
      <Grid item xs={4}>
        <Link href={"/produit/" + prod.uid}>
          <ListItemText primary={prod.title} secondary={prod.categori} />
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Typography variant={"h6"}>{prod.price}€</Typography>
      </Grid>
      <Grid item xs={1}>
        <Input
          defaultValue="1"
          sx={{ width: "35px" }}
          size="small"
          name="quantiteProduit"
          type="number"
          value={prod.qty}
          onClick={(e) =>
            dispatch({
              type: "CHANGE_CART_QTY",
              playload: {
                id: prod.id,
                qty: e.target.value,
              },
            })
          }
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
