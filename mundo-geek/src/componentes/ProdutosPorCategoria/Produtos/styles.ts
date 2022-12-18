import styled from 'styled-components'; 

export const BotaoVerProduto = styled.button` 
    color: #2A7AE4;
    border: none;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Raleway';
    font-style: normal;
    background-color: #A9A9A9;
    border-radius: 0px 0px 10px 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const LinkParaOutraPagina = styled.div `
    text-decoration: none;
`

export const NomeDoProduto = styled.h1` 
    font-size: 20px;
`
export const PrecoDoProduto = styled.h2` 
    font-size: 18px;
`

export const DivImgBotao = styled.div` 
    display: flex;
    flex-direction: row;
`

export const DivPrecoEditar = styled.div` 
    display: flex;
    flex-direction: row;
`

export const ImagemMais = styled.img` 
    width: 20px; 
    height: 20px;
    opacity: 0.5;
    margin-left: 100px;
    margin-top: 10px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const ImagemLapis = styled.div` 
    width: 50%; 
    padding-left: 70px;
`
export const CardDoProduto = styled.div`
    flex-direction: row;
    background-color: #E5E5E5;
    margin-right: 20px;
    background-color: #A9A9A9;
    border-radius: 10px 10px 10px 10px;
    padding: 10px;
    margin-bottom: 20px;

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
    }
`

export const ImagemProduto = styled.img` 
    width: 200px;
    height: 200px;
`

export const BotaoAdicionarAoCarrinho = styled.button`
    background-color: #2A7AE4;
    border: none;
    font-size: 15px;
    border-radius: 8px;
    width: 190px;
    height: 60px;
    color: #fff;
    margin-top: 15px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const VerProduto = styled.div` 
    text-decoration: none;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`