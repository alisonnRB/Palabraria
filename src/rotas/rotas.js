import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../paginas/homepage/homePage';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <HomePage/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;