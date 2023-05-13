import { React, Component} from 'react';
import './App.css';
import '../../API/Swapi-API'
import Header from '../Header/Header'
import RandomPlanet from '../Random-planet/Random-planet'
import ItemList from '../Item-list/Item-list'
import PersonDetails from '../Person-details/Person-details'
import SwapiService from '../../API/Swapi-API'
import PlanetDetails from '../Planet-details/Planet-details'
import StarshipDetails from '../Starship-details/Starship-details'
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import ContainerPerson from '../ContainerPerson/ContainerPerson'


class App extends Component {
  swapiService = new SwapiService()

  state = {
    personID: null,
    error: false
  }

  choosePeople = ( id ) => {
      this.setState( { personID: id } )
  }

  componentDidMount() {
    console.log('mount');
  }

  componentDidCatch() {
    this.setState({ error: true })
  }

  render() {

    if(this.state.error) {
      return ( <ErrorComponent /> )
    }

    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div className='App_main'>
          <ContainerPerson />
          {/* <ItemList choosePeople={this.choosePeople} />
          <PersonDetails
            personID={this.state.personID} */}
        </div>
      </div>
    );
  }
}

export default App;
