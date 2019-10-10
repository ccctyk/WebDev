import React from 'react';

class ActionLinks extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e)
    }


    render(){
        return(<div>
            <a huruf="#" onclick={this.handleClick}></a>
            </div>
        );
    }
}

export default ActionLinks;