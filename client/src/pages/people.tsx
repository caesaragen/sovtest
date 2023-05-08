import React, { useState, Suspense } from "react";
import PersonCard from "../containers/personCard/person-card";
import styled from "styled-components";
import { mockdata } from '../data/mockdata';
import { CardContainer } from "../containers/personCard/cardStyles";
import { useQuery, gql } from '@apollo/client';
import { Person } from "../__generated__/graphql";
import { PaginationContainer, PageButton } from "../components/Pagination/Pagination";
import SearchBox from "../components/searchBox/SearchBox";
import Loader from "../components/Loader/Loader";

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
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<Person[]>([]);
  const { loading, error, data } = useQuery(GET_PEOPLE, {
    variables: { page: page, name: searchResults.length ? searchResults[0].name : "" },
  });

  const handleSearch = (results: Person[]) => {
    setSearchResults(results);
  };

  const onChangePage = (newPage: number) => {
    setPage(newPage);
  };



  if (loading) return <Loader color="red" size={150}/>;
  if (error) return <p>Error :</p>;

  return (
    <Suspense fallback={Loader}>
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
                />
              );
            })
          : data.allPeople.results.map((person: Person, index: number) => {
              return (
                <PersonCard
                  key={index}
                  name={person.name}
                  height={person.height}
                  mass={person.mass}
                  gender={person.gender}
                  homeworld={person.homeworld}
                />
              );
            })}
        <PaginationContainer>
          {data.allPeople.previous && (
            <PageButton onClick={() => onChangePage(page - 1)}>Previous</PageButton>
          )}
          {data.allPeople.next && (
            <PageButton onClick={() => onChangePage(page + 1)}>Next</PageButton>
          )}
        </PaginationContainer>
      </CardContainer>
    </Suspense>
  );
};

export default People;
