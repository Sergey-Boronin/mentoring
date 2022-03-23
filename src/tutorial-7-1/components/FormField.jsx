import React from 'react'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export const FormField = ({name, label}) => {
const { register, formState } = useFormContext();

  return (
    <TextField
    {...register(name)}
    helperText={
    formState.errors[name] && formState.errors[name].message
    }
    error={!!formState.errors[name]}
    name={name}
    label={label}
  />
  )
}
