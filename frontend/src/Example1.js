//3º Ação do React (Arquivo JSX - Javascript + XML)
import React, {useState} from 'react';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  //Array [valor, função de Atualização]

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
        <Header>Contador: {counter}</Header>
        <button onClick={increment}>Incrementar</button>
    </div>
    
    //<Header title="Semana Omnistack" />
  );
}

export default App;
