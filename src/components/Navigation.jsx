import { Link } from 'react-router-dom';
import '../styles/App.css'
import { useParams } from 'react-router-dom';

import '../styles/navigation.css';

const Navigation = () => {
	return (
		<div className="navigation">
			<ul>
				<div className="item">
					<li>
						<Link to="/" className='navbar-link' >Home</Link>
					</li>
				</div>
				<div className="item">
					<li>
						<Link to="/militaryclock" className='navbar-link' >Military Clock</Link>
					</li>
				</div>
				<div className='item'>
					<li>
						<Link to="/hourglass" className='navbar-link' >Hourglass</Link>
					</li>
				</div>
			</ul>
		</div>
	);
};

export default Navigation;
