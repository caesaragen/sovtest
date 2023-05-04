import { RESTDataSource }  from '@apollo/datasource-rest';


class StarWarsAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://swapi.dev/api/';
    }
  
    async getAllPeople(page: number) {
      const response = await this.get(`people?page=${page}`);
      return response;
    }
  
    async getPerson(name: string) {
      const response = await this.get(`people?search=${name}`);
      return response.results[0];
    }
  }
  
  export default StarWarsAPI;
  