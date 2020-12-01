import React from 'react';
import SwapiService from '../../../src/services/swapi-service';
import Spinner from '../spinner/spinner';


export default class RandomPlanet extends React.Component {

  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi.getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div>
        {content}
        {spinner}
      </div>
    )
  }
}


const PlanetView = ({ planet }) => {
  const { name, id, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
