import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
display: flex;
flex-direction: column;

`;

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 1rem;
width: 100%;
cursor: pointer;


@media (max-width: 768px) {
  gap: 0.5rem;
}

@media (max-width: 576px) {
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
`;
export const Card = styled.div`
  background-color:  ${props => props.theme.colors.secondary};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
  margin: 0.5rem;

  // @media (max-width: 768px) {
  //   width: calc(33.33% - 0.5rem);
  // }

  @media (max-width: 576px) {
    width: 100%
`;

export const CardContent = styled.div`
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-around',
height: '100%',
`;

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  margin: 0.5rem 0;
`;
export const CardLink = styled(Link)`
text-decoration: none;
color: inherit;
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

