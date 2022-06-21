import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormControl from "@mui/material/FormControl";
import Grow from "@mui/material/Grow";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
// api pour gerer le system de couleur pour un article
import { CirclePicker } from "react-color";
import { CartState } from "../context/App-Context";

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteIcon: false,
    };
  }
  render() {
    return (
      <div>
        <IconButton
          className="buttonFavorite"
          onClick={() =>
            this.setState({ favoriteIcon: !this.state.favoriteIcon })
          }
        >
          {this.state.favoriteIcon ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorderIcon color="action" />
          )}
        </IconButton>
      </div>
    );
  }
}

const CardProduct = ({ prod }) => {
  // const { prod } = props;

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Grow in={"to"}>
        <Card elevation={0} className="cardProduct">
          <CardContent>
            <FavoriteButton />
            <CardActionArea>
              <Link href={"/produit/" + prod.id}>
                <div>
                  <CardMedia
                    component="img"
                    height="170"
                    src={prod.image}
                    alt={prod.image}
                  />
                  <Box sx={{ p: 1 }}>
                    <Rating
                      value={prod.stars}
                      name="rating"
                      size="small"
                      precision={0.5}
                    />
                  </Box>
                  <Box sx={{ p: 1 }}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {prod.title}
                    </Typography>

                    <Typography variant="body2" color="text.primary">
                      {prod.body}
                    </Typography>
                  </Box>
                </div>
              </Link>
              <Grid
                container
                item
                alignItems="center"
                sx={{ p: 1 }}
                spacing={1}
                xs={12}
                md={12}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <CirclePicker
                    circleSize={20}
                    height="12px"
                    colors={prod.color}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  {cart.some((p) => p.id === prod.id) ? (
                    <Button
                      variant="danger"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      Supprimer
                    </Button>
                  ) : (
                    <IconButton
                      color="primary"
                      className="iconButtonAddShop"
                      aria-label="ajouter au panier"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: prod,
                        })
                      }
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  )}

                  <Typography
                    sx={{ float: "right" }}
                    className="priceCardProduct"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {prod.price} €
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
};
export default CardProduct;
