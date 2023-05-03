import React from "react";
import {
    HeaderDiv,
    Container,
    HeaderLink,
    HomeButton,
    LogoContainer,
    Logo,
    Title,
    HomeButtonContainer
} from "./HeaderStyles";
import logo from '../../assets/star-wars-logo-981.png'

const Header: React.FC = () => {
    return (
        <HeaderDiv>
            <Container>
                <HomeButtonContainer>
                    <HeaderLink to="/">
                        <HomeButton>
                            <LogoContainer>
                                <Logo src={logo} />
                            </LogoContainer>
                            <Title>
                                <h3>
                                    Star Wars
                                </h3>
                                <div>
                                    People List
                                </div>
                            </Title>
                        </HomeButton>
                    </HeaderLink>
                </HomeButtonContainer>
            </Container>
        </HeaderDiv>
    )
};

export default Header;
