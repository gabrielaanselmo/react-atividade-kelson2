import React from 'react';
import PrecisoEstudar from './components/PrecisoEstudar';
import { dobrarNumeros } from './utils/dobrarNumeros';

function App() {
  const listaNumeros = [1, 2, 3, 4, 5];
  const numerosDobrados = dobrarNumeros(listaNumeros);

  return (
    <div>
      <PrecisoEstudar nomeDaTecnologia="React" />
      <div>
        Números dobrados: {numerosDobrados.join(', ')}
      </div>
    </div>
  );
}

export default App;