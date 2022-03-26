import styled from 'styled-components'

const Container = styled.a`
    text-decoration: none;
    margin: 10px;
`;

const Nav = () => {
    return (
        <div>
            <Container href="/" >Sobre mí</Container>
            <Container href="/" >Proyectos</Container>
            <Container href="/" >Habilidades</Container>
        </div>
     );
}
 
export default Nav;