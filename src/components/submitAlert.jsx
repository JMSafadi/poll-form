import { Button, Snackbar, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import React from 'react';

const submitAlert = () => {


    return (
        <Snackbar open={open}  >
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert sx={{fontSize:'22px',
                            display:'flex',
                            alignItems:'center', 
                            justifyContent:'center', 
                            height:'100px'}} 
                            variant="filled"
                            severity="success"
                            >
                            Formulario enviado!
                <Button sx={{backgroundColor:'white', color:'black', margin:'20px'}} variant='contained'>
                    Ver respuestas
                </Button>
                </Alert>
        </Stack>
      </Snackbar>
    );
}

export default submitAlert;
