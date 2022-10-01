import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import { Character } from "./interfaces/Character";
function App() {
	const [listOfCharacters, setListOfCharacters] = useState<Character[]>([]);
	useEffect(() => {
		Axios.get("http://localhost:8000/characters").then((response) => {
			setListOfCharacters(response.data.Items);
		});
	}, []);

	return (
		<div className="App">
			{listOfCharacters.map((character: Character) => {
				return <div key={character.id}>{character.name}</div>;
			})}
		</div>
	);
}

export default App;
