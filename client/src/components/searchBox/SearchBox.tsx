import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Person } from "../../__generated__/graphql";
import { GET_PERSON } from "../../graphql/queries/getPersonDetails";


interface SearchBoxProps {
  onSearch: (results: Person) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [searchPerson, { loading, error, data }] = useLazyQuery<{ getPerson: Person }>(GET_PERSON);

  const handleSearch = () => {
    searchPerson({ variables: { name } });
  };
console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data && data.getPerson && data.getPerson) {
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
