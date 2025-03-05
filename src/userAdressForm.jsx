import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import axios from 'axios';
import { Button } from '@mui/material';



export default function AddressForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = localStorage.getItem('jwt')
  const [formData, setFormData] = React.useState({
    address: '',
  });



  async function updateAddress() {
    try {
      const response = await axios.put(
        `https://test4-ayw7.onrender.com/api/users/${user.id}`,  // Ensure user.id is valid
        formData,  // Send formData directly, not { formData }
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${jwt}`  // Add "Bearer " before token
          }
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data))

      console.log("Update Successful:", response.data);
    } catch (error) {
      console.error("Error updating address:", error.response?.data || error.message);
    }
  }
  



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        '& > :not(style)': {
          m: 1,
          width: '40ch',
        },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography style={{ textAlign: 'center' }}>Fill Address</Typography>
      <TextField
        label="Address"
        variant="outlined"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" onClick={updateAddress} sx={{ marginTop: 2 }}>
        Proceed
      </Button>
    </Box>
  );
}
