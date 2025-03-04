import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function AddressForm() {
  const [country, setCountry] = React.useState([]);

  React.useEffect(() => {
    function fetchCountry() {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => setCountry(res.data)) // axios already parses the JSON response
        .catch((error) => console.error('Error fetching country data:', error));
    }

    fetchCountry(); // Call the fetch function
  }, []); // Empty dependency array to run only once after the initial render

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh', // Full viewport height to center vertically
        '& > :not(style)': {
          m: 1,
          width: '40ch',
        },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography  style={{ textAlign:'center'}}>
        Fill address
      </Typography>
      <TextField id="outlined-basic" label="Address Line 1" variant="outlined" />
      <TextField id="outlined-basic" label="Address Line 2" variant="outlined" />
      <TextField id="outlined-basic" label="City" variant="outlined" />
      <TextField id="outlined-basic" label="State" variant="outlined" />
      <TextField id="outlined-basic" label="Postal Code" variant="outlined" />
      <FormControl fullWidth sx={{ marginTop: 2 }}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
        >
          {country.map((e) => (
            <MenuItem key={e.name.common} value={e.name.common}>
              {e.name.common}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" sx={{ marginTop: 2 }}>
        Proceed
      </Button>
    </Box>
  );
}
