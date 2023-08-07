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
      <div className='container'>
    <ul className='options'>     
      <ol className='listaHeader'><p>options</p></ol>
      <ol className='listaHeader'><p>Home</p></ol>
      <ol className='listaHeader' onClick={() => setMostrarOption(true)}><p>categorias</p></ol>
      {mostrarOption1 && <Option1 fecharOption={fecharOption} />}
      <ol className='listaHeader'><p>fórum</p></ol>
    </ul>
    <div className='logo'></div>
    <span className='search'>
      <input type="text" className='pesquisa' placeholder='search' />
      <button className='bt'></button>
    </span>
    </div>
    </header> 
  );
}

