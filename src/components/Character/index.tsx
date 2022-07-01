import { FC } from 'react'
import { Card } from '../'
import './character.css'

export interface CharacterInterface {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: 'Male' | 'Female';
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export interface CharacterProps {
	character: CharacterInterface;
}

const Character: FC<CharacterProps> = ({ character }) => {
  const image = {
    src: character.image,
    alt: `Image of ${character.name}`
  }

  return (
    <Card title={character.name} image={image}>
			<p>{character.status} - {character.species}</p>
			<p style={{ color: '#a0a0a0' }}>Last seen on</p>
			<p>{character.location.name}</p>
		</Card>
  )
}

export default Character
