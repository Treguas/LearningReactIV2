
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