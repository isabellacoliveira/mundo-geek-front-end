import styled from 'styled-components'; 

export const ListaDeProdutos = styled.ul`
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #E5E5E5;

 li {
    list-style: none;
    padding-right: 8px;
    padding-top: 10px;
    
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
 }

@media (max-width: 900px) {
        margin: 0 ;
        padding: 2rem 1rem 3rem;
}
 
@media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
}
`

export const Titulos = styled.h1`
        @media (min-width: 900px) {
            padding-left: 220px;
            padding-top: 20px;
        }
        @media (max-width: 900px) {
            padding-left: 20px;
            font-size: 20px;
        }
`
export const Cima = styled.div`
            background-color: #E5E5E5;
            display: flex;
            flex-direction: row;

        .BotaoVerTudo{
            color: #2A7AE4;
            border: none;
            text-decoration: none;
            font-weight: bold;
            font-family: 'Raleway';
            font-style: normal;

            @media (max-width: 900px){
                font-size: 15px;
                padding-bottom: 10px;
                margin-bottom: 10px;
            }

            &:hover {
                transform: translateY(-4px);
                cursor: pointer;
    }
            @media (min-width: 900px) {
                padding-left: 900px;
                padding-top: 50px;
            }
            @media (max-width: 900px) {
                padding-left: 200px;
                padding-top: 30px;
                padding-right: 5px;
            }
        }
        .BotaoVerTudo img {
            margin-left: 10px;
            }
`
