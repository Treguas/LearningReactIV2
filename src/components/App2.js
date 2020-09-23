
//COMPONENTES BASEADOS EM CLASSES

import React,{Component}  from 'react';




export default class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome:"Ezreal",
        }
    }
    render() {
        return(
        <div>
            <h4>Nome: {this.state.nome}</h4>
        </div>
        )
    }
}

/*-----------*/


//COMPONENTES BASEADOS EM FUNCTION

import React from 'react';


export default (props)=> {
    return(
        <h1>
            Bem-Vindo {props.nome} {props.sobrenome} 
            <span> {props.home}</span>
        </h1>
    )
}




