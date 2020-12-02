import React from 'react';
import SwapiService from '../../../src/services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends React.Component {

  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount(){
    this.updatePlanet();
    // this.interval = setInterval(this.updatePlanet, 10000);
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  }

  updatePlanet = () => {
    console.log('update');
    const id = Math.floor(Math.random()*25) + 3;
    this.swapi.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;
    
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div>
        {errorMessage}
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
