import Nav from "../Nav/Nav";
import styled from 'styled-components';

const Container = styled.header`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: pink;
`;

const Header = () => {
    return (
        <Container>
            <h1>German Gatica</h1>
            <Nav/>
        </Container>
    );
};

export default Header;