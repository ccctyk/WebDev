import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas);

const Twitter = () => {
	return <>
		<div className="twitter-feed">
            <div><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="blue"/></div>
            <h1 className="twitter-feed-title">Twitter Feed</h1>
            <h1 className="twitter-feed-position">#France</h1>
        </div>
        <div className="feedback">
            <div className="photo">T</div>
            <p className="message">Dont't forget your suncream tomorrow!</p>
        </div>
        <div className="feedback">
            <div className="photo">Y</div>
            <p className="message">Amazing weather in Paris.</p>
        </div>
        <div className="twitter-next">NEXT<FontAwesomeIcon icon={['fas', 'chevron-right']} size="1x"/></div>
	</>;
}

export default Twitter;