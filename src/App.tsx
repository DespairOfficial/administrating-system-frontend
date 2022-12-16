import React from 'react';
import Body from './Components/Body';
import Header from './Components/Header';

import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<div className="bg-[#434A54] h-full">
			<BrowserRouter>
				<Header />
				<Body />
			</BrowserRouter>
		</div>
	);
}

export default App;
