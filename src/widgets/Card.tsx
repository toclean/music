import { Component } from 'react';
import './Card.css';

interface Props {
	name: string;
	description: string;
	link: string;
	img: string;
}

export class Card extends Component<Props, {}> {
	onClick(): void {
		document.location.href = this.props.link;
	}

	render() {
		return (
			<div className="card" onClick={() => this.onClick()}>
				<div className="thumbnail">
					<img src={this.props.img} alt="command icon"/>
				</div>
				<div className="information">
					<div className="name">{this.props.name}</div>
					<div className="description">{this.props.description}</div>
				</div>
			</div>
		);
	}
}
