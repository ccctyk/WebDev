import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ForcastList = () => {
	return <>
        <ul>
            <li>
                <div>MON</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-rain']} size="3x" color="blue"/></div>
                <div>9°</div>
                <div>RAINNING</div>
            </li>
            <li>
                <div>TUE</div>
                <div className="weather-icon"><FontAwesomeIcon icon={['fas', 'sun']} size="3x" color="yellow"/></div>
                <div>15°</div>
                <div>SUNNY</div>
            </li>
            <li>
                <div>WED</div>
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

export default ForcastList;