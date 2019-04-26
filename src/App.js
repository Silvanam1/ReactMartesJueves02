import React from 'react';
import BotonIncremental from './BotonIncremental';
import Timer from './Timer';
import ShowHide from './ShowHide';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorBoton: [1000, 500, 250]
        };
        this.incrementar = this.incrementar.bind(this);
    }

    incrementar(idx) {
        this.setState(function(viejoEstado) {
            switch (idx) {
                case 2:
                    viejoEstado.valorBoton[2] ++;
                    break;
                case 1:
                    viejoEstado.valorBoton[1] ++;
                    viejoEstado.valorBoton[2] ++;
                    break;
                case 0:
                    viejoEstado.valorBoton[0] ++;
                    viejoEstado.valorBoton[1] ++;
                    viejoEstado.valorBoton[2] ++;
                    break;

            }
            return viejoEstado;
        });
    }

    render() {
        return (
        <div>
            <BotonIncremental valor={this.state.valorBoton[0]} 
                incrementar={() => this.incrementar(0)} />
            <BotonIncremental valor={this.state.valorBoton[1]} 
                incrementar={() => this.incrementar(1)} /> 
            <BotonIncremental valor={this.state.valorBoton[2]} 
                incrementar={() => this.incrementar(2)} /> 
            <br /><br />   
            <ShowHide />
        </div>
        );
    }
}

export default App;