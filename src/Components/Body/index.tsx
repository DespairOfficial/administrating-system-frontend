import { Route, Routes } from 'react-router-dom';
import Dns from './Dns';
import Domens from './Domens';
import Proxy from './Proxy';

const Body = () => {
	return (
		<div className='text-white p-5 w-full h-full'>
			<Routes>
				<Route path="/domens" element={<Domens />} />
				<Route path="/dns" element={<Dns />} />
				<Route path="/proxy" element={<Proxy />} />
			</Routes>
		</div>
	);
};
export default Body;
