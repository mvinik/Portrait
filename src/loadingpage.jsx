import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularSize() {
    return (
<div style={{ height: '78vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Stack spacing={2} direction="row" alignItems="center">
        <CircularProgress size="30px" />
    </Stack>
</div>


    );
}