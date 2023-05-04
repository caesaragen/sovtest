const { RESTDataSource } = require('@apollo/datasource-rest');
class StarWarsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }
    async getAllPeople(page) {
        const response = await this.get('people', { page });
        return response;
    }
    async getPerson(name) {
        const response = await this.get('people', { search: name });
        return response.results[0];
    }
}
export default StarWarsAPI;
