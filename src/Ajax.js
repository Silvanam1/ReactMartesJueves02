import React from 'react';
import {Component} from 'react';

class Ajax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            imagen: ''
        }
    }
    
    componentWillMount() {
        let _this = this;

        fetch('https://api.github.com/users/jdbonfor')
        .then(function(resp) {
            resp.json().then(z => {
                _this.setState({
                    nombre: z.name,
                    imagen: z.avatar_url
                });
            });
        })
    }

    render() {
        return(
        <div>
            <h1>Nombre: {this.state.nombre}</h1>
            <img src={this.state.imagen}></img>
        </div>
        );
    }
}

export default Ajax;