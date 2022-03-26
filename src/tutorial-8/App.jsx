import React from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = React.useState([]);
  const fileInput = React.createRef();
  const [uploading, setUploading] = React.useState(false);

  async function getUsers() {
    const { data } = await axios.get(
      "https://6214923b89fad53b1f177edc.mockapi.io/users"
    );
    setUsers(data);
  }

  const [fields, setFields] = React.useState({
    phone: "",
    name: "",
  });

  const handleChangeInput = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    axios.post("https://6214923b89fad53b1f177edc.mockapi.io/users", fields);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    setUploading(true)
    const formData = new FormData();
    formData.append("file", fileInput.current.files[0]);

    setTimeout(console.log(123), 3000)

    await axios.post("http://192.168.1.111:9999/", formData, {
      headers: {
        "Contant-Type": "multipart/form-data",
      },
    });
    setUploading(false)
  };

  function sum(a, b) {
  return  a + b;
  }

  console.log(sum(1, 10, 3, 5))

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
            {user.phone}
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
      <hr />
      <br />
      <form action="" onSubmit={createUser}>
        <h4>Создать пользователя</h4>
        <input
          name="name"
          placeholder="имя"
          type="text"
          value={fields.name}
          onChange={handleChangeInput}
        />
        <input
          name="phone"
          placeholder="phone"
          type="text"
          value={fields.email}
          onChange={handleChangeInput}
        />
        <button type="submit">Отправить</button>
      </form>
      <br />
      <hr />
      <h4>Загрузить файл</h4>
      <form action="" onSubmit={uploadFile}>
        <input ref={fileInput} name="file" type="file" />
        <button disabled={uploading}>Отправить файл</button>
        {uploading && <p>Идет загрузка...</p>}
      </form>
    </div>
  );
}

export default App;
