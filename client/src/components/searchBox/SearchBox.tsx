import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { Person } from "../../__generated__/graphql";
import { GET_PERSON } from "../../graphql/queries/getPersonDetails";
import ErrorCard from "../common/Error/Error";
import { LoadingMessage } from "./searchStyles";


interface SearchBoxProps {
  onSearch: (results: Person) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [searchPerson, { loading, error, data }] = useLazyQuery<{ getPerson: Person }>(GET_PERSON);
  const [showError, setShowError] = useState(false);

  const handleSearch = () => {
    searchPerson({ variables: { name } });
  };

  useEffect(() => {
    if (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setName("");
      }, 3000); 
    }
  }, [error]);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (showError) return <ErrorCard message={error?.message}/>

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
