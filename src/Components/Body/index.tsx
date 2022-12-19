import { Route, Routes } from 'react-router-dom';
import Domens from './Domens';
import Proxy from './Proxy';

const Body = () => {
	return (
		<div className='text-white p-5 w-[100vw] h-[90%]'>
			<Routes>
				<Route path="/domens" element={<Domens />} />
				<Route path="/proxy" element={<Proxy />} />
			</Routes>
		</div>
	);
};
export default Body;
