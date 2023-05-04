import { RESTDataSource } from '@apollo/datasource-rest';


class StarWarsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getAllPeople(page: number) {
        try {
            const response = await this.get(`people?page=${page}`);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getPerson(name: string) {
        try {
            const response = await this.get(`people?search=${name}`);
            return response.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default StarWarsAPI;
