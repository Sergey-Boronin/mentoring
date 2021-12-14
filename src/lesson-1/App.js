
import ProfileFC from "./components/ProfileFC";
import ProfileCC from "./components/ProfileCC";
import montoToStr from "../utils/montoToStr";

const App = () => {
  const name = 'Вася'
  const date = new Date();
  const dateString = `${date.getDate().toString()} ${montoToStr(date.getMonth())} ${date.getFullYear()}`
  return (
    <>
      <ProfileFC
        name={name}
        registeredAt={dateString}
      />
        <ProfileCC
        name={name}
        registeredAt={dateString}
      />
    </>
  )
}

export default App;