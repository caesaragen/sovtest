import React, { useState, Suspense, useEffect, useContext } from "react";
import PersonCard from "../containers/personCard/personCard";
import { CardContainer, Container } from "../containers/personCard/cardStyles";
import { useQuery } from '@apollo/client';
import { Person } from "../__generated__/graphql";
import { PaginationContainer, Pagination } from "../components/Pagination/Pagination";
import SearchBox from "../components/searchBox/SearchBox";
import Loader from "../components/common/Loader/Loader";
import { Navigate } from 'react-router-dom';
import { PersonContext } from "../context/PersonContext";
import ErrorCard from "../components/common/Error/Error";
import { GET_PEOPLE } from "../graphql/queries/getAllPeople";
import { GET_PERSON } from "../graphql/queries/getPersonDetails";

const People: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<Person>({});
  const { selectedPerson, setSelectedPerson } = useContext(PersonContext)

  const { loading, error, data } = useQuery(
    Object.keys(searchResults).length ? GET_PERSON : GET_PEOPLE,
    {
      variables: { page: currentPage, name: Object.keys(searchResults).length ? searchResults.name : "" },
    }
  );
  // console.log(searchResults)
  const [pageCount, setPageCount] = useState(1)
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    if (data && Object.keys(searchResults).length === 0) {
      setPeople(data.allPeople.results);
      setPageCount(Math.ceil(data.allPeople.count / 10))
    }
  }, [data, searchResults]);

  const handleSearch = (results: Person) => {
    setSearchResults(results);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCardClick = (person: Person) => {
    setSelectedPerson(person);
    console.log(selectedPerson)
    return <Navigate to={`/person/${person.name}`} />
  };

  if (loading) return <Loader color="red" size={150} />;
  if (error) return <ErrorCard message="An error occurred" />

  return (
    <Suspense fallback={<Loader color="red" size={150} />}>
      <Container>
        <SearchBox onSearch={handleSearch} />
        <CardContainer>
          {Object.keys(searchResults).length
            ? (
              <PersonCard
                key={1}
                name={searchResults.name}
                height={searchResults.height}
                mass={searchResults.mass}
                gender={searchResults.gender}
                homeworld={searchResults.homeworld}
                handleClick={() => handleCardClick(searchResults)}
              />
            )
            : people.map((person: Person, index: number) => {
              return (
                <PersonCard
                  key={index}
                  name={person.name}
                  height={person.height}
                  mass={person.mass}
                  gender={person.gender}
                  homeworld={person.homeworld}
                  handleClick={() => handleCardClick(person)}
                />
              );
            })}
        </CardContainer>
        <PaginationContainer>
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        </PaginationContainer>
      </Container>
    </Suspense>
  );
};

export default People;
