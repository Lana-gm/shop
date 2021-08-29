import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

interface IFormInputs {
  username: string;
  password: string;
  email: string;
}

const FormRegister = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const handleForm = (data: IFormInputs) => {
    console.log(data);

    // axios
    //   .post("https://kenzieshop2.herokuapp.com/register", data)
    //   .then((res) => {
    //     setLocalStorage(res);
    //     toast.success("Sucesso ao criar a conta");
    //     history.push("/login");
    //   })
    //   .catch((err) => toast.error("Erro ao criar a conta"));
    //   .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <TextField
        label="Nome do usuário"
        variant="outlined"
        size="small"
        margin="normal"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        label="Digite seu e-mail"
        variant="outlined"
        size="small"
        margin="normal"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Digite sua senha"
        variant="outlined"
        size="small"
        type="password"
        margin="normal"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <button type="submit">Cadastre-se</button>
    </form>
  );
};

export default FormRegister;
