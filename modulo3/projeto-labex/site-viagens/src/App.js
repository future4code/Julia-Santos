import {URL_BASE} from "./constants/url";
import { useRequestData } from "./Hooks/useRequestData";
import './App.css';

export default function App() {
  const viagens = useRequestData(URL_BASE);
  const detalhesViagens = useRequestData(`${URL_BASE}/trip/:id`);
  // const novasViagens = useRequestData(`${URL_BASE}/trips`);

  

  const viagensList = viagens && viagens.map((via, index) => {
    return <li key={index}>{via.name}</li>
  });

  console.log(detalhesViagens)

  return (
    <div>
      <h1>Viagens pelo Mundo</h1>
      {viagensList}
    </div>
  );
}