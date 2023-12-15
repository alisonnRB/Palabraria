import React from 'react';
import './comidas.css';
import { useEffect, useState } from 'react';

import Header from "../../components/Head/option";
import Card from "./card/cardComida";
import Footer from '../../components/footer';
import api from "../../controler/api_comidas";


export default function Comidas() {
    const [palavras, setPalavras] = useState('');


    const renderizarItens = () => {
        const elementos = [];

        const palavrasKeys = Object.keys(palavras);

        for (let i = 0; i < palavrasKeys.length; i++) {
            const palavraKey = palavrasKeys[i];
            const palavraInfo = palavras[palavraKey];
            elementos.push(<Card key={palavraKey} info={palavraInfo} />);
        }

        return elementos;
    };

    const Busca = async () => {
        const resposta = await api.enviar();

        setPalavras(resposta.dados);
    }

    useEffect(() => {
        Busca();
    }, []);

    return (<>
        <div className='box'>
            <Header />
            <table className="boxPalavras">
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='palavraRender'>
                    {renderizarItens()}
                </tbody>
            </table>
        </div>
        <Footer />
        </>
    );
}