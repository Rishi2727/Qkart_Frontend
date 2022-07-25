import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
<<<<<<< HEAD
  // console.log(product);
  return (
    <Card className="card">
      <CardMedia
        className="product-card-media"
        component="img"
        image={product.image}
        title={product.name}
      />
      <CardContent className="product-card-content">
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">${product.cost}</Typography>
        <Rating
          name="read-only"
          value={product.rating}
          readOnly
          size="small"
          className="product-card-rating"
        />
      </CardContent>
      <CardActions className="product-card-actions">
        <Button
          size="large"
          color="success"
          onClick={() => handleAddToCart(product)}
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          fullWidth
        >
          Add to Cart
        </Button>
        
      </CardActions>
=======
  return (
    <Card className="card">
>>>>>>> 5767137389eff21180db4866ca63d74ef791cdc7
    </Card>
  );
};

export default ProductCard;
