import React from 'react';
import './App.css';

const App = () => {

const [phrasesList, SetPrasesList] = React.useState([]);

  return (
    <div className="wrapper">
      _CONTENT_
      <button className="btn btn_generate">Сгенерировать</button>
      <button className="btn btn_clear">Очистить</button>
    </div>
  );
};

export default App;
