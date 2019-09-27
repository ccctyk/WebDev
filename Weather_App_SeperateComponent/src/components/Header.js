import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
	return <>
        <header>      
        <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'bars']} size="2x"/></div>
        <div className="nav-icon"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']} size="2x"/></div>
        </header>
    </>;
}

export default Header;