import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product/Product';



const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://footwearnews.com/wp-content/uploads/2021/08/nike-zoomx-vaporfly-next.jpg'},
    {id: 2, name: 'MacBook', description: 'Apple macbook', price: '$10', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Apple_16-inch_MacBook_Pro_rend.png?OyiPPMec9DLYb7sQFjnkqOKX268VRNMk&size=1200:675'}
];

const Products = () => {
  return (
  <main>
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
            </Grid>
        ))}
      </Grid>
  </main>
    );
};

export default Products;
