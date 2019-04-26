import React from 'react';
import Componente1 from './Componente1';
import Componente2 from './Componente2';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unodos : 1
        }
    }
    componentWillMount() {
        let _this = this;
        function cambio() {
            if (_this.state.unodos === 1) {
                _this.setState({
                    unodos : 2
                })
            }
            else {
                _this.setState({
                    unodos : 1
                })
            }
            setTimeout(cambio, 15000);
        }
        setTimeout(cambio, 15000);
    }
    render() {
        if (this.state.unodos === 1) {
            return (<Componente1 />);
        }
        else {
            return (<Componente2 />);
        }
    }
}

export default App2;