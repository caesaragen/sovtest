import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Person } from "../../__generated__/graphql";

const SEARCH_PERSON = gql`
  query GetPerson($name: String!) {
    getPerson(name: $name) {
      name
    }
  }
`;

interface SearchBoxProps {
  onSearch: (results: Person[]) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [searchPerson, { loading, error, data }] = useLazyQuery(SEARCH_PERSON);

  const handleSearch = () => {
    searchPerson({ variables: { name } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  if (data && data.getPerson) {
    onSearch(data.getPerson);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a person"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
