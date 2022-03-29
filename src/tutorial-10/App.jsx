import axios from 'axios';
import React from 'react'
import './style.css';

import { SearchForm } from './conponents/SearchForm';
import { UserInfo } from './conponents/UserInfo';

function App() {
  const base_url = "https://api.github.com/users/";

  const [searchInpit, setSearchInput] = React.useState();
  const [userData, setUserData] = React.useState({});
  const [isVisible, setIsVisible] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  async function getData(e) {
    e.preventDefault();
    setIsVisible(false);
    setIsError(false);
    setIsLoading(true);

    await axios
      .get(base_url + searchInpit)
      .then((res) => {
        setUserData(res.data);
        setIsVisible(true);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsVisible(false);
      });
    setIsLoading(false);
  }

  return (
    <div id="app">
      <div className="app-container">
        <SearchForm
          onChangeSearch={onChangeSearch}
          getData={getData}
          searchInpit={searchInpit}
          isLoading={isLoading}
        />
        {isLoading && (
          <div className='loader'>
            <div className="spinners">
              <div className="spinner rotate"></div>
              <div className="spinner rotate"></div>
              <div className="spinner rotate"></div>
            </div>
            <div>Загрузка</div>
          </div>
        )}
        {isVisible && <UserInfo userData={userData} />}
        {isError && <p style={{ color: "tomato" }}>Пользователь не найден</p>}
      </div>
    </div>
  );
}

export default App;
