import React from 'react'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';

export default function App() {

const [fields, setFiields] = React.useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});

const { register, handleSubmit, formState, reset } = useForm();
const form = useForm();
console.log(reset)

const onSubmit = (e) => {
 
  // e.target.reset()
  console.log(e)
}

console.log(formState.errors)

const handleClearFields = () => {
  setFiields({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
}

const handleClickRegister = (e) => {
if(!fields.email.includes('@')) {
  alert('что ты там ввел странное вместо почты')
  return
}

if(fields.firstName.length < 2) {
  alert('имя нужно выбрать подлиннее')
  return
}

if(fields.lastName.length < 2 || fields.lastName.length > 30) {
  alert('какая необычная фамилия')
  return
}

if(fields.password.length < 6) {
  alert('пароль минимум 6 символов')
  return
}

alert(`ты смог зарегистрироваться! ${fields.firstName}`)
  handleClearFields();
}

const handleChangeInput = (e) => {
  const { name, value } = e.target
  // fields[name] = value
  // console.log(fields)
  setFiields({ 
    ...fields,
    [name]: value
  })
}

// const isValid = !!fields.firstName && !!fields.lastName && !!fields.email && !!fields.password

// const isNotEmty = !!fields.firstName || !!fields.lastName || !!fields.email || !!fields.password

// console.log(isValid)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <TextField
        {...register(
          "firstName",
          { required: 'it is required field', maxLength: 20 },
          {validate: (value) => value !== "admin" || "nice try"}
        )}
        name="firstName"
        onChange={handleChangeInput}
        value={fields.firstName}
        label="Имя"
        variant="standard"
        required
        helperText={formState.errors.firstName && formState.errors.firstName.message}
        error={!!formState.errors.firstName}
      />
      <TextField
      {...register(
          "lastName",
          { required: 'it is required field last name', maxLength: 20 },
          {validate: (value) => value !== "admin" || "nice try"}
        )}
        name="lastName"
        onChange={handleChangeInput}
        value={fields.lastName}
        label="Фамилия"
        variant="standard"
        required
        helperText={formState.errors.lastName && formState.errors.lastName.message}
        error={!!formState.errors.lastName}
      />
      <TextField
      {...register(
          "email",
          { required: 'it is required field email', maxLength: 20 },
          {validate: (value) => value !== "admin" || "nice try"}
        )}
        name="email"
        onChange={handleChangeInput}
        value={fields.email}
        label="E-mail"
        variant="standard"
        required
        helperText={formState.errors.email && formState.errors.email.message}
        error={!!formState.errors.email}
      />
      <TextField
            {...register(
          "password",
          { required: 'it is required field password', maxLength: 6 },
          {validate: (value) => value !== "admin" || "nice try"}
        )}
        name="password"
        onChange={handleChangeInput}
        value={fields.password}
        type="password"
        label="Пароль"
        variant="standard"
        required
        helperText={formState.errors.password && formState.errors.password.message}
        error={!!formState.errors.password}
      />
      <br />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        type='submit'
      >
        Регистрация
       
      </Button>
      <input type="submit" />
      <br />
      {/* <Button
        onClick={handleClearFields}
        color="secondary"
        variant="contained"
      >
        Очистить
      </Button> */}
      <input
        style={{ display: "block", marginTop: 20 }}
        type="reset"
        value="Standard Reset Field Values"
      />
            <input
        style={{ display: "block", marginTop: 20 }}
        type="button"
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      />
    </form>
  );
}
