import React, { useEffect, useState } from 'react';
import './cadastra.css';
import InputImg from '../../../components/inputImg/inputImg';
import api from '../../../controler/api_categoria';

export default function Cadastra(props) {
    const [categoria, setCategoria] = useState([]);

    const Busca = async () => {
        try {
            const resposta = await api.enviar();
            if (resposta.ok === true) {
                const erro = document.getElementsByClassName('Error');
                if (resposta.msg == 'Inserção realizada com sucesso.') {
                    for (let i = 0; i < erro.length; i++) {
                        erro[i].style.color = 'green';
                    }
                } else {
                    for (let i = 0; i < erro.length; i++) {
                        erro[i].style.color = 'red';
                    }
                }

                setCategoria(resposta.categorias);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const RenderizarItens = () => {
        return Object.keys(categoria).map((key, index) => (
            <option value={key} key={index}>
                {categoria[key]}
            </option>
        ));
    };

    useEffect(() => {
        Busca();
    }, []);


    return (
        <>
            <span className='Error'><p>{props.qual}</p>{props.resposta}</span>

            <div className='buscaP'></div>

            <span className='boxFirst'>
                <div className='nomeBox'>

                    <div id='caixaDePalavras'>
                        <span>
                            <label htmlFor="NomeEN">PALABRA: </label>
                            <input type="text" id='NomeEN' name='NomeEN' />
                        </span>
                        <span>
                            <label htmlFor="NomePT">PALAVRA: </label>
                            <input type="text" id='NomePT' name='NomePT' />
                        </span>
                        <span>
                            <label htmlFor="selectCat" id='labelSelectCat'>CATEGORIA: </label>
                            <select id='selectCat' name='categoria'>
                                {RenderizarItens()}
                            </select>
                        </span>
                    </div>

                    <div id='descri'>
                        <label htmlFor="Description" id='DescriptionLabel'>DESCRICAO: </label>
                        <textarea name="descricao" id='Description' cols="30" rows="10"></textarea>
                    </div>


                </div>

                <div id='caixaIMGS'>
                    <span id='labelDaIMG'>IMAGENS: </span>
                    <span className='boxImgs'>
                        <span>
                            <div><InputImg com={'1'} att={props.att} setAtt={props.setAtt} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg com={'2'} att={props.att} setAtt={props.setAtt} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg com={'3'} att={props.att} setAtt={props.setAtt} imagens={props.imagens} setImagens={props.setImagens} /></div>
                        </span>
                        <span>
                            <div><InputImg com={'4'} att={props.att} setAtt={props.setAtt} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg com={'5'} att={props.att} setAtt={props.setAtt} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg com={'6'} att={props.att} setAtt={props.setAtt} imagens={props.imagens} setImagens={props.setImagens} /></div>
                        </span>
                    </span>
                </div>

            </span>

            <div className='boxLast'>
                <input className='btForm' type="submit" value="ENVIAR" />
            </div>
        </>
    );
}