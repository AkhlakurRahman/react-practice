import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'sdf23', name: 'Rabby', age: 26 },
			{ id: 'sdkjjk3', name: 'John Doe', age: 23 },
			{ id: 'hgkjjk3', name: 'Jane Doe', age: 35 }
		],
		showPersons: false
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;

		const persons = [ ...this.state.persons ];
		persons[personIndex] = person;

		this.setState({
			persons
		});
	};

	togglePersonHangler = () => {
		const doesTrue = this.state.showPersons;
		this.setState({
			showPersons: !doesTrue
		});
	};

	deletePersonHandler = (personIndex) => {
		const persons = [ ...this.state.persons ];
		persons.splice(personIndex, 1);
		this.setState({ persons });
	};

	render() {
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler(index)}
								key={person.id}
								changedName={(event) => this.nameChangeHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
			style.backgroundColor = 'red';
		}

		return (
			<div className="App">
				<h1>This is a React App</h1>
				<p className={classes.join(' ')}>This is fine!</p>
				<button style={style} onClick={this.togglePersonHangler}>
					Toggle Person
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
