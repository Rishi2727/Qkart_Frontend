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
        <Typography gutterBottom variant="body1" component="h6">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="body1" component="h6">${product.cost}</Typography>
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
    </Card>
  );
};

export default ProductCard;
