
import React from 'react';
import './App.css';

import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

import adjectivesArr from './data/adjectives';
import nounsArr from './data/nouns';


const App = () => {
const [phrasesList, SetPrasesList] = React.useState([]);

const generateWord = (arr) => {
  const number = Math.floor(Math.random() * arr.length)
  return arr[number]
}

const handleAddPhrase = () => { 
  const string  = `${generateWord(adjectivesArr)} ${generateWord(adjectivesArr)} ${generateWord(nounsArr)}`
  SetPrasesList([string, ...phrasesList])
}

const handleClearPhrases = () => {
  SetPrasesList([])
}

const phrasesContainer = () => {
  return(
  <div className="list">
    {phrasesList.map((item, index) => {
    return  <Phrase key={index} text={item} />
    })}
  </div>)
}

  return (
    <div className="wrapper">
      {phrasesList.length === 0 ? <EmptyBlock /> : phrasesContainer()}
      <button onClick={handleAddPhrase} className="btn btn_generate">Сгенерировать</button>
      <button onClick={handleClearPhrases} className="btn btn_clear">Очистить</button>
    </div>
  );
};

export default App;
