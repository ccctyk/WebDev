import React from 'react';
import ForcastList from './ForcastList';
import Twitter from './Twitter';
import CityWeather from './CityWeather';

const Main = () => {
    return <>
    <main>
        <div className="card">
			<div className="card-header">
				<CityWeather />
			</div>
			<div className="card-content">
				<div className="card-content-left">
					<Twitter />
				</div>
				<div className="calander" id="nav">
					<ForcastList />
				</div>
			</div>
		</div>
    </main>
    </>;

}

export default Main;