import React from 'react'
import { Paper } from "@mui/material";

export default function Result({ formData }) {
  return (
    <div>
      <Paper style={{padding:20}}>
        <p>Данные пользователя</p>
        <ul>
          <li>Имя: {formData.firstName}</li>
          <li>Фамилия: {formData.lastName}</li>
          <li>Почта: {formData.email}</li>
          <li>Пароль: {formData.password}</li>
          <li>Доп. информация: {formData.about}</li>
          <hr />
          <li>Город: {formData.city}</li>
          <li>Улица: {formData.street}</li>
          <li>Дом: {formData.house}</li>
        </ul>
      </Paper>
    </div>
  )
}
