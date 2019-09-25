import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faBluetooth } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far);




function App() {
  return (
    <div className="App">
      <div className="nav">
          <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'bars']} size="2x"/></div>
          <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']} size="2x"/></div>
      </div>
      <div class="card">
          <div class="card-header">
              <div class="header-temp">
                  <div class="temp-and-circle">
                    <div class="temp">12</div>
                    <div class="temp-circle"></div>
                  </div>
                  <div class="weather">CLOUDY</div>
                  <div class="header-whether">
                    <div class="humudity-value">
                        <div class="humidity">HUMUDITY</div>
                        <div class="humi-value">64%</div>
                    </div>
                    <div class="wind-value">
                        <div class="wind">WIND</div>
                        <div class="win-value">12 K/M</div>
                    </div>
                  </div>
              </div>
              <div class="header-position">
                  <div class="position">FRANCE</div>
              </div>
          </div>
          <div class="card-content">
              <div class="twitter">
              <div class="twitter-feed">
                 <img src={require('./Twitter.png')} class="twitter-icon"/>
                 <div class="feed-title">Twitter Feed</div>
                 <div class="feed-position">#France</div>
              </div>
              <div class="feedback">
                  <div class="photo">T</div>
                  <div class="message">Dont't forget your suncream tomorrow!</div>
              </div>
              <div class="feedback">
                  <div class="photo">Y</div>
                  <div class="message">Amazing weather in Paris.</div>
              </div>
              <div class="next">NEXT<FontAwesomeIcon icon={['fas', 'chevron-right']} size="1x"/></div>
              </div>
              <div class="gery-line"></div>
              <div class="calander" id="nav">
                <ul>
                    <li>
                        <div>MON</div>
                        <div class="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-rain']} size="3x" color="blue"/></div>
                        <div>9°</div>
                        <div>RAINNING</div>
                    </li>
                    <li>
                        <div>TUE</div>
                        <div class="weather-icon"><FontAwesomeIcon icon={['fas', 'sun']} size="3x" color="yellow"/></div>
                        <div>15°</div>
                        <div>SUNNY</div>
                    </li>
                    <li>
                        <div>WED</div>
                        <div class="weather-icon"><FontAwesomeIcon icon={['fas', 'cloud-sun']} size="3x" color="blue"/></div>
                        <div>11°</div>
                        <div>CLOUDY</div>
                    </li>
                    <li>
                        <div>THU</div>
                        <div class="weather-icon"><FontAwesomeIcon icon={['fas', 'bolt']} size="3x" color="yellow"/></div>
                        <div>7°</div>
                        <div>STORM</div>
                    </li>
                    <li>
                        <div>FRI</div>
                        <div class="weather-icon"><FontAwesomeIcon icon={['fas', 'sun']} size="3x" color="yellow"/></div>
                        <div>18°</div>
                        <div>SUNNY</div>
                    </li>
                </ul>
              </div>
          </div>

              
      </div>
    </div>
  );
}

export default App;
