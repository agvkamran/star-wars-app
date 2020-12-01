import React from 'react';
import SwapiService from '../../../src/services/swapi-service';


export default class RandomPlanet extends React.Component {

  swapi = new SwapiService();

  state = {
    name: null,
    id: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }
  
  constructor(){
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2 ;
    this.swapi.getPlanet(id)
      .then((planet) => {
        this.setState({
          name: planet.name,
          id,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        })
      })
  }

  render() {
    const { name, id, population, rotationPeriod, diameter } = this.state;
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



