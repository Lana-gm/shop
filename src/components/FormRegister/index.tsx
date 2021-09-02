import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import * as S from "./FormRegister.styles";

interface IFormInputs {
  username: string;
  password: string;
  email: string;
}

const FormRegister = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const handleForm = (data: IFormInputs) => {
    axios
      .post("https://kenzieshop2.herokuapp.com/register", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Sucesso ao criar a conta");
        history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta"));
  };

  return (
    <S.PageContainer>
      <S.FormContainer>
        <h1>Faça seu cadastro</h1>
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
          <S.Button type="submit">Cadastre-se</S.Button>
          <p>
            Já possui uma conta? <Link to="/login">Click aqui</Link>.
          </p>
        </form>
      </S.FormContainer>
    </S.PageContainer>
  );
};

export default FormRegister;
