import styled from 'styled-components';

interface ErrorCardProps {
  message?: string;
}

const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <Card>
      <ErrorMessage>{message}</ErrorMessage>
    </Card>
  );
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export default ErrorCard;
