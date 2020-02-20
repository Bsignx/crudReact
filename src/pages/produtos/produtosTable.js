import React from 'react';

export default (props) => (
    <table className="table table-hover">
        <thead>
            <tr className="table-primary">
                <th scope="col" >Nome</th>
                <th scope="col" >SKU</th>
                <th scope="col" >Preço</th>
                <th scope="col" >Fornecedor</th>
                <th scope="col" ></th>
            </tr>
        </thead>
        <tbody>
            {
                props.produtos.map((produto, index) => {
                    return (
                        <tr key={index}>
                            <th>{produto.nome}</th>
                            <th>{produto.sku}</th>
                            <th>{produto.preco}</th>
                            <th>{produto.fornecedor}</th>
                            <th>
                                <button onClick={ () => props.editarAction(produto.sku)} className="btn btn-primary">Editar</button>
                                <button onClick={ () => props.deletarAction(produto.sku)} className="btn btn-danger ml-2">Remover</button>
                            </th>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
)

