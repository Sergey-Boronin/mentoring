const ProfileFC = (props) => {
  return (
    <>
      <h2>Привет, {props.name}!</h2>
      <p>Дата ресгистрации: {props.registeredAt}</p>
    </>
  )
}

export default ProfileFC;