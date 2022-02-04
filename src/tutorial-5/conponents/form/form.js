import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import styles from "./styles.module.css";

const Form = ({ onSubmit, handleEmailChange, handleNameChange, handleTextChange, name, email, description }) => {
  return(
      <>
        <Typography style={{fontWeight: 'bold'}} variant="h5" component='p' mb={2}>Обратная связь:</Typography>
        <form onSubmit={onSubmit} className={styles.form}>
          <TextField onChange={handleNameChange} value={name} label="Имя"></TextField>
          <TextField onChange={handleEmailChange} value={email} label='Почта'></TextField>
          <TextField onChange={handleTextChange} multiline rows={4} value={description} label='Текст...'></TextField>
          <Button type="submit" variant='contained'>Отправить</Button>
        </form>
      </>
  )
}

export default Form;