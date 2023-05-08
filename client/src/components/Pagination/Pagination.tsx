import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  border: none;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

interface Props {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  pageCount,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <PaginationContainer>
      {getPageNumbers().map((page) => (
        <PageButton
          key={page}
          onClick={() => handlePageClick(page)}
          disabled={page === currentPage}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export { PaginationContainer, PageButton, Pagination };
