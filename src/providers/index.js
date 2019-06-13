import axios from 'axios';

const listarSessoes = async (idCinema, duracao, classificacao_etaria) => {
    let dataResponse;
    console.log(classificacao_etaria)
    try {
        dataResponse = await axios.get(`http://localhost:3000/sessoes/${idCinema}?classificacao_etaria=${classificacao_etaria}&duracao=${duracao}`);
    } catch (error) {
        dataResponse = error;
    }

    return dataResponse;
}

const listarCidades = async () => {
    let dataResponse;
    try {
        dataResponse = await axios.get(`http://localhost:3000/cidades`);
    } catch (error) {
        dataResponse = error;
    }

    return dataResponse;
}

const listarCinemas = async (idCidade) => {
    let dataResponse;
    try {
        dataResponse = await axios.get(`http://localhost:3000/cinemas/${idCidade}`);
    } catch (error) {
        dataResponse = error;
    }

    return dataResponse;
}

export default { listarCidades, listarCinemas, listarSessoes };