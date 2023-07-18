import { Component} from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SwapiService from  '../../API/Swapi-API.js'

import Header from '../Header/Header'
import RandomPlanet from '../Random-planet/Random-planet'
import ErrorComponent from '../ErrorComponent/ErrorComponent';

import HocError from '../Hoc-helper/Hoc-error.js';

import './App.css';


class App extends Component {

  swapiService = new SwapiService()

  state = {
    personID: null,
    planetID: null,
    starshipID: null,
    error: false,
    selectItem: '',
  }

  setError = () => {
    this.setState( { error: !this.state.error } )
  }

  choosePeople = (id) => {
    this.setState( { personID: id } )
  }
  choosePlanet = (id) => {
    this.setState( { planetID: id } )
  }
  chooseStarship = (id) => {
    this.setState( { starshipID: id } )
  }

  render() {

    if(this.state.error) {
      return ( 
        <>
          <ErrorComponent />
          <button onClick={ this.setError }>SetError</button>
        </>
      )
    }

    const dataID = {
      peopleID: this.state.personID,
      planetID: this.state.planetID,
      starshipID: this.state.starshipID,
    }

    return (
      <div className="App">
        <Header rerender = { this.rerender } dataID = { dataID } setError={ this.setError }/>
        <RandomPlanet />
        <div className='App_main'>
        <Routes>
          <Route path={'/'} element={<h1>Welcome this site!</h1>} />
          <Route path={'/characters/:ID?'} element={
            <HocError
                choose={this.choosePeople}
                type={'characters'}
                getData={this.swapiService.getAllPeople}
                getItem={this.swapiService.getPerson}
                itemID={this.state.personID}
            />
          } />
          <Route path={'/planets/:ID?'} element={
            <HocError
                choose={this.choosePlanet}
                type={'planets'}
                getData={this.swapiService.getAllPlanet}
                getItem={this.swapiService.getPlanet}
                itemID={this.state.planetID}
            />
          } />
          <Route path={'/starships/:ID?'} element={
            <HocError
                choose={this.chooseStarship}
                type={'starships'}
                getData={this.swapiService.getAllStarship}
                getItem={this.swapiService.getStarship}
                itemID={this.state.starshipID}
            />
          } />
        </Routes>
        </div>
      </div>
    );
  }
}

export default App;
