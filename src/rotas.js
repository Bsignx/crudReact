import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import CadastroProduto from './pages/produtos/cadastro';
import ConsultaProdutos from './pages/produtos/consulta';

export default () => {
    return (
        <Switch>
            <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
            <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
            <Route exact path="/" component={Home} />
        </Switch>
    )
}


