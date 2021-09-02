import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import * as S from "./FormLogin.styles";

interface IFormInputs {
  username?: string;
  password: string;
  email: string;
}

const FormLogin = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const handleForm = (data: IFormInputs) => {
    axios
      .post("https://kenzieshop2.herokuapp.com/login", data)
      .then((res) => {
        localStorage.setItem("@KenzieShop:token", res.data.accessToken);
        toast.success("Sucesso ao logar");
        history.push("/home");
      })
      .catch((err) => toast.error("Erro ao logar"));
  };

  return (
    <S.PageContainer>
      <S.FormContainer>
        <h1>Acesse sua conta</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <TextField
            label="Digite seu e-mail"
            variant="outlined"
            size="small"
            margin="normal"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
          <S.Button type="submit">Logar</S.Button>
          <p>
            Não possui uma conta? <Link to="/">Click aqui</Link>.
          </p>
        </form>
      </S.FormContainer>
      <S.ImageContainer></S.ImageContainer>
    </S.PageContainer>
  );
};

export default FormLogin;
