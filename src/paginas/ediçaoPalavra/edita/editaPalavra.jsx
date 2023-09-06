import React, { useEffect, useState } from 'react';
import './editaPalavra.css';
import InputImg from '../../../components/inputImg/inputImg';
import api from '../../../controler/api_categoria';
import delll from '../../../controler/deleta_p';
import Search from '../../../controler/api_pesquisa';

import Pesquisa from '../../../pesquisa.png';

export default function Cadastra(props) {
    const [sugestaoVisivel, setSugestaoVisivel] = useState(false);

    const [categoria, setCategoria] = useState([]);

    const [digitado, setDigitado] = useState('');
    const [sPalavra, setsPalavra] = useState([undefined]);

    const [palavraEN, setPalavraEN] = useState('');
    const [palavraPT, setPalavraPT] = useState('');
    const [categoriaR, setCategoriaR] = useState('');
    const [descricao, setDescricao] = useState('');

    const [foto1, setFoto1] = useState('');
    const [foto2, setFoto2] = useState('');
    const [foto3, setFoto3] = useState('');
    const [foto4, setFoto4] = useState('');
    const [foto5, setFoto5] = useState('');
    const [foto6, setFoto6] = useState('');

    const [all, setAll] = useState(false);
    const [certeza, setCerteza] = useState(false);

    const Busca = async () => {
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

    async function pesquisa(event) {
        const novoDigitado = event.target.value;
        setDigitado(novoDigitado);

        setsPalavra(await executarPesquisa(novoDigitado));

    }

    async function executarPesquisa(digitado) {

        const resposta = await Search.enviar(digitado);

        const listaDePalavras = [];

        const L = resposta.dados;

        for (const chave in L) {
            if (L.hasOwnProperty(chave)) {
                listaDePalavras.push(L[chave]);
            }
        }

        return listaDePalavras;
    }

    function selecionado(index) {
        if (sPalavra[index] == undefined) {
            return;
        }

        setDigitado(sPalavra[index].palavraEN);
        setPalavraEN(sPalavra[index].palavraEN);
        setPalavraPT(sPalavra[index].palavraPT);
        setDescricao(sPalavra[index].descricao);
        setCategoriaR(sPalavra[index].categoria);
        
        setAll(true);

        if (sPalavra[index].imagens) {
            try {
                const foto = JSON.parse(sPalavra[index].imagens);

                setFoto1(foto[0]);
                setFoto2(foto[1]);
                setFoto3(foto[2]);
                setFoto4(foto[3]);
                setFoto5(foto[4]);
                setFoto6(foto[5]);
            } catch (error) {
                return;
            }
        }
    }

    const mostrarSugestao = (control) => {
        if (control == true) {
            setSugestaoVisivel(true);
        } else {
            setSugestaoVisivel(false);
        }
    };

    const renderizarSugestao = () => {
        if (sugestaoVisivel) {
            return (
                <div className='sugestoesCustom' onMouseEnter={() => mostrarSugestao(true)} onMouseLeave={() => mostrarSugestao(false)}>
                    {<div className='sugestoesCustom'>
                        <span onClick={() => selecionado(0)}>{sPalavra[0] && sPalavra[0].palavraEN}</span>
                        <span onClick={() => selecionado(1)}>{sPalavra[1] && sPalavra[1].palavraEN}</span>
                        <span onClick={() => selecionado(2)}>{sPalavra[2] && sPalavra[2].palavraEN}</span>
                        <span onClick={() => selecionado(3)}>{sPalavra[3] && sPalavra[3].palavraEN}</span>
                        <span onClick={() => selecionado(4)}>{sPalavra[4] && sPalavra[4].palavraEN}</span>
                        <span onClick={() => selecionado(5)}>{sPalavra[5] && sPalavra[5].palavraEN}</span>
                    </div>}
                </div>
            );
        }
        return null;
    };

    const botaoDeletaAll = () => {
        if (all) {
            return <div id='deleteAll' onClick={() => { setCerteza(true) }}></div>
        }
        return null;
    }

    const Certeza = () => {
        if (certeza) {
            return <div className='boxCerteza'>
                <div className='questBox'>
                    <span><p onClick={() => setCerteza(false)}>X</p></span>
                    <div><p>Você tem certeza de que deseja apagar essa palavra? é impossivel recupera-la depois!</p></div>
                    <span><button type='button' onClick={() => Deletar()}>CERTEZA!</button></span>
                </div>
            </div>
        }
    }

    const Deletar = async () => {

        const resposta = await delll.enviar(palavraEN);

        window.location.reload();
    };


    return (
        <>
            <span className='Error'><p>{props.qual}</p>{props.resposta}</span>

            <div className='buscaP'>
                <div className='campBuscaPalavra'>

                    <img id="search" src={Pesquisa} />
                    <input type="text" id='inputText' name="inputText" value={digitado} onChange={pesquisa} onMouseEnter={() => mostrarSugestao(true)} onMouseLeave={() => mostrarSugestao(false)} autoComplete="off" />

                    {renderizarSugestao()}


                </div>
            </div>

            <span className='boxFirst'>
                <div className='nomeBox'>

                    <div id='caixaDePalavras'>
                        <span>
                            <label htmlFor="NomeEN">PALABRA: </label>
                            <input type="text" id="NomeEN" name="NomeEN" value={palavraEN} onChange={(e) => setPalavraEN(e.target.value)} />
                        </span>
                        <span>
                            <label htmlFor="NomePT">PALAVRA: </label>
                            <input type="text" id="NomePT" name="NomePT" value={palavraPT} onChange={(e) => setPalavraPT(e.target.value)} />
                        </span>
                        <span>
                            <label htmlFor="selectCat" id='labelSelectCat'>CATEGORIA: </label>
                            <select id='selectCat' name='categoria' value={categoriaR} onChange={(e) => setCategoriaR(e.target.value)}>
                                {RenderizarItens()}
                            </select>
                        </span>
                    </div>

                    <div id='descri'>
                        <label htmlFor="Description" id='DescriptionLabel'>DESCRICAO: </label>
                        <textarea name="descricao" id="Description" cols="30" rows="10" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                    </div>


                </div>

                <div id='caixaIMGS'>
                    <span id='labelDaIMG'>IMAGENS: </span>
                    <span className='boxImgs'>
                        <span>
                            <div><InputImg setAtt={props.setAtt} att={props.att} view={foto1} com={'1'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg setAtt={props.setAtt} att={props.att} view={foto2} com={'2'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg setAtt={props.setAtt} att={props.att} view={foto3} com={'3'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                        </span>
                        <span>
                            <div><InputImg setAtt={props.setAtt} att={props.att} view={foto4} com={'4'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg setAtt={props.setAtt} att={props.att} view={foto5} com={'5'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                            <div><InputImg setAtt={props.setAtt} att={props.att} view={foto6} com={'6'} imagens={props.imagens} setImagens={props.setImagens} /></div>
                        </span>
                    </span>
                </div>

            </span>

            <div className='boxLast'>
                <input className='btForm' onClick={() => props.setPalavraAntiga(digitado)} type="submit" value="ENVIAR" />
            </div>
            {botaoDeletaAll()}
            {Certeza()}

        </>
    );
}