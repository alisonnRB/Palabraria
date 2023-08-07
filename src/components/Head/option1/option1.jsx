import React, {useState} from 'react';
import './option1.css';

export default function Option1(props) {
  const [classeAplicada, setClasseAplicada] = useState('');

  const adicionarClasse = () => {
    setClasseAplicada('aberto');
  };

  const removerClasse = () => {
    setClasseAplicada('');

  };
  const [classHoverAplicada, setHover] = useState('');
  const hovered = ()=>{
    setHover('hovered');
  }
  const notHovered = ()=>{
    setHover('');
  }
  return (
    <div className='boxOpção1'>
    <span className='boxOpção1-content'>
    <div className={`aba ${classeAplicada}`}>
        <span className='fechaOpção1'><p onClick={()=>{adicionarClasse();setTimeout(()=>{removerClasse();props.fecharOption();},600);}}>X</p></span>
        <ol className='listaOpção1'>
            <li onMouseOver={hovered} onMouseOut={notHovered}><p>option</p></li>
            <li><p>option</p></li>
            <li><p>option</p></li>
            <li><p>option</p></li>
        </ol>
    </div>
    <div className={`imagem ${classeAplicada, classHoverAplicada}`}>
    </div>
    </span>
    </div>
  );
}