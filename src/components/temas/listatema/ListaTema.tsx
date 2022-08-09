import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import Tema from '../../../models/Tema';
import './ListaTema.css';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();  //tem que ser autenticado (Token)

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado") 
      navigate("/login")
    }
  }, [token])


  async function getTemas(){   //requisição dos temas pela api
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token //propiedade que recebe o token, passa no header
      }
    })
  }


  useEffect(()=>{  //chamar a função do get
    getTemas()
  }, [temas.length])


  return (
    <>
    {

      temas.map(tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>

            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>

            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>

          </CardContent>
          
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    Atualizar
                  </Button>
                </Box>
              </Link>

              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    Deletar
                  </Button>
                </Box>
              </Link>

            </Box>
          </CardActions>
          
        </Card>
      </Box>
      ))
      }
    </>
  )
}

export default ListaTema