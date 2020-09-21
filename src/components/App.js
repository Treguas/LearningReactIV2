import React from 'react';



export default (props)=> {
    return(
        <h1>
            Bem-Vindo {props.nome} {props.sobrenome} 
            <span> {props.home}</span>
        </h1>
    )
}