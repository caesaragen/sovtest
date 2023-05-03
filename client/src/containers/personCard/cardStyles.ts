import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 1rem;
width: 100%;

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
  width: calc(25% - 0.75rem);
  background-color: '#FFFFFF';
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem;

  @media (max-width: 768px) {
    width: calc(33.33% - 0.5rem);
  }

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
  font-size: '16px';
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: '14px';
  margin: 0.5rem 0;
`;
