import React, {Component} from 'react'

class SearchField extends Component{
  constructor(props){
    super(props);


  }

  // UpdateQuery(event) {
  //   this.setState({ searchQuery: event.target.value });
  // }


  render(){
    return(
      <input
      onChange={this.props.UpdateQuery}  value={this.state.searchQuery}>
      </input>
    )
  }
}
export default SearchField;
