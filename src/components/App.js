import React, { Component } from 'react';
import { render } from 'react-dom';



export default class App extends Component 
    {

        constructor(props)
        {
            super(props)
            this.state = {
                quantidadeDeItens : 1,
                nomeNovoItem : '',
                itens: [
                    {
                        id: '1',
                        nomeTarefa: 'Acordar',
                        status: 'false',
                    }
                ]
            }
        }

        renderItens()
        {
            let estadosAtuais = this.state.itens;

            return estadosAtuais.map((index)=>{
                return(
                    <tr key={index.id}>
                        <td>{index.id}</td>
                        <td>{index.nomeTarefa}</td>
                        <td>{index.status}</td>
                        <td><button onClick={()=>{this.updateStatus(index.id)}}>Finalizar</button></td>
                    </tr>
                )
            })
        }

        changeName(event)
        {
            this.setState({
                nomeNovoItem: event.target.value
            })
        }

        updateStatus(idElemento)
        {
            let itensAtuais = this.state.itens;
            for(let posicao in itensAtuais)
            {
                if(itensAtuais[posicao].id === idElemento)
                {
                    itensAtuais[posicao].status ==='true' ? itensAtuais[posicao].status = 'false' : itensAtuais[posicao].status = 'true'

                    this.setState({
                        itens: itensAtuais,
                    })
                }
            }



        }

        addNewIten()
        {
            if(this.state.nomeNovoItem === "")
            {
                alert('Por favor! Preencha o nome da tarefa')
                return false;
            }
            let itensAtuais = this.state.itens;
            let indiceUltimoRegistro = parseInt(itensAtuais.length) -1
            let codigoUltimoItemMaisUm = parseInt(itensAtuais[indiceUltimoRegistro].id) +1

            let novoItem = {
                id: codigoUltimoItemMaisUm,
                nomeTarefa: this.state.nomeNovoItem,
                status: "false",
            }
            itensAtuais.push(novoItem)

            this.setState({
                quantidadeDeItens: this.state.quantidadeDeItens +1,
                nomeNovoItem: "",
                itens : itensAtuais
            })


        }
    

        render(){
         return(
                <div>
                    <table>
                        <thead>
                        <tr>                   
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th></th>
                        </tr>
                        </thead>
                    
                    <tbody>
                        {this.renderItens()}
                    </tbody>
                    </table>

                        <div>
                            <input value={this.state.nomeNovoItem} onChange={(event)=>{this.changeName(event)}}></input>
                            <button onClick={(event)=>{this.addNewIten(event)}}>Inserir</button>
                        </div>
                </div>
        )
    }
    }
