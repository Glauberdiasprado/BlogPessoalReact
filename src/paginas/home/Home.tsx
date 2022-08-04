import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>

        <Grid alignItems="center" item xs={6} style={{ paddingTop: '80px'}}>
          <Box paddingX={10} >
            <Typography className='titulo, titulo-principal' variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Seja bem vindo(a)!</Typography>
            <Typography className='titulo' variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >Expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" className='botao'>Ver Postagens</Button>
          </Box>
        </Grid>

        <Grid item xs={6} style={{ paddingLeft: '150px', paddingTop: '80px' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/7544/7544531.png" alt="Computador" width="480px" height="480px" />
        </Grid>
        
        <Grid xs={12} className='postagens'>
            <TabPostagem/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home