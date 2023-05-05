import StarWarsAPI from '../../../datasources/starwars-api';
import resolvers from '../resolvers';

describe('resolvers', () => {
    const mockDataSources = { starWarsAPI: new StarWarsAPI() };

    describe('allPeople', () => {
        it('returns an object with count, next, previous, and results', async () => {
            const result = await resolvers.Query.allPeople(null, { page: 1 }, { dataSources: mockDataSources });

            expect(result).toHaveProperty('count');
            expect(result).toHaveProperty('next');
            expect(result).toHaveProperty('previous');
            expect(result).toHaveProperty('results');
        });
    });

    describe('getPerson', () => {
        it('returns a person object for an existing name', async () => {
            const result = await resolvers.Query.getPerson(null, { name: 'Luke Skywalker' }, { dataSources: mockDataSources });

            expect(result).toHaveProperty('name', 'Luke Skywalker');
            expect(result).toHaveProperty('height');
            expect(result).toHaveProperty('mass');
            expect(result).toHaveProperty('gender');
            expect(result).toHaveProperty('homeworld');
        });

        it('throws an error for a non-existing name', async () => {
            await expect(resolvers.Query.getPerson(null, { name: 'Non-existing name' }, { dataSources: mockDataSources })).rejects.toThrow();
        });
    });
});
