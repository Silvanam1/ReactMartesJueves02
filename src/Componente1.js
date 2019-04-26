import React from 'react';

class Componente1 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        alert('componentWillMount 1111');
    }
    componentDidMount() {
        alert('componentDidMount 1111');
    }
    componentWillUpdate() {
        alert('componentWillUpdate 1111');
    }
    componentDidUpdate() {
        alert('componentDidUpdate 1111');
    }
    componentWillUnmount() {
        alert('componentWillUnmount 1111');
    }
    render() {
        return(
            <h1>Componente Nro 11111111111</h1>
        )
    }
}

export default Componente1;