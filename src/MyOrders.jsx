
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  Divider,
  Grid,
} from '@mui/material';

export default function MyOrder() {
  const [paintList, setPaintList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `https://test4-ayw7.onrender.com/api/orders?filters[users_permissions_user][documentId]=${user.documentId}&populate=orderitems.paint.image`);

        console.log(response.data.data); // Check the structure of the data
        setPaintList(response.data.data); // Store the response data
        setLoading(false);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchOrderData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }
  function formate_date(d) {
    const date = new Date(d);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    return formattedDate
  }


  // console.log(formattedDate); 

  return (
    <Box padding={2}>
      <Typography variant="h5" gutterBottom>
        My Orders
      </Typography>

      <Grid container spacing={2}>
        {paintList.length > 0 ? (
          paintList.map((order, orderIndex) => (
            <Grid item xs={12} key={orderIndex}>
              <Typography variant="h8" component={'h4'} gutterBottom>
                Order ID: {order.documentId}  -   {formate_date(order.createdAt)}
              </Typography>
              {order.orderitems && order.orderitems.length > 0 ? (
                order.orderitems.map((item, itemIndex) => (
                  <Card key={itemIndex} sx={{ display: 'flex', marginBottom: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 150 }}
                      image={item.paint.image[0]?.formats?.thumbnail?.url || ''}
                      alt={item.paint.name}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography variant="h6">{item.paint.name}</Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        {item.paint.description || 'No description available'}
                      </Typography> */}
                      <Typography variant="body1" sx={{ marginTop: 1 }}>
                        Price: ₹{item.paint.price}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        payment Status: {order.payment_status || 'Pending'}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography>No paint items available</Typography>
              )}
              <Divider />
            </Grid>
          ))
        ) : (
          <Typography>No orders available</Typography>
        )}
      </Grid>
    </Box>
  );
}
