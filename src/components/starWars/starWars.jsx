import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarWarsData } from './starWarsAction';
import StarWarsCard from "./StarWarsCard"

class starWars extends Component {
  componentDidMount() {
    this.props.getStarWarsData();
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>starwars component</h1>
        <h1>Number of Star Wars characters: {this.props.count}</h1>
        <StarWarsCard/>
      </div>
    );
  }
}

// this "state" is the whole store of redux for the app
const mapStateToProps = state => ({
  //   starWarsData: state.starWarsReducer
  count: state.starWarsReducer.starWarsData.count
});

export default connect(mapStateToProps, { getStarWarsData })(starWars);
