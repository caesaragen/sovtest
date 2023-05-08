import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color:  ${props => props.theme.colors.secondary};
  width: calc(100% - 0.75rem);
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const Detail = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.span`
  font-weight: bold;
`;
export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;