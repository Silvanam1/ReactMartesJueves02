import React from 'react';

function ProducirMuchosJsx(props) {
    let arr = [];

    for (let x=0; x < props.cantElementos; x++) {
        arr.push(<input key={x} type="button" value={"click:" + x}></input>);
    }

    return arr;
}

function App3() {
    return (
        <div>
            {(function() {
                return (<h1>Funcion IFFE</h1>)
            })()}
            <ProducirMuchosJsx cantElementos={10} />
        </div>);
}

export default App3;