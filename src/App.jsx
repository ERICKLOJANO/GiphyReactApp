import logo from './logo.svg';
import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

import GIFCard from './GIFCard'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			gifs:[]
		};
		this.SearchGifs = this.SearchGifs.bind(this);
		this.UpdateQuery = this.UpdateQuery.bind(this);
	}

	SearchGifs() {
		Axios.get('https://api.giphy.com/v1/gifs/search', {
			params: {
				api_key: 'AZ6pMJriyxR3EPcTbZGZHy3wJLGrvnO4',
				q: this.state.searchQuery,
				lang: 'en',
			},
		})
			.then((response) => {
				console.log(response);
				this.setState({gifs:response.data.data});
				console.log(this.state.gifs)
				console.log(this.state.searchQuery)
			})
			.catch((error) => console.log(error));
	}

	UpdateQuery(event) {
		this.setState({ searchQuery: event.target.value });
	}

	render() {
		return (
			<div>
			<input
			onChange={this.UpdateQuery} value={this.state.searchQuery}>
			</input>
				<button onClick={this.SearchGifs}>Search</button>
				<div>
				{this.state.gifs.map((Entry) => {
					return (
						<GIFCard
							imageSrc = {Entry.images.downsized.url}
						/>
					)
				})}
				</div>
			</div>
		);
	}
}

export default App;
