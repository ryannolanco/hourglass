import '../styles/militaryClock.css';
//import sun from '../imgs/sun.jpg';
import sunrise from '../imgs/sunrise.jpg';
import '../styles/App.css';

import Navigation from './Navigation';
import React, { useState, useEffect } from 'react';

const MilitaryClock = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(timer); // Cleanup interval on component unmount
	}, []);

	return (
		<div>
			<nav className="navbar">
				<Navigation />
			</nav>
			<div className="center-all">
				{/* <div className="image-container"> */}
					{/* <img src={sunrise} /> */}
					<p className="overlay-text">{date.toLocaleTimeString('en-GB')}</p>
				{/* </div> */}
			</div>
		</div>
	);
};

export default MilitaryClock;
