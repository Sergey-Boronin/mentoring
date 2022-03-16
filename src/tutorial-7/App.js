import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data, e) => {};

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Имя</label>
      <input type="text" {...register("firstName", { required: true })} />
      {errors.firstName && <p>This is required</p>}

      <label>Фамилия</label>
      <input type="text" {...register("lastName")} />

      <input type="submit" />
      <input
        style={{ display: "block", marginTop: 20 }}
        type="reset"
        value="Очистить"
      />

    </form>
  );
}


