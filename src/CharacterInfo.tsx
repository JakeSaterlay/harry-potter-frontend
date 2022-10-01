import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function CharacterInfo() {
	const [character, setCharacter] = useState<any>({});

	let params = useParams();

	useEffect(() => {
		Axios.get(`http://localhost:8000/characters/${params.id}`).then(
			(response) => {
				setCharacter(response.data.Item);
			}
		);
	}, []);

	return (
		<div className="App">
			<div>Character Name: {character.name}</div>
			<div>Actor Name: {character.actor}</div>
			<div>Character House: {character.house}</div>
			<div>Character Ancestry: {character.ancestry}</div>
			<img src={character.image} />
		</div>
	);
}

export default CharacterInfo;
