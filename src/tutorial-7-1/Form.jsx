import React from "react";
import { TextField, Button } from "@mui/material";
import { FormField } from "./components/FormField";

export const Form = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "0 auto",
      }}
    >
      <FormField name='firstName' label='Имя' />
      <br />
      <FormField name='lastName' label='Фимилия' />
      <br />
      <FormField name='email' label='Почта' />
      <br />
    </div>
  );
};
