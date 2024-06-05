const APIURL = 'https://app.nocodb.com/api/v2/tables/mguaztzvhvfu2cx/records';
const TOKEN = '4rfGfqNky6ukuBn9NgtrnkC8DPERQjvtknpzizyS';

class PelisController {
    constructor() {
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAll() {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        return response.json();
    }

    async createItem(title, year, rate, genre, director, cast, description) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                identificador: parseInt(Math.random() * 10),
                título: title,
                Año: year,
                clasificación: rate,
                género: genre,
                director: director,
                protagonistas: cast,
                descripción: description
            })
        });

        const data = await response.json();
        return data;
    }

    async updateItem(title, year, rate, genre, director, cast, description) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                identificador: id,
                título: title,
                Año: year,
                clasificación: rate,
                género: genre,
                director: director,
                protagonistas: cast,
                descripción: description
            })
        });

        const data = await response.json();
        return data;
    }

    async getItemById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async deleteItem(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id: id
            })
        });

        const data = await response.json();
        return data;
    }
}

export default PelisController;