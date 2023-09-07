"use client";

import { Controller, useForm } from "react-hook-form";
import MyComponents from "./components/ui/ui_components";

interface FormType {
  name: string;
  email: string;
  password: string;
  checkpassword: string;
  terms: boolean;
}

export default function Home() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      checkpassword: "",
      terms: false,
    },
  });

  const { Input, Button, Checkbox } = MyComponents;

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-sky-950">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        <Input
          width={"w-96"}
          htmlfor={"name"}
          type={"text"}
          label={"Nome"}
          errors={errors.name}
          {...register("name", { required: "Este campo é obrigatório" })}
          placeholder={"Nome"}
          style={{ textTransform: "capitalize" }}
        />
        <Input
          width={"w-96"}
          htmlfor={"email"}
          type={"text"}
          label={"E-mail"}
          errors={errors.email}
          {...register("email", {
            required: "Este campo é obrigatório",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
              message: "Insira um e-mail no formato válido",
            },
          })}
          placeholder={"E-mail"}
        />
        <Input
          width={"w-96"}
          htmlfor={"password"}
          type={"password"}
          label={"Senha"}
          errors={errors.password}
          {...register("password", {
            required: "Este campo é obrigatório",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%#*?&]{8,}$/,
              message:
                "Precisa de pelo menos 8 letras com uma letra minuscula e uma maiúscula, um número e um carácter especial",
            },
          })}
          placeholder={"********"}
        />
        <Input
          width={"w-96"}
          htmlfor={"checkpassword"}
          type={"password"}
          label={"Confirmar senha"}
          errors={errors.checkpassword}
          {...register("checkpassword", {
            required: "Este campo é obrigatório",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%#*?&]{8,}$/,
              message:
                "Precisa de pelo menos 8 letras com uma letra minuscula e uma maiúscula, um número e um carácter especial",
            },
          })}
          placeholder={"********"}
        />
        <Controller
          control={control}
          name="terms"
          rules={{ required: "Você precisa estar de acordo com os termos" }}
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <>
              <Checkbox
                change={onChange}
                label="Concordo com as política de privacidade"
                check={value}
                ref={ref}
                name={"policy"}
                errors={fieldState.error?.message}
                addClass={"mb-4"}
              />
            </>
          )}
        />
        <Button type="submit"> Criar Conta </Button>
      </form>
    </div>
  );
}
