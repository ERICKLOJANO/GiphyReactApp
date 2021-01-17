import logo from './logo.svg';
import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

import GIFCard from './GIFCard'
// import SearchField from './SearchField'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			gifs:[]
		};
		this.SearchGifs = this.SearchGifs.bind(this);
		this.UpdateQuery = this.UpdateQuery.bind(this);
		this.SearchTrendingGifs = this.SearchTrendingGifs.bind(this);
		// this.SearchRandomGif = this.SearchRandomGif.bind(this);
	}

	UpdateQuery(event) {
	  this.setState({ searchQuery: event.target.value });
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

	SearchTrendingGifs(){
		Axios.get('https://api.giphy.com/v1/gifs/trending', {
			params:{
				api_key: 'AZ6pMJriyxR3EPcTbZGZHy3wJLGrvnO4',
				lang: 'en',
				limit: '3'
			},
		})
		.then((response) => {
			this.setState({
				gifs: response.data.data,
			});
		})
		.catch((error) => console.log(error));
	}

/*
	DOESNT WORK
		SearchRandomGif(){
		Axios.get(' http://api.giphy.com/v1/gifs/random',{
			params:{
				api_key: 'AZ6pMJriyxR3EPcTbZGZHy3wJLGrvnO4',
				lang: 'en',
			},
		})
		.then((response) => {
			this.setState({
				gifs: response.data,
			});
		})
		.catch((error) => console.log(error));
	}*/

	UpdateQuery(event) {
		this.setState({ searchQuery: event.target.value });
	}

	render() {
		return (
			<div className = "mainContainer">
			<div className = "searchBar">
				<input
				onChange={this.UpdateQuery} value={this.state.searchQuery} placeholder = "Search Something!">
				</input>
			</div>
			<br></br>
			<div className = "buttonContainer">
				<button onClick={this.SearchGifs}>Search</button>
				<button onClick={this.SearchTrendingGifs}>TRENDING</button>
				<button onClick={this.SearchRandomGif}>Feeling Lucky?</button>
			</div>
			<br></br>
				<div id = "gifContainer">
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
