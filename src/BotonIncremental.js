import React from 'react';

function BotonIncremental(props) {
    return (
        <input type="button" onClick={props.incrementar} value={props.valor}></input>
    );
}

export default BotonIncremental;