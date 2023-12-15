import React from 'react';
import './palavraEdit.css';

import logo from '../../abacaxiWhite.png';
import Cadastra from './cadastra/cadastra';
import Edita from './edita/editaPalavra';
import api from '../../controler/api_Cad';
import apiEdit from '../../controler/api_editPalavra';

import { useState } from 'react';

export default function PalavraEdit() {
    const [qual, setQual] = useState('CADASTRO');
    const [palavraAntiga, setPalavraAntiga] = useState('');
    const [resposta, setRespost] = useState('');
    const [imagens, setImagens] = useState({
        1: null,
        2: null, 
        3: null,
        4: null,
        5: null,
        6: null,
    });

    const [att, setAtt] = useState({
        1: false,
        2: false, 
        3: false,
        4: false,
        5: false,
        6: false,
    });
 


    const enviar = async (event) => {   
        event.preventDefault();

        const palavraEN = event.target.NomeEN.value;
        const palavraPT = event.target.NomePT.value;
        const categoria = event.target.categoria.value;
        const descricao = event.target.descricao.value;

        let resposta = '';

        if(qual == 'CADASTRO'){
            resposta = await api.enviar(palavraEN,palavraPT,categoria,descricao, imagens);
            window.location.reload();
        }
        else if(qual == 'ATUALIZAR'){
            resposta = await apiEdit.enviar(palavraEN,palavraPT,categoria,descricao, imagens, palavraAntiga, att);
            window.location.reload();
        }
        
        if(resposta.ok == true){
            
        }
        setRespost(resposta.msg); 
    };

    const Muda = () =>{
        if(qual =='CADASTRO'){
          setQual('ATUALIZAR');
        }else{
        setQual('CADASTRO');
        }
        
    }

    function Tela(){
        if(qual == 'CADASTRO'){
            return <Cadastra qual={qual} att={att} setAtt={setAtt}  imagens={imagens} setImagens={setImagens} resposta={resposta}/>
        }else{
            return <Edita qual={qual} att={att} setAtt={setAtt} setPalavraAntiga={setPalavraAntiga} imagens={imagens} setImagens={setImagens} resposta={resposta}/>
        }
    }

    return (
        <div className="edicao">
                <span className='comandH'>
                    <img src={logo} />
                    <p onClick={()=>Muda()}>&gt;</p>
                </span>
                <form className='form' onSubmit={enviar}>
                    {Tela()}
                </form>
        </div>
    );
}
