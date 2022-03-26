import styled from 'styled-components'

const Container = styled.footer`
    max-width: 1440px;
    display: flex;
    align-items: center;
    background: gray;
    justify-content: center;
`;


const Footer = () => {
    return ( 
        <Container>
            <h3>Hecho con ❤ por mí</h3>
        </Container>
     );
}
 
export default Footer;
