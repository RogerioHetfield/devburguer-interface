import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Container } from "./styles";
import Logo from "../../assets/logo1.png";
import { LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function Register() {

    const navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup
                .string()
                .email('Digite um Email Valido')
                .required('O Email é obrigatório'),
            password: yup
                .string()
                .min(6, 'Digite uma senha com no mínimo 6 caracteres')
                .required('A senha é obrigatória'),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
                .required('Confirme sua senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    console.log(errors)


    const onSubmit = async (data) => {
        try {
            const { status } = await api.post(
                '/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password
                },
                {
                    validateStatus: () => true,
                },
            );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Cadastro realizado com sucesso!');
            } else if (status === 409) {
                toast.error('Erro ao realizar cadastro. Email ja cadastrado.');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error("Falha no Sistema. Tente novamente.");
        }
    };



    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>
            <RightContainer>
                <Title>Criar Conta
                    <br />
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Digite seu nome" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Digite seu email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Confirmar Senha</label>
                        <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>

                </Form>
                <p>Já tem uma conta? <Link to="/login">Clique Aqui</Link></p>
            </RightContainer>

        </Container>
    )
};