import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

export const Detail = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;
