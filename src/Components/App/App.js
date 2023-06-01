import { Component} from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SwapiService from  '../../API/Swapi-API.js'

import Header from '../Header/Header'
import RandomPlanet from '../Random-planet/Random-planet'
import List from '../Item-list/Item-list.jsx'
import Details from '../Person-details/Details.jsx'
import ErrorComponent from '../ErrorComponent/ErrorComponent';


import './App.css';


// const People = ( 
//   <div className='App_main'>
//     <List choose={this.choosePeople} getData={this.swapiService.getAllPeople} />
//     <Details
//       getItem={this.swapiService.getPerson}
//       itemID={this.state.personID}
//       type={'characters'} />
//   </div>
// )


// const Planet = ( 
//   <div className='App_main'>
//     <List
//       choose={this.choosePlanet}
//       getData={this.swapiService.getAllPlanet}
//     />
//     <Details
//       getItem={this.swapiService.getPlanet}
//       itemID={this.state.planetID}
//       type={'planets'} />
//   </div>
// )

// const Starship = (
//   <div className='App_main'>
//     <List
//       choose={this.chooseStarship}
//       getData={this.swapiService.getAllStarship}
//     />
//     <Details
//       getItem={this.swapiService.getStarship}
//       itemID={this.state.starshipID}
//       type={'starships'} />
//   </div>
// )

class App extends Component {

  swapiService = new SwapiService()

  state = {
    personID: null,
    planetID: null,
    starshipID: null,
    error: false,
    selectItem: '',
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
      return ( <ErrorComponent /> )
    }

    return (
        <div className="App">
          <Header rerender = { this.rerender }/>
          <RandomPlanet />
          <Routes>
            <Route path={'/'} element={<h1>Welcome this site!</h1>} />
          <Route path={'/People'} element={<div className='App_main'>
            <List choose={this.choosePeople} getData={this.swapiService.getAllPeople} />
            <Details
              getItem={this.swapiService.getPerson}
              itemID={this.state.personID}
              type={'characters'} />
          </div>} />
            <Route path={'/Planets'} element={ 
            <div className='App_main'>
              <List
                choose={this.choosePlanet}
                getData={this.swapiService.getAllPlanet}
              />
              <Details
                getItem={this.swapiService.getPlanet}
                itemID={this.state.planetID}
                type={'planets'} />
            </div>
            } />
            <Route path={'/Starship'} element={ 
            <div className='App_main'>
              <List
                choose={this.chooseStarship}
                getData={this.swapiService.getAllStarship}
              />
              <Details
                getItem={this.swapiService.getStarship}
                itemID={this.state.starshipID}
                type={'starships'} />
            </div>
            } />
          </Routes>
        </div>
      
    );
  }
}

export default App;
