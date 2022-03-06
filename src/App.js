
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
     <h1>Hello th!</h1>
     <Banner/>
     <Row title = " NETFLIX ORIGINALS" fetchUlr = {requests.fetchNetflixOriginals} isLargeRow= {true}/>
     <Row title = " Tending now" fetchUlr = {requests.fetchTrending}/>
     <Row title = " Top rated" fetchUlr = {requests.fetchTopRated}/>
     <Row title = " Action movies" fetchUlr = {requests.fetchActionMovies}/>
     <Row title = " Comedy movies" fetchUlr = {requests.fetchComedyMovies}/>
     <Row title = " Horror movies" fetchUlr = {requests.fetchHorrorMovies}/>
     <Row title = " Romantic movies" fetchUlr = {requests.fetchRomanticMovies}/>
     <Row title = " Documentarie movies" fetchUlr = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
