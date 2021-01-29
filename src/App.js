import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Discover from './components/Discover';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header/>
      <Container>
        <Hero/>
        <br/>
        <Discover/>
        <Technologies/>
        <Experience/>
      </Container>
    </>
  );
}

export default App;
