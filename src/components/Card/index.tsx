import { FC, ReactNode } from 'react'
import './card.css'

export interface CardProps {
	image?: { src: string, alt: string }
	title: string
	children?: ReactNode
}

const Card: FC<CardProps> = ({ image, title, children }) => {
  return (
		<div className="card">
			<div className="container">
				{ image && <img src={image.src} alt={image.alt} />}
			</div>
			<div className="details">
				<h3>{title}</h3>
				{children}
			</div>
		</div>
  )
}

export default Card
