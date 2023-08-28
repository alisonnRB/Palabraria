import React from 'react';
import './palavraEdit.css';

import logo from '../../abacaxiWhite.png';
import Cadastra from './cadastra/cadastra';
import api from '../../controler/api_Cad';

import { useState } from 'react';

export default function PalavraEdit() {
    const [resposta, setRespost] = useState('');
    const [imagens, setImagens] = useState({
        1: null,
        2: null, 
        3: null,
    });


    const enviar = async (event) => {
        event.preventDefault();

        const palavraEN = event.target.NomeEN.value;
        const palavraPT = event.target.NomePT.value;
        const categoria = event.target.categoria.value;
        const descricao = event.target.descricao.value;


        

        const resposta = await api.enviar(palavraEN,palavraPT,categoria,descricao, imagens);

        if(resposta.ok == true){
            window.location.reload();
        }
        setRespost(resposta.msg); 
    };

    return (
        <div className="edicao">
            <div className='boxEdit'>
                <span className='comandH'>
                    <img src={logo} />
                    <p>&gt;</p>
                </span>
                <form className='form' onSubmit={enviar}>
                    <Cadastra imagens={imagens} setImagens={setImagens} resposta={resposta}/>
                </form>
            </div>
        </div>
    );
}
