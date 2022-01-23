import TvScreen from './components/TvScreen';
import { GlobalStyle } from './Global.styled';
import { AppCont } from './App.styled';

function App() {
  return (
    <AppCont>
      <GlobalStyle />
      <TvScreen />
    </AppCont>
  );
}

export default App;
