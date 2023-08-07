import React, {useState} from 'react';
import './index.css';
import Option1 from './option1/option1.jsx';

export default function Head() {
  const [mostrarOption1, setMostrarOption] = useState(false);
  
  const fecharOption = () => {
      setMostrarOption(false);

    };
  return (
    <header>
    <ul className='options'>     
      <li className='listaHeader'><p>options</p></li>
      <li className='listaHeader'><p>Home</p></li>
      <li className='listaHeader' onClick={() => setMostrarOption(true)}><p>categorias</p></li>
      {mostrarOption1 && <Option1 fecharOption={fecharOption} />}
      <li className='listaHeader'><p>fórum</p></li>
    </ul>
    <div className='logo'></div>
    <span className='search'>
      <input type="text" className='pesquisa' placeholder='search' />
      <button className='bt'></button>
    </span>
    </header> 
  );
}

