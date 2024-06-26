import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/militaryclock">Military Clock</Link>
				</li>
				<li>
					<Link to="/hourglass">Hourglass</Link>
				</li>
			</ul>
		</div>
	);
};


export default Navigation