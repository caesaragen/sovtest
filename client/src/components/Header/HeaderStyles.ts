import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.15);
  padding: 5px 30px;
  min-height: 80px;
  background-color: ${props => props.theme.colors.transparent};
`;


export const Container = styled.div`
  width: 100%;
`;


export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  flex: 1;
`;


export const HomeButton = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.colors.primary};
  align-items: center;
  &:hover {
    color: ${props => props.theme.colors.lightsaber};
  }
`;


export const LogoContainer = styled.div`
  display: flex;
  align-self: center;
`;

export const Logo = styled.img`
    height: 60px;
    width: 100px;
    margin-right: 8px;
`;


export const Title = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    line-height: 1em;
    margin-bottom: 0;
  }
  div {
    font-size: 0.9em;
    line-height: 0.8em;
    padding-left: 2px;
  }
`;
