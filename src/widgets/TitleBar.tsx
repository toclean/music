import { Component } from 'react';
import './TitleBar.css';

export class TitleBar extends Component {
	name = 'Music';
	options = ['plugins', 'settings'];
	
	createOptions(): any {
		return (
			<nav className="menu-bar-options">
				{
					this.options.map((option) => {
						return <div className="menu-option">{option}</div>;
					})
				}
			</nav>
		);
	}

	render() {
		return (
			<div className="menu-bar">
				<span className="menu-bar-logo">{this.name}</span>
				{this.createOptions()}
			</div>
		);
	}
}
