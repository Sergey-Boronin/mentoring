import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  

  firstName: yup
    .string()
    .required("Это поле должно быть заполнено")
    .min(2, "Имя должно состоять минимум из двух символов"),
  lastName: yup
    .string()
    .min(2, "Фамилия должно состоять минимум из двух символов"),
  email: yup.string().email("Это не почта").required("Нужно ввести почту"),
  password: yup.string().min(6, "слишком пороткий пароль").required(),
});

export const PersonalInfoForm = ({ setFormData }) => {
  const navigate = useNavigate();
  
  const onSubmit = (values) =>{
     navigate('/address')
     setFormData(values)
    };
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form action="" className="personal-form">
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register("firstName")}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          fullWidth
        />
        <br />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register("lastName")}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          fullWidth
        />
        <br />
      </div>
      <br />
      <div className="row">
        <TextField
          {...register("email")}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="E-Mail"
          defaultValue=""
          fullWidth
        />
        <TextField
          {...register("password")}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
          name="password"
          type="password"
          label="Пароль"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <TextField name="about" label="Обо мне" fullWidth />
      </div>
      <br />
      <div className="row buttons">
        <Button variant="contained" color="inherit">
          Очистить
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="secondary"
        >
          Далее
        </Button>
      </div>
    </form>
  );
};
