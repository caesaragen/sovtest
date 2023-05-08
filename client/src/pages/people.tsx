import React, { useState, Suspense, useEffect, useContext } from "react";
import PersonCard from "../containers/personCard/personCard";
import { CardContainer, Container } from "../containers/personCard/cardStyles";
import { useQuery, gql } from '@apollo/client';
import { Person } from "../__generated__/graphql";
import { PaginationContainer, PageButton, Pagination } from "../components/Pagination/Pagination";
import SearchBox from "../components/searchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import { Navigate } from 'react-router-dom';
import { PersonContext } from "../context/PersonContext";

const GET_PEOPLE = gql(`
  query AllPeople($page: Int) {
    allPeople(page: $page) {
      count
      next
      previous
      results {
        gender
        height
        homeworld
        mass
        name
      }
    }
  }
`);

const People: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<Person[]>([]);
  const {selectedPerson, setSelectedPerson} = useContext(PersonContext)

  const { loading, error, data } = useQuery(GET_PEOPLE, {
    variables: { page: currentPage, name: searchResults.length ? searchResults[0].name : "" },
  });

  const [pageCount, setPageCount] = useState(1)
  const [people, setPeople] = useState([]);



  useEffect(() => {
    if (data) {
      setPeople(data.allPeople.results);
      setPageCount(Math.ceil(data.allPeople.count / 10))
    }
  }, [data]);
 
  const handleSearch = (results: Person[]) => {
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
  if (error) return <p>Error :</p>;

  return (
    <Suspense fallback={Loader}>
      <Container>
      <SearchBox onSearch={handleSearch} />
      <CardContainer>
        {searchResults.length
          ? searchResults.map((person: Person, index: number) => {
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
          })
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
