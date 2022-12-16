import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import AdministradorRoutes from "router";
import ClienteRoutes from 'routes'; 

function App() {
  const { usuario } = useAutenticacao();

  return (
        <>
        {usuario !== undefined ? <ClienteRoutes /> :  <AdministradorRoutes /> }
        </>
  );
}

export default App;
