import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { styles } from './styles';





const Product = ({product}) => {
  return (
    <Card sx={styles.root}>
        <CardMedia sx={styles.media} image={product.image} title={product.name} />
        <CardContent>
            <Box sx={styles.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price}
                </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing sx={styles.cardActions}>
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
    );
};

export default Product;
