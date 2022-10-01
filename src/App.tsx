import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
function App() {
	const [listOfCharacters, setListOfCharacters] = useState<any>([]);
	useEffect(() => {
		Axios.get("http://localhost:8000/characters").then((response) => {
			setListOfCharacters(response.data.Items);
		});
	}, []);

	return (
		<div className="App">
			{listOfCharacters.map((character: any) => {
				return <div>{character.name}</div>;
			})}
		</div>
	);
}

export default App;
