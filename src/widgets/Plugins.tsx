import { Component } from 'react';
import './Plugins.css';

import { Card } from './Card';

export class Plugins extends Component {
	render() {
		return (
			<div className="plugins">
				<div className="management">
					<h2>WEBSITES</h2>
					<div className="cards">
						<Card name="Youtube" description="Goes to youtube.com" img="https://cdn.worldvectorlogo.com/logos/youtube-3.svg" link="https://www.youtube.com"/>
						<Card name="Google" description="Goes to google.com" img="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" link="https://www.google.com"/>
						<Card name="Reddit" description="Goes to reddit.com" img="https://www.vectorlogo.zone/logos/reddit/reddit-tile.svg" link="https://old.reddit.com"/>
						<Card name="WoWhead" description="Goes to wowhead.com" img="https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg" link="https://wowhead.com"/>
						<Card name="Twitter" description="Goes to twitter.com" img="Twitter.svg" link="https://twitter.com"/>
						<Card name="Github" description="Goes to github.com" img="https://www.flaticon.com/svg/vstatic/svg/25/25231.svg?token=exp=1612614200~hmac=91d8ad732e916157a5c143b85d140cad" link="https://github.com"/>
					</div>
				</div>
			</div>
		);
	}
}
