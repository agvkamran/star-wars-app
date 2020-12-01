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
    async getResource(url){
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok){
        throw new Error (`Could not fetch ${url} , received ${res.status}`)
      }
      return await res.json();
    }
    getAllPeople(){
      return this.getResource(`/people/`);
    }
    getPerson(id){
      return this.getResource(`/people/${id}/`);
    }
   async getAllPeopleArr(){
     const arr = await this.getResource('/people/');
     return arr.results;
   }
    getAllPlanets() {
      return this.getResource(`/planets/`);
    }
    getPlanet(id){
      return this.getResource(`/planets/${id}/`)
    }
    async getAllPlanetsArr(){
      const arr = await this.getResource(`/planets`);
      return arr.results;
    }
    getAllStarships(){
      return this.getResource(`/starships/`)
    }
    getStarship(id){
      return this.getResource(`/starships/${id}`)
    }
    async getAllStarshipsArr(){
      const arr = await this.getResource(`/starships/`);
      return arr.results;
    }
  }
  
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


export default SwapiService;