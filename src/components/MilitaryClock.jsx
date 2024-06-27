import "../styles/militaryClock.css"

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
			<Navigation />
			<h1>Military Clock</h1>
			<div className="container">
				<p className="item">{date.toLocaleTimeString('en-GB')}</p>
			</div>
		</div>
	);
};

export default MilitaryClock;
