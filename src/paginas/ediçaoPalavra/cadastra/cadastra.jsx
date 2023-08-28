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
            <span className='Error'>{props.resposta}</span>

            <span className='boxFirst'>
                <div className='nomeBox'>
                    <span>
                        <label htmlFor="NomeEN">Palabra: </label>
                        <input type="text" id='NomeEN' name='NomeEN' />
                    </span>
                    <span>
                        <label htmlFor="NomePT">Palavra: </label>
                        <input type="text" id='NomePT' name='NomePT' />
                    </span>
                </div>
                <div className='boxSelect'>
                    <span>
                        <label htmlFor="selectCat">Categoria:</label>
                        <select id='selectCat' name='categoria'>
                            {RenderizarItens()}
                        </select>
                    </span>
                </div>
            </span>

            <div className='boxMid'>
                <span>imagens: </span>
                <span className='boxImgs'>
                    <div><InputImg com={'1'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                    <div><InputImg com={'2'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                    <div><InputImg com={'3'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                </span>
            </div>

            <span className='boxLast'>
                <span>
                    <label htmlFor="Description">descricao: </label>
                    <textarea name="descricao" id='Description' cols="30" rows="10"></textarea>
                </span>
                <input type="submit" value="Enviar" />
            </span>
        </>
    );
}