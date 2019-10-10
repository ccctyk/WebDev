import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function whichDay(week) {
    var str = "";
    if (week == 0) {  
        str = "SUN";  
    } else if (week == 1) {  
            str = "MON";  
    } else if (week == 2) {  
            str = "TUE";  
    } else if (week == 3) {  
            str = "WED";  
    } else if (week == 4) {  
            str = "Thr";  
    } else if (week == 5) {  
            str = "FRI";  
    } else if (week == 6) {  
            str = "SAT";  
    }  
    return str;
}

// const Header = () => {
// 	return <>
//         <header>      
//         <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'bars']} size="2x"/></div>
//         <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']} size="2x"/></div>
//         </header>
//     </>;
// }

class Header extends React.Component{
    constructor() {
        super();
        this.state = { 
            time: new Date(),
            curindex: 0,
            array: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/summer-slide.jpg','https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/fall-slide.jpg','https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/winter-slide.jpg'] 
        }
        this.changImg = this.changImg.bind(this);
    }

    updateTime() {
        setInterval(() => {
            this.setState({ time: new Date() });
        },1000);
    }

    changImg(){
        setInterval(() => {
            if(this.state.curindex == this.state.array.length-1){
                this.setState({ curindex: 0 })
            } else{
                this.setState({ curindex: this.state.curindex+1 })
            }
            document.body.style.backgroundImage = "URL("+this.state.array[this.state.curindex]+")"; 
        },5000);
        
    }

    componentDidMount() {
        this.updateTime();
        // this.changImg();
    }

    render(){
        return <>
        <header>      
        <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'bars']} size="2x"/></div>
        <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']} size="2x"/></div>
        <div className="time"><h2>Current time:{this.state.time.toLocaleString().substring(0,10)} {whichDay(this.state.time.getDay())} {this.state.time.toLocaleTimeString()}</h2></div>
        </header>
    </>;
    }
} 

export default Header;