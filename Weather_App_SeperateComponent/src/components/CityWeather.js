import React from 'react';

const CityWeather = () => {
	return <>
		<div className="header-temp">
            <div className="temp-and-circle">
                <div className="temp">12</div>
                <div className="temp-circle"></div>
            </div>
            <div className="weather">CLOUDY</div>
            <div className="header-whether">
                <div className="humudity-value header-weather-detail">
                    <h1 className="head-value-humudity">HUMUDITY</h1>
                    <p className="humi-value">64%</p>
                </div>
                <div className="wind-value header-weather-detail">
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