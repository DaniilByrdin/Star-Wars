
export default class SwapiService {
    _baseUrl = 'https://swapi.dev/api';
    _baseIrlImage = 'https://starwars-visualguide.com/assets/img/'

    async getResource(url, baseUrl) {
        const res = await fetch( (baseUrl + url ), {
            "Content-Type": "aplication/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
        })

        if (!res.ok) {
            throw new Error('Ошибка сети' + `${res.status}`)
        }

        if(baseUrl !== this._baseUrl) {
            return res.json()
        }

        return await res.json()
    }

    getAllPeople = async () => {
        const people = await this.getResource('/people/', this._baseUrl)
        return people.results.map( this._transformPerson )

    }
    getAllStarship = async () => {
        const res = await this.getResource('/starships/', this._baseUrl)
        return res.results.map( this._transformStarship )
    }
    getAllPlanet = async () => {
        const res = await this.getResource(`/planets`, this._baseUrl)
        return res.results.map ( this._transformPlanet )
    }


    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`, this._baseUrl)
        return this._transformPerson(person)
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`, this._baseUrl)
        return this._transformStarship(starship)
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`, this._baseUrl)
        return this._transformPlanet(planet)
    }



    getPersonImage = async (id) => {
        const res = await this.getResource( `/characters/${id}.jpg` , this._baseIrlImage )
    }
    getPlanetImage = async (id) => {
        const res = await this.getResource( `/planets/${id}.jpg` , this._baseIrlImage )
    }
    getStarshipImage = async (id) => {
        if(!id) { return null }
        const res = await this.getResource( `/starships/${id}.jpg` , this._baseIrlImage )
        return res
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
            cost_in_credits: starship.costInCredits,
            max_atmosphering_speed: starship.max_atmosphering_speed,
            starship_class: starship.starship_class,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargo_capacity: starship.cargoCapacity
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractID(person),
            name: person.name,
            gender: person.gender,
            height: person.height,
            mass: person.mass,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }
}

