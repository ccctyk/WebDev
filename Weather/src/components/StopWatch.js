import React from 'react';

class StopWatch extends React.Component {
    constructor(){
        super();
        this.state = {
             time: 0,
             isrunning: false
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    start(){
        this.setState({ time: 0, isrunning: true});
        this.timeId = setInterval(function (){
            this.setState({ time: this.state.time + 1});
        }.bind(this),1)
    }

    stop(){
        if(this.timeId){
            clearInterval(this.timeId)
        }
        this.setState({ isrunning: false});
    }

    render(){
        return(<div>
            <h1>{this.state.time}</h1>
            <button onClick={this.start} disabled={this.state.isrunning}>start</button>
            <button onClick={this.stop}>stop</button>
            </div>
        );
    }
}

export default StopWatch;