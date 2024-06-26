import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage'; 
import MilitaryClock from './components/MilitaryClock';
import Hourglass from './components/Hourglass';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="militaryclock" element={<MilitaryClock />} />
				<Route path="hourglass" element={<Hourglass />} />
			</Routes>
		</div>
	);
}

export default App;
