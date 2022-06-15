import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormControl from "@mui/material/FormControl";
import Grow from "@mui/material/Grow";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// api pour gerer le system de couleur pour un article
import { CirclePicker } from "react-color";

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

const CardProduct = (props) => {
  const {
    data: { title, image, description, stars, price, color },
  } = props;
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Grow in="to">
        <Card elevation="0" className="cardProduct">
          <CardContent>
            <FavoriteButton />
            <CardActionArea>
              <CardMedia component="img" height="170" src={image} alt={title} />
              <Box>
                <Rating
                  value={stars}
                  name="rating"
                  size="small"
                  precision={0.5}
                />
              </Box>

              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>

              <Typography variant="body2" color="text.primary">
                {description}
              </Typography>

              <Grid container alignItems="center" xs={12} md={12}>
                <Grid item xs={12} sm={12} md={12}>
                  <CardActions>
                    <FormControl>
                      <CirclePicker
                        circleSize={20}
                        height="12px"
                        colors={color}
                      />
                    </FormControl>
                  </CardActions>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <IconButton
                    color="primary"
                    className="iconButtonAddShop"
                    aria-label="ajouter au panier"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <Typography
                    sx={{ float: "right" }}
                    className="priceCardProduct"
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                  >
                    {price} €
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
