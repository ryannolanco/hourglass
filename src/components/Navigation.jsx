import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../styles/App.css';

import '../styles/navigation.css';

const Navigation = () => {
	const [title, setTitle] = useState('Home');

	return (
		<div className="bg-img">
			<div className="container">
				<h1>{title}</h1>
				<div className='navlinks'>
					<ul>
						<div className="item">
							<li>
								<Link to="/" className="navbar-link">
									Home
								</Link>
							</li>
						</div>
						<div className="item">
							<li>
								<Link to="/militaryclock" className="navbar-link">
									Military Clock
								</Link>
							</li>
						</div>
						<div className="item">
							<li>
								<Link to="/hourglass" className="navbar-link">
									Hourglass
								</Link>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
