import React from 'react';

class Componente2 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        alert('componentWillMount  2222');
    }
    componentDidMount() {
        alert('componentDidMount  2222');
    }
    componentWillUpdate() {
        alert('componentWillUpdate   2222');
    }
    componentDidUpdate() {
        alert('componentDidUpdate   2222');
    }
    componentWillUnmount() {
        alert('componentWillUnmount   2222');
    }
    render() {
        return(
            <h1>Componente Nro 22222222</h1>
        )
    }
}

export default Componente2;