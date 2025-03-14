import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="order-success-page" style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h4" style={{ marginBottom: '30px',color:'teal' }}>Your order was successful!</Typography>
      <Typography variant="body1" style={{ marginBottom: '30px' }}>
        Thank you for shopping with us. You can continue shopping or go back to your cart.
      </Typography>

      <div>
        <Button
          variant="contained"
          sx={{ margin: '10px' }}
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </Button>
        <Button
          variant="outlined"
          sx={{ margin: '10px' }}
          onClick={handleGoToCart}
        >
          Go to Cart
        </Button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
