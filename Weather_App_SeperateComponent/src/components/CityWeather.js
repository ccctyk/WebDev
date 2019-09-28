import React from 'react';

const CityWeather = () => {
	return <>
		<div className="card-header-temperature">
            <div className="temp-and-circle">
                <div className="temp">12</div>
                <div className="celsius"></div>
            </div>
            <p className="card-header-weather">CLOUDY</p>
            <div className="header-whether">
                <div className="humudity-value">
                    <h1 className="head-value-humudity">HUMUDITY</h1>
                    <p className="humi-value">64%</p>
                </div>
                <div className="wind-value">
                    <h1 className="head-value-wind">WIND</h1>
                    <p className="win-value">12 K/M</p>
                </div>
            </div>
        </div>
        <div className="header-position">
            <h1 >FRANCE</h1>
        </div>
	</>;
}

export default CityWeather;