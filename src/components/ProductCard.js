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
  console.log(product);
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
      </CardContent>
      <CardActions className="product-card-actions">
        <Button
          size="small"
          color="primary"
          onClick={() => handleAddToCart(product)}
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
        >
          Add to Cart
        </Button>
        <Rating
          name="read-only"
          value={product.rating}
          readOnly
          size="small"
          className="product-card-rating"
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
