import './App.css';
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import BlogNavbar from "./components/BlogNavbar";
import Homepage from "./components/BlogHome";
import ContactPage from "./components/Contact";
import AboutPage from "./components/About";
import NotFound from "./components/NotFound";


function App(){
	return (
		<div>
			<BrowserRouter>
				<BlogNavbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>			
		</div>
	)
}

export default App;
