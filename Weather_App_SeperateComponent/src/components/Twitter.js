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
            <div className="feed-title">Twitter Feed</div>
            <div className="feed-position">#France</div>
        </div>
        <div className="feedback">
            <div className="photo">T</div>
            <div className="message">Dont't forget your suncream tomorrow!</div>
        </div>
        <div className="feedback">
            <div className="photo">Y</div>
            <div className="message">Amazing weather in Paris.</div>
        </div>
        <div className="next">NEXT<FontAwesomeIcon icon={['fas', 'chevron-right']} size="1x"/></div>
	</>;
}

export default Twitter;