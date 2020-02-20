import React from 'react';

function Home() {

    return (
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis soluta impedit voluptas quod!</p>
            <hr className="my-4" />
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#cadastrar" role="button">Cadastrar</a>
                </p>
        </div>
        )
};
        
export default Home;