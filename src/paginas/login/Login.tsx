import React, { useState, useEffect, ChangeEvent } from 'react';
import { TextField, } from '@mui/material';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '@mui/icons-material';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { logar } from '../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { addtoken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addtoken(token));
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await logar(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuario logado com sucesso', {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: 'dark',
              progress: undefined,
        });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: 'dark',
              progress: undefined,
        });

        }
    }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto1" >Entrar</Typography>
            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
            <Box marginTop={2} textAlign="center">
                <Button type="submit" variant="contained" color="primary">
                  Logar
                </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
            </Box>
            <Link to="/cadastrousuario"><Typography variant="subtitle1" gutterBottom align="center" className="texto1" >Cadastre-se</Typography></Link>

          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"   //serve para repetir a imagem quando vezes preferir ou não repetir a imagem
      >

      </Grid>
    </Grid>
  );
}

export default Login;