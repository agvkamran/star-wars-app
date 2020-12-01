import React from 'react';
import SwapiService from '../../../src/services/swapi-service';


export default class RandomPlanet extends React.Component {

  swapi = new SwapiService();

  state = {
    planet: {}
  }
  
  constructor(){
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet});
  }
  
  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2 ;
    this.swapi.getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    const { planet: {name, id, population, rotationPeriod, diameter }} = this.state;
    return (
      <div>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul>
            <li>
              <span>{population}</span>
              <span></span>
            </li>
            <li>
              <span>{rotationPeriod}</span>
              <span></span>
            </li>
            <li>
              <span>{diameter}</span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}



