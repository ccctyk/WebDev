import React from 'react';

class Greeting extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = { name: "Yingkun"}
    }

    handleClick(){
        alert(`hello,${this.state.name}!`);
        console.log(this.props);
    }

    render(){
        return(
            <button onClick={this.handleClick}>Greeting</button>
        );
    }
}

export default Greeting;