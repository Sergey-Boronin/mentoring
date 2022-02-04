export default function App() {
  let email = "";
  let password = "";

  const handleChange = (e) => {
    
    e.target.type === "text"
      ? email = e.target.value
      : password = e.target.value;
      console.log(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email && password) {
      console.log(email, password)
      email = ''
      password= ''
      e.target.reset()
    } else {
      alert('нужно заполнить форму')
    }
  }

  return (
    <form onSubmit={handleSubmit} action="#" style={{ width: "220px" }}>
      <input onChange={handleChange} type="text" placeholder="E-mail" />
      <input onChange={handleChange} type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
  );
}
