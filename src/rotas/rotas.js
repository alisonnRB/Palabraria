import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../paginas/homepage/homePage';
import PalavraEdit from '../paginas/ediçaoPalavra/palavraEdit';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <HomePage/> } />
            <Route path='/palavraEdit' element={ <PalavraEdit/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;