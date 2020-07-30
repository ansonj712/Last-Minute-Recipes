import React, { Component } from 'react'
import SearchDropdown from '../containers/IngredientsDropdown'
import SearchButton from '../containers/Search'
import Recipes from '../containers/Recipes'
import { Container, Divider, Header, Responsive } from 'semantic-ui-react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      ingredients: e.selected.toString()
    })
  }

  render() {
    return (
      <div className="top">
        <Responsive as={Container}>
          <Header as='h1'>Last Minute Recipes</Header>
          <p>Find recipes from your own fridge</p>
          <SearchDropdown onChange={this.handleChange}/>
          <Divider hidden />
          <SearchButton ingredients={this.state.ingredients} />
          <Recipes />
        </Responsive>
      </div>
    );
  }
}

export default Home;