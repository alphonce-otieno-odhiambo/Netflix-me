
import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
     <h1>Hello th!</h1>
     <Row title = " NETFLIX ORIGINALS" fetchUlr = {requests.fetchNetflixOriginals}/>
     <Row title = " Tending now" fetchUlr = {requests.fetchTrending}/>
    </div>
  );
}

export default App;
