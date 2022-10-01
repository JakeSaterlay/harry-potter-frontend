import { Wand } from "./Wand";

export interface Character {
	ancestry: string;
	hairColour: string;
	wand: Wand;
	alternate_names: string[];
	hogwartsStaff: boolean;
	eyeColour: string;
	name: string;
	gender: string;
	actor: string;
	yearOfBirth: string;
	species: string;
	alive: boolean;
	hogwartsStudent: boolean;
	image: string;
	alternate_actors: string[];
	dateOfBirth: string;
	wizard: boolean;
	patronus: string;
	id: string;
	house: string;
}
