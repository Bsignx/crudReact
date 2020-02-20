import React from 'react';
import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card';

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: [],
    atualizando: false,
}

class CadastroProduto extends React.Component {

    state = estadoInicial;

    constructor() {
        super()
        this.service = new ProdutoService()
    }

    onChange = (e) => {
        const valor = e.target.value;
        const nomeDoCampo = e.target.name;
        this.setState({ [nomeDoCampo]: valor });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
        }
        try {
            this.service.salvar(produto);
            this.limpaCampos();
            this.setState({ sucesso: true });
        } catch (erro) {
            const errors = erro.errors;
            this.setState({ errors: errors })
        }


    };

    limpaCampos = () => {
        this.setState(estadoInicial);
    };

    componentDidMount() {
        const sku = this.props.match.params.sku;

        if (sku) {
            const resultado = this.service.obterProdutos().filter(produto => produto.sku === sku);
            if (resultado.length === 1) {
                const produtoEncontrado = resultado[0];
                this.setState({ ...produtoEncontrado, atualizando: true });
            }
        }
    }



    render() {
        return (
            <Card header={this.state.atualizando ? 'Atualização de Produtos' : 'Cadastro de Produtos'}>
                    <form id="frmSubmit" onSubmit={this.onSubmit}>
                        {this.state.sucesso &&
                            <div className="alert alert-dismissible alert-success">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Muito bem!</strong> Cadastro feito com sucesso.
                            </div>
                        }
                        {this.state.errors && this.state.errors.length > 0 &&
                            this.state.errors.map((msg, index) => {
                                return (
                                    <div key={index} className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Erro!</strong> {msg}
                                    </div>
                                )
                            })
                        }

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Nome: *</label>
                                    <input type="text" name="nome"
                                        value={this.state.nome}
                                        className="form-control"
                                        onChange={this.onChange}
                                    />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >SKU: *</label>
                                    <input type="text"
                                        name="sku"
                                        disabled={this.state.atualizando}
                                        value={this.state.sku}
                                        className="form-control"
                                        onChange={this.onChange}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição:</label>
                                    <textarea name="descricao"
                                        value={this.state.descricao}
                                        className="form-control"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Preço: *</label>
                                    <input name="preco"
                                        type="text"
                                        value={this.state.preco}
                                        className="form-control"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Fornecedor: *</label>
                                    <input name="fornecedor"
                                        type="text"
                                        value={this.state.fornecedor}
                                        className="form-control"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-success">
                                    {this.state.atualizando ? 'Alterar ' : 'Salvar '}
                                </button>
                            </div>
                            <div className="col-md-1">
                                <button onClick={this.limpaCampos} className="btn btn-primary">Limpar </button>
                            </div>
                        </div>
                    </form>
            </Card>
        )
    }
}

export default withRouter(CadastroProduto);