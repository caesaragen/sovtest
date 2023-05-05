import StarWarsAPI from "../starwars-api.ts";


describe('StarWarsAPI', () => {
    const api = new StarWarsAPI();
  
    it('should retrieve all people', async () => {
      const page = 1;
      const response = await api.getAllPeople(page);
      expect(response.count).toBeGreaterThan(0);
      expect(response.results.length).toBeGreaterThan(0);
    });
  
    it('should retrieve a person by name', async () => {
      const name = 'Luke Skywalker';
      const response = await api.getPerson(name);
      expect(response.length).toBeGreaterThan(0);
      const person = response[0];
      expect(person.name).toBe(name);
    });
  });