import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Discover from './components/Discover';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header/>
      <Container>
        <Hero/>
        <br/>
        <Discover/>
      </Container>
    </>
  );
}

export default App;
