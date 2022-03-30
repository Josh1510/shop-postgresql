import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import styled from 'styled-components';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';

function App() {
  return (
    <ContainerDiv className="App">
      <Home />
    </ContainerDiv>
  );
}

export default App;

const ContainerDiv = styled.div`
  font-family: 'Roboto';
  font-weight: 100;
  height: 100vh;
  background-color: #0b0c10;
`;
