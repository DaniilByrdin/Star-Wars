
class SwapiService {
    _baseUrl = 'https://swapi.dev/api';
    async getResource(url) {
        const res = await fetch(this._baseUrl + url, {
            "Content-Type": "aplication/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
        })

        if (!res.ok) {
            throw new Error('Ошибка сети' + `${res.status}`)
        }

        return await res.json()
    }
    async getAllPeople() {
        const people = await this.getResource('/people/')
        return people.results.map( this._transformPerson )

    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`)
        return this._transformPerson(person)
    }
    async getAllStarship() {
        const res = await this.getResource('/starships/')
        return res.results.map( this._transformStarship )
    }
    async getStarship (id) {
        const starship = await this.getResource(`starships/${id}`)
        return this._transformStarship(starship)
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
    }

    _extractID = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1]
        return id
    }
    _transformPlanet = (planet) => {
        return {
            id: this._extractID(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter 
        }
    }
    _transformStarship = (starship) => {
        return {
            id: this._extractID(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractID(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor, 
        }
    }
}

export default SwapiService