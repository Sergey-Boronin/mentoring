import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  city: yup.string().required("Укажите город"),
  street: yup.string().required("Укажите улицу"),
  house: yup.string().required("Укажите номер дома"),

});

export const AddressForm = ({ setFormData }) => {
  const navigate = useNavigate()
  const onSubmit = (values) => {
    setFormData(prev => ({
      ...prev, 
      ...values
    })) 
    navigate('/result')
  };
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form action="" className="personal-form">
        <TextField
          name="city"
          label="Город"
          {...register("city")}
          helperText={
            formState.errors.city && formState.errors.city.message
          }
          error={!!formState.errors.city}
          fullWidth
        />
      <br/><br />
      <TextField
          name="street"
          label="Улица"
          {...register("street")}
          helperText={
            formState.errors.street && formState.errors.street.message
          }
          error={!!formState.errors.street}
          fullWidth
        />
        <br/><br />
          <TextField
          type="number"
          name="house"
          label="Дом"
          {...register("house")}
          helperText={
            formState.errors.house && formState.errors.house.message
          }
          error={!!formState.errors.street}
          fullWidth
        /><br /><br />
      <div className="row buttons">
        <Button variant="contained" color="inherit">
          Очистить
        </Button>
        <Button onClick={() => navigate('/result')}>Назад</Button>
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
