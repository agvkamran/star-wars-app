// fetch('https://swapi.dev/api/people/1/')
// .then((res) => {
//   return res.json();
// })
// .then((body) => {
//   console.log(body)
// })
// .catch((error) => {
//   console.log(error)
// })

class SwapiService {

  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }
  //getimage
  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }
  //getimage
  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transormStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transormStarship(starship);
  }
  //getimage
  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }

  _extractId(item) {
    const idRegEx = /\/([0-9]*)\/$/;
    return item.url.match(idRegEx)[1];
  }

  _transformPlanet = (planet) => {
    return {
      name: planet.name,
      id: this._extractId(planet),
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  _transormStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  };
}

// _extractId(item){
//   const idRegEx = /\/([0-9]*)\/$/;
//   const id = planet.url.match(idRegEx)[1];
// }

// const idRegEx = /\/([0-9]*)\/$/;
// const id = planet.url.match(idRegEx)[1];



// const swapi = new SwapiService();

// swapi.getStarship(3).then((star) => {
//   console.log(star)
// })
// swapi.getAllStarships().then((stars) => {
//   console.log(stars)
// })
// swapi.getAllStarshipsArr().then((arr) => {
//   arr.forEach(element => {
//     console.log(element.name)
//   });
// })
// swapi.getAllPlanetsArr().then((planets) => {
//   planets.forEach(element => {
//     console.log(element.name)
//   });
// })

// swapi.getAllPeopleArr().then((all) => {
//   all.forEach(element => {
//     console.log(element.name)
//   });
// })
// swapi.getPlanet(1).then((planet) => {
//   console.log(planet.name);
// })
// swapi.getAllPlanets().then((planets) => {
//   console.log(planets)
// })

// async getAllPlanetsArr(){
//   const arr = await this.getResource(`/planets`);
//   return arr.results;
// }

// async getAllPeopleArr(){
//   const arr = await this.getResource('/people/');
//   return arr.results;
// }

// async getAllStarshipsArr(){
//   const arr = await this.getResource(`/starships/`);
//   return arr.results;
// }

export default SwapiService;