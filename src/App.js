import Article from './components/Article';
import Aside from './components/Aside';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
`;


const App = () => {
  return (
    <>
     <Header/>
     <Section>
        <Aside/>
        <Article/>
     </Section>
     <Footer/>
    </>
  );
}

export default App;
