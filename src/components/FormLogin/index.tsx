import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

interface IFormInputs {
  username?: string;
  password: string;
  email: string;
}

const FormLogin = () => {
  // const schema = yup.object().shape({
  //   email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  //   password: yup.string().required("Campo obrigatório"),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const handleForm = (data: IFormInputs) => {
    console.log(data);

    // axios
    //   .post("https://kenzieshop2.herokuapp.com/login", data)
    //   .then((res) => {
    //     setLocalStorage(res);
    //     toast.success("Sucesso ao logar");
    //     history.push("/login");
    //   })
    //   .catch((err) => toast.error("Erro ao logar"));
    //   .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <TextField
        label="Digite seu e-mail"
        variant="outlined"
        size="small"
        margin="normal"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Digite sua senha"
        variant="outlined"
        size="small"
        type="password"
        margin="normal"
        {...register("password", { required: true })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <button type="submit">Logar</button>
    </form>
  );
};

export default FormLogin;
