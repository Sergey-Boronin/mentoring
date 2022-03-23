import React from "react";

function App() {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      const res = await fetch(
        "https://6214923b89fad53b1f177edc.mockapi.io/users"
      );
      setUsers(await res.json());
    } catch (err) {
      console.log("произошла ошибка", err);
    }
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить</button>
    </div>
  );
}

export default App;
