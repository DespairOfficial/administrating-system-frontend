import React from 'react';
import Body from './Components/Body';
import Header from './Components/Header';

import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<div className="bg-[#282C2F] text-[#D6D6D7] h-full">
			<BrowserRouter>
				<Header />
				<Body />
			</BrowserRouter>
		</div>
	);
}

export default App;
