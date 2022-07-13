import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeSelect } from "../../Styles/ThemeSelect";
import { useContext } from "react";
import { ApiContext } from "../../Providers/Api";
import { toast } from "react-toastify";

export const FormsRegister = () => {
  const history = useHistory();
  const { createUser } = useContext(ApiContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    state: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    img: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    const res = await createUser(data);

    if (res.name !== "AxiosError") {
      history.push("/login");
      toast("✔️ Conta criada com sucesso!", {
        className: "toastify-color-progress-success",
      });
    } else {
      toast('❌ Email já existente', {className: "toastify-color-progress-error"})
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <p>Crie sua conta</p>
      <ThemeInput
        label="Nome"
        name="name"
        placeholder="Digite seu nome"
        error={errors.name?.message}
        register={register}
      />

      <ThemeInput
        label="Email"
        name="email"
        placeholder="Digite seu email"
        error={errors.email?.message}
        register={register}
      />

      <ThemeInput
        label="Senha"
        name="password"
        placeholder="Digite sua senha"
        type="password"
        error={errors.password?.message}
        register={register}
      />
      <ThemeInput
        label="Confirmar senha"
        name="passwordConfirm"
        placeholder="Confirmação de senha"
        type="password"
        error={errors.passwordConfirm?.message}
        register={register}
      />

      <ThemeSelect
        label="Estado"
        name="state"
        error={errors.state?.message}
        register={register}
      >
        <option value="">Selecione o estado</option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
        <option value="EX">Estrangeiro</option>
      </ThemeSelect>

      <ThemeInput
        label="Cidade"
        name="city"
        placeholder="Digite sua cidade"
        error={errors.city?.message}
        register={register}
      />
      <ThemeInput
        label="Contato"
        name="contact"
        placeholder="Digite seu contato"
        error={errors.contact?.message}
        register={register}
      />

      <ThemeSelect
        label="Sou"
        name="category"
        error={errors.module?.message}
        register={register}
      >
        <option value={"Churrasqueiro"}>Churrasqueiro</option>
        <option value={"Consumidor"}>Consumidor</option>
      </ThemeSelect>

      <ThemeInput
        label="Escolha sua foto"
        name="img"
        placeholder="Coloque  url da imagem aqui"
        error={errors.img?.message}
        register={register}
      />

      <ThemeButton schema="var(--red-2)" large type="submit">
        Cadastrar
      </ThemeButton>
      <span>Já possui uma conta?</span>
      <Link to="/login">
        <ThemeButton schema="var(--grey-2)" large>
          Login
        </ThemeButton>
      </Link>
    </form>
  );
};
