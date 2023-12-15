import React, { useState, useEffect } from "react";
import './index.css';
import argentinaImage from '../../países/argentina.jpg';
import boliviaImage from '../../países/bolivia.jpg';
import chileImage from '../../países/chile.jpg';
import colombiaImage from '../../países/colombia.jpg';
import costaRicaImage from '../../países/costa.jpg';
import cubaImage from '../../países/cuba.jpg';
import elSalvadorImage from '../../países/elSalvador.jpg';
import equadorImage from '../../países/equador.jpg';
import espanhaImage from '../../países/espanha.jpg';
import guatemalaImage from '../../países/guatemala.jpg';
import guineEquatorialImage from '../../países/guine.jpg';
import hondurasImage from '../../países/honduras.jpg';
import mexicoImage from '../../países/mexico.jpg';
import nicaraguaImage from '../../países/nicaragua.jpg';
import panamaImage from '../../países/panama.jpg';
import paraguaiImage from '../../países/paraguai.jpg';
import peruImage from '../../países/peru.jpg';
import portoRicoImage from '../../países/porto.jpg';
import republicaDominicanaImage from '../../países/republica.jpg';
import uruguaiImage from '../../países/uruguai.jpg';
import venezuelaImage from '../../países/venezuela.jpg';

const países = {
    1: { pais: 'Argentina', capital: 'Buenos Aires', url: argentinaImage },
    2: { pais: 'Bolivia', capital: 'Sucre', url: boliviaImage },
    3: { pais: 'Chile', capital: 'Santiago', url: chileImage },
    4: { pais: 'Colômbia', capital: 'Bogotá', url: colombiaImage },
    5: { pais: 'Costa Rica', capital: 'São José', url: costaRicaImage },
    6: { pais: 'Cuba', capital: 'Havana', url: cubaImage },
    7: { pais: 'El Salvador', capital: 'São Salvador', url: elSalvadorImage },
    8: { pais: 'Equador', capital: 'Quito', url: equadorImage },
    9: { pais: 'Espanha', capital: 'Madrid', url: espanhaImage },
    10: { pais: 'Guatemala', capital: 'Guatemala', url: guatemalaImage },
    11: { pais: 'Guiné Equatorial', capital: 'Malabo', url: guineEquatorialImage },
    12: { pais: 'Honduras', capital: 'Tegucigalpa', url: hondurasImage },
    13: { pais: 'México', capital: 'México', url: mexicoImage },
    14: { pais: 'Nicarágua', capital: 'Manágua', url: nicaraguaImage },
    15: { pais: 'Panamá', capital: 'Panamá', url: panamaImage },
    16: { pais: 'Paraguai', capital: 'Assunção', url: paraguaiImage },
    17: { pais: 'Peru', capital: 'Lima', url: peruImage },
    18: { pais: 'Porto Rico', capital: 'San Juan', url: portoRicoImage },
    19: { pais: 'República Dominicana', capital: 'Santo Domingo', url: republicaDominicanaImage },
    20: { pais: 'Uruguai', capital: 'Montevideu', url: uruguaiImage },
    21: { pais: 'Venezuela', capital: 'Caracas', url: venezuelaImage },
};

export default function Section() {
    const [background, setbackground] = useState(1);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const advanceBackground = () => {
            setbackground(prevBackground => {
                let nextBackground = prevBackground + 1;
                if (nextBackground > Object.keys(países).length) {
                    nextBackground = 1;
                }
                return nextBackground;
            });
        };

        const timeout = setTimeout(advanceBackground, 4000);

        setTimer(timeout);

        return () => {
            clearTimeout(timeout);
        };
    }, [background]);

    const handleNext = () => {
        clearTimeout(timer);

        setbackground(prevBackground => {
            let nextBackground = prevBackground + 1;
            if (nextBackground > Object.keys(países).length) {
                nextBackground = 1;
            }
            return nextBackground;
        });
    };

    const handlePrevious = () => {
        clearTimeout(timer);

        setbackground(prevBackground => {
            let nextBackground = prevBackground - 1;
            if (nextBackground < 1) {
                nextBackground = Object.keys(países).length;
            }
            return nextBackground;
        });
    };

    return (
        <section className="homePage" style={{ backgroundImage: `url(${países[background].url})` }}>
            <div className="voltar" onClick={handlePrevious}>&#60;</div>
            <div className="caixaTextHome">
                <h2 className="titleCardT">{países[background].pais}</h2>
                <p>{países[background].capital}</p>
            </div>
            <div className="paises"></div>
            <div className="avançar" onClick={handleNext}>&#62;</div>
        </section>
    );
}