import axios from 'axios';

const listarSessoes = async (idCinema) => {
    let dataResponse;
    try{
        dataResponse = await axios.get(`http://localhost:3000/sessoes/${idCinema}`);
    }catch(error){
        dataResponse = error;
    }
    
    return dataResponse;
}

const listarCidades = async () => {
    let dataResponse;
    try{
        dataResponse = await axios.get(`http://localhost:3000/cidades`);
    }catch(error){
        dataResponse = error;
    }
    
    return dataResponse;
}

const listarCinemas = async (idCidade) => {
    let dataResponse;
    try{
        dataResponse = await axios.get(`http://localhost:3000/cinemas/${idCidade}`);
    }catch(error){
        dataResponse = error;
    }
    
    return dataResponse;
}

export default { listarCidades, listarCinemas, listarSessoes };