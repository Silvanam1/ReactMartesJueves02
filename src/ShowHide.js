import React from 'react';

class ShowHide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clase: 'visible'
        }
        this.cambiarEstado = this.cambiarEstado.bind(this);
    }
    cambiarEstado(e) {
        console.log(e.target.selectedIndex);
        console.log(e.target.children[e.target.selectedIndex].value);
        this.setState(function(old) {
            if (old.clase==='visible') {
                return {
                    clase:'oculto'
                }
            }
            return {
                clase:'visible'
            } 
        });
    }
    render() {
        return (
            <div>
                <select onChange={this.cambiarEstado}>
                    <option value="visible">VISIBLE</option>
                    <option value="oculto">OCULTO</option>
                </select>
                <br /><br />
                <span className={this.state.clase}>Este es el texto que debe cambiar, 
                        es decir de mostrar el contenido o no </span>
            </div>
        );
    }
}

export default ShowHide;