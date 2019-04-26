import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nroSeq: 2
        }
    }

    componentWillMount() {
        let _this = this;
        function innerFn() {
            _this.setState({
                nroSeq : _this.state.nroSeq * 2
            });
            setTimeout(innerFn, 2000);
        }
        innerFn();
    }

    render() {
        return (
            <h1>Sequencia: {this.state.nroSeq}</h1>
        );
    }
}

export default Timer;