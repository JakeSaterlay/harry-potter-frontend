import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterInfo from "./CharacterInfo";
import Characters from "./Characters";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Characters />} />
				<Route path="character/:id" element={<CharacterInfo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
