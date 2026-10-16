import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Projects from './routes/Projects.js';
import About from './routes/About.js';
import './App.css';
import Layout from './components/Layout.js';

function App() {
	return (
		<>
			
			{/* Routes */}
			<BrowserRouter>
				{/* Template Layout */}
				<Layout />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					{/* <Route path='/projects' element={<Projects />}></Route> */}
					{/* <Route path='/about' element={<About />}></Route> */}
				</Routes>
			</BrowserRouter>
	    </>
  );
}

export default App;
