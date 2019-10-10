import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';

function whichDay(week) {
    var str = "";
    if (week == 0) {  
        str = "SUN";  
    } else if (week == 1) {  
            str = "Mon";  
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

class ForcastList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			data: props.datavalue
        }
    }

    render(){
        const { data } = this.state;
        let datetime=new Date(data.daily.data[4].time);
        let day = whichDay(datetime.getDay());
        let time = datetime.toLocaleString();
        return <>
		<ul>
            <li>
                <div>{moment(new Date(data.daily.data[0].time)).format('YYYY-MM-DD')}</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-rain']} size="3x" color="blue"/></div>
                <div>{data.daily.data[0].temperatureLow}°</div>
                <div>{data.daily.data[0].icon}</div>
            </li>
            <li>
                <div>{data.daily.data[1].time}</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'sun']} size="3x" color="yellow"/></div>
                <div>15°</div>
                <div>SUNNY</div>
            </li>
            <li>
                <div>{data.daily.data[2].time}</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-sun']} size="3x" color="blue"/></div>
                <div>11°</div>
                <div>CLOUDY</div>
            </li>
            <li>
                <div>THU</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'bolt']} size="3x" color="yellow"/></div>
                <div>7°</div>
                <div>STORM</div>
            </li>
            <li>
                <div>FRI</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'sun']} size="3x" color="yellow"/></div>
                <div>18°</div>
                <div>SUNNY</div>
            </li>
        </ul>
	</>;
    }
}

export default ForcastList;