import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';
import axios from 'axios';



class ForcastListmap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			data: props.datavalue
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true,
            temperature: '12',
            weather: ''
        })
        axios.get('https://api.apixu.com/v1/forecast.json?key=1eb8b1de06614af3a3423418171609&q=Paris')
        .then(response => {
            console.log(response.data)
            // const axios_data = response.data.current;
            // console.log(axios_data)
            const {day: { condition: {text}, avgtemp_c }, date} = response.data.forecast.forecastday[0];
            this.setState({
                weather: text,
                isLoading: false,
                temperature: avgtemp_c,
                date: date
            })
        });
    }


    render(){
        const { weather, temperature, date } = this.state;
        const { data } = this.state;
        let datetime=new Date(data.daily.data[4].time);
        // let day = whichDay(datetime.getDay());
        // let time = datetime.toLocaleString();
        let list = [{day: date,
        temp: temperature,
        weather: weather,
        icon: ['fas', 'cloud-rain']
        },
        {day: '2019-10-10',
        temp: '17',
        weather: 'Bright Sunny Day',
        icon: ['fas', 'sun']
        },
        {day: '2019-10-11',
        temp: '15',
        weather: 'Partly cloudy then turn clear',
        icon: ['fas', 'cloud-sun']
        },
        {day: '2019-10-12',
        temp: '10',
        weather: 'A thunderstorm weather',
        icon: ['fas', 'bolt']
        }
        ,
        {day: '2019-10-13',
        temp: '20',
        weather: 'Bright Sunny Day',
        icon: ['fas', 'sun']
        }
        ,
        ]
        return <>
		<ul>
            {/* <li>
                <div>{moment(new Date(data.daily.data[0].time)).format('YYYY-MM-DD HH:mm:ss')}</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-rain']} size="3x" color="blue"/></div>
                <div>{data.daily.data[0].temperatureLow}°</div>
                <div>RAINNING</div>
            </li> */}
            {list.map(item => <li><div>{item.day}</div>
                                <div className="weather-icon"><FontAwesomeIcon icon={item.icon} size="3x" color="blue"/></div>
                                <div>{item.temp}°</div>
                                <div>{item.weather}</div></li>)}
        </ul>
	</>;
    }
}

export default ForcastListmap;