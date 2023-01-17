export default class SwapiService {
  private _apiBase = "https://swapi.dev/api";
  private _apiImage = "https://starwars-visualguide.com/assets/img/";
  private _extractId(item: string) {
    const regexp = /\/([0-9]*)\/$/;
    return item.match(regexp)![1];
  }
  private _transformPlanet = (planet: any) => {
    return {
      id: this._extractId(planet.url),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
    };
  };
  private _transfromStarShip = (starship: any) => {
    return {
      id: this._extractId(starship.url),
      name: starship.name,
      model: starship.model,
      length: starship.length,
      crew: starship.crew,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };
  private _transfromPerson = (person: any) => {
    return {
      id: this._extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
  private getResourse = async (url: string) => {
    const res = await fetch(`${this._apiBase}/${url}`);
    if (!res.ok) {
      throw new Error("Cloud not Fetch", res.status as never);
    }
    return await res.json();
  };
  getPersonImage = ({ id }: any) => {
    return `${this._apiImage}/characters/${id}.jpg`;
  };
  getStarshipImage = ({ id }: any) => {
    return `${this._apiImage}/starships/${id}.jpg`;
  };
  getPlanetImage = ({ id }: any) => {
    return `${this._apiImage}/planets/${id}.jpg`;
  };
  getAllPeople = async () => {
    const res = await this.getResourse("people");
    return res.results.map(this._transfromPerson);
  };
  getPerson = async (id: string) => {
    const person = await this.getResourse(`people/${id}`);
    return this._transfromPerson(person);
  };
  getAllPlanets = async () => {
    const res = await this.getResourse("planets");
    return res.results.map(this._transformPlanet);
  };
  getPlanet = async (id: string) => {
    const planet = await this.getResourse(`planets/${id}`);
    return this._transformPlanet(planet);
  };
  getAllStarship = async () => {
    const res = await this.getResourse("starships");
    return res.results.map(this._transfromStarShip);
  };
  getStarShip = async (id: string) => {
    const starship = await this.getResourse(`starships/${id}`);
    return this._transfromStarShip(starship);
  };
}
// fetch("https://swapi.dev/api/people").then((items) =>
//   items.json().then((item) => console.log(item))
// );
