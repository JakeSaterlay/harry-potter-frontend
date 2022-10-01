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

	return <div className="App">{character.name}</div>;
}

export default CharacterInfo;
