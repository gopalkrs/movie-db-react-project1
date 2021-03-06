import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import Moviepage from './Moviepage';
import MoviesLibrary from './MoviesLibrary';
import SeriesLibrary from './SeriesLibrary';
import Seriespage from './Seriespage';
import Moviedbmainpage from './Moviedbmainpage';

function App(){

  return (
    <Router>
      <Switch>
        <Route exact path ="/movies/:movieId" component={Moviepage} />
        <Route exact path ="/series/:seriesId" component={Seriespage} />
        <Route exact path ="/" component={Moviedbmainpage} />
        <Route exact path ="/movies" component={MoviesLibrary} />
        <Route exact path ="/series" component={SeriesLibrary} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

