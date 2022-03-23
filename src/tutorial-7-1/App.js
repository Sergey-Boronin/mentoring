import React from "react";
import { Form } from "./Form";
import { TextField, Button } from "@mui/material";

import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Это поле должно быть заполнено")
    .min(2, "Имя должно состоять минимум из двух символов"),
  lastName: yup
    .string()
    .required("Это поле должно быть заполнено")
    .min(2, "Фамилия должно состоять минимум из двух символов"),
  email: yup.string().email("Это не почта").required("Нужно ввести почту"),
});

function App() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Form
        />
      </FormProvider>
      <Button 
        style={{margin: '0 auto', display: 'block'}}
        onClick={methods.handleSubmit(onSubmit)}
        variant="contained"
        color="secondary"
      >
        Регистрация
      </Button>
    </div>
  );
}

export default App;
