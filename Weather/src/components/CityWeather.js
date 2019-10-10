import React from 'react';
import axios from 'axios';
import { tsImportEqualsDeclaration } from '@babel/types';




// const CityWeather = () => {
// 	return <>
// 		<div className="card-header-temperature">
//             <div className="temp-and-circle">
//                 <div className="temp">{data.currently.temperature}</div>
//                 <div className="celsius"></div>
//             </div>
//             <p className="card-header-weather">CLOUDY</p>
//             <div className="header-whether">
//                 <div className="humudity-value">
//                     <h1 className="head-value-humudity">HUMUDITY</h1>
//                     <p className="humi-value">64%</p>
//                 </div>
//                 <div className="wind-value">
//                     <h1 className="head-value-wind">WIND</h1>
//                     <p className="win-value">12 K/M</p>
//                 </div>
//             </div>
//         </div>
//         <div className="header-position">
//             <h1 >FRANCE</h1>
//         </div>
// 	</>;
// }

// export default CityWeather;

class CityWeather extends React.Component {
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
        axios.get('https://api.apixu.com/v1/current.json?key=1eb8b1de06614af3a3423418171609&q=Paris')
        .then(response => {
            console.log(response.data)
            // const axios_data = response.data.current;
            // console.log(axios_data)
            const {current: { condition: {text}, humidity, wind_kph, temp_c}} = response.data;
            this.setState({
                weather: text,
                isLoading: false,
                temperature: temp_c,
                humidity: humidity,
                wind: wind_kph,
                city : response.data.location.country
            })
        });
    }

    render(){
        const { isLoading, weather, temperature, city, humidity, wind } = this.state;
        if (isLoading) return 'isLoading'
        return <>
		<div className="card-header-temperature">
            <div className="temp-and-circle">
                <div className="temp">{temperature}</div>
                <div className="celsius"></div>
            </div>
            <p className="card-header-weather">{weather}</p>
            <div className="header-whether">
                <div className="humudity-value">
                    <h1 className="head-value-humudity">HUMUDITY</h1>
                    <p className="humi-value">{humidity}%</p>
                </div>
                <div className="wind-value">
                    <h1 className="head-value-wind">WIND</h1>
                    <p className="win-value">{wind}K/M</p>
                </div>
            </div>
        </div>
        <div className="header-position">
            <h1 >{city}</h1>
        </div>
	</>;
    }
}

export default CityWeather;