import './App.css';
import Joke from './components/Joke'
import jokesData from './jokesData';

function App() {

  const jokeElements = jokesData.map(joke => {
     return  (<Joke setup={joke.setup} punchline={joke.punchline} /> )
    }
  )

  return (
    <div className='container'>
      {jokeElements}
    </div>

  );
}

export default App;
