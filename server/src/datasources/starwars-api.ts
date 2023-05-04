const { RESTDataSource } = require('@apollo/datasource-rest');


class StarWarsAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://swapi.dev/api/people/';
    }

    getPeople() {
        return this.get('people');
      }

      getPerson(name: string) {
        return this.get(`?search=${name}`);
      }
}