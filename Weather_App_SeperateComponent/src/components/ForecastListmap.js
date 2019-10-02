import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';


class ForcastListmap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			data: props.datavalue
        }
    }

    render(){
        const { data } = this.state;
        let datetime=new Date(data.daily.data[4].time);
        // let day = whichDay(datetime.getDay());
        // let time = datetime.toLocaleString();
        let list = [{day:moment(new Date(data.daily.data[0].time)).format('YYYY-MM-DD HH:mm:ss'),
        temp: data.daily.data[0].temperatureLow,
        weather: data.daily.data[0].icon
        },
        {day:moment(new Date(data.daily.data[1].time)).format('YYYY-MM-DD HH:mm:ss'),
        temp: data.daily.data[1].temperatureLow,
        weather: data.daily.data[1].icon
        },
        {day:moment(new Date(data.daily.data[2].time)).format('YYYY-MM-DD HH:mm:ss'),
        temp: data.daily.data[2].temperatureLow,
        weather: data.daily.data[2].icon
        },
        {day:moment(new Date(data.daily.data[3].time)).format('YYYY-MM-DD HH:mm:ss'),
        temp: data.daily.data[3].temperatureLow,
        weather: data.daily.data[3].icon
        },
        {day:moment(new Date(data.daily.data[4].time)).format('YYYY-MM-DD HH:mm:ss'),
        temp: data.daily.data[4].temperatureLow,
        weather: data.daily.data[4].icon
        },]
        return <>
		<ul>
            {/* <li>
                <div>{moment(new Date(data.daily.data[0].time)).format('YYYY-MM-DD HH:mm:ss')}</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-rain']} size="3x" color="blue"/></div>
                <div>{data.daily.data[0].temperatureLow}°</div>
                <div>RAINNING</div>
            </li> */}
            {list.map(item => <li><div>{item.day}</div>
                                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-rain']} size="3x" color="blue"/></div>
                                <div>{item.temp}°</div>
                                <div>{item.weather}</div></li>)}
        </ul>
	</>;
    }
}

export default ForcastListmap;