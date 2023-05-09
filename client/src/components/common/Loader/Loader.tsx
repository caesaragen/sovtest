import styled, { keyframes } from 'styled-components';

interface LoaderProps {
    size?: number;
    color?: string;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<LoaderProps>`
  border: ${({ size = 30 }) => size / 10}px solid rgba(0, 0, 0, 0.1);
  border-top-color: ${({ color = '#000' }) => color};
  border-radius: 50%;
  width: ${({ size = 30 }) => size}px;
  height: ${({ size = 30 }) => size}px;
  animation: ${spin} 0.8s linear infinite;
`;

export default Loader;
