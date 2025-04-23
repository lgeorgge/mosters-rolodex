import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
			//stars: { team: "", squad: [] },
		};
	}

	componentDidMount() {
		// console.log("componentDidMount");
		fetch(
			//"https://raw.githubusercontent.com/Ovi/DummyJSON/refs/heads/master/raw/users/users.json"
			"https://jsonplaceholder.typicode.com/users"
			//"https://gist.githubusercontent.com/jamesmwali/11b34a6d4c87644915573e54fbd34ac5/raw/93124e101231f8cbf14ff48ca191156059d6c41f/playerlist.json"
		)
			.then((response) => response.json())
			.then((jsonresponse) =>
				this.setState(
					() => {
						return {
							monsters: jsonresponse,
						};
					}
					// ,
					// () => console.log(this.state.monsters)
				)
			);

		// fetch(
		// 	"https://raw.githubusercontent.com/lgeorgge/EPL_2023-2024/refs/heads/master/playersList.json"
		// )
		// 	.then((response) => response.json())
		// 	.then((FBstars) => {
		// 		this.setState(
		// 			() => {
		// 				return {
		// 					stars: { team: FBstars.team, squad: FBstars.squad },
		// 				};
		// 			},
		// 			() => console.log(this.state.stars)
		// 		);
		// 	});
	}

	onSearchChange = (event) => {
		this.setState(() => {
			return {
				searchField: event.target.value.toLowerCase(),
			};
		});
	};

	render() {
		const { monsters, searchField } = this.state;

		const filteredMonsters = monsters
			.filter((M) => M.name.toLowerCase().includes(searchField))
			.sort((a, b) => a.name.localeCompare(b.name));

		return (
			<div className="App">
				<h1 className="app-title">Monsters Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					onChangeHandler={this.onSearchChange}
					className="search-monsters"
				/>

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;

/**
 * <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name} 3ala el entag
          </p>
          
          <button onClick={
            () => this.setState(
              ()=>{
                return {name : "George "}
              },
              ()=>console.log(this.state.name)
            )
          }
            >click me
          </button>
          <br></br>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
 */
