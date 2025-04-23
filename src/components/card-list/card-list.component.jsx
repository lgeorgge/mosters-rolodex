import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
	constructor() {
		super();
	}

	render() {
		const monsters = this.props.monsters;
		return (
			<div className="card-list">
				{monsters.map((m) =>
					<Card monster={m} key={m.id} />
				)}
			</div>
		);
	}
}

export default CardList;
