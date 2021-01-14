import React, {Component} from 'react'

class SearchField extends Component{
  constructor(props){
    super(props);

    this.UpdateQuery = this.UpdateQuery.bind(this);
  }

  UpdateQuery(event) {
    this.setState({ searchQuery: event.target.value });
  }


  render(){
    return(
      <input
      onChange={this.UpdateQuery} value={this.state.searchQuery}>
      </input>
    )
  }
}
export default SearchField;
