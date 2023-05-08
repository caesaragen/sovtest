import React from 'react';
import styled from 'styled-components';


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;