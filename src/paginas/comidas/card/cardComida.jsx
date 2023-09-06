import React from "react";
import './cardComida.css';

import { useEffect, useState } from "react";

export default function CardComida(props) {
    const [imagem, setImagem] = useState('');
    console.log(imagem);

    useEffect(() => {
        try {
            const imagens = JSON.parse(props.info['imagens']);
            if (Array.isArray(imagens)) {
                setImagem("http://192.168.255.56/palabraria/img/" + imagens[0]);
            }
        } catch (error) {
        }
    }, [props.info['imagens']]);

    return (
        <tr id="mainBox">
            <td id="card">
                <span className="content">
                    <div className="infos">
                        <span className="nomes"><h1>{props.info['palavraEN']}</h1><p>{'/' + props.info['palavraPT']}</p></span>
                        <div className="boxDescri">
                        {props.info['descricao']}
                        </div>
                    </div>
                    <div className="boxIMG">
                        <img src={imagem} style={{ width: '100%', height: '100%' }} alt="" />
                    </div>

                </span>
            </td>
        </tr>
    );
}