import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import * as yup from "yup"
import { useUser } from "../../hooks/UserContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";
import Logo from "../../assets/logo1.png";
import { LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";
import { Button } from "../../components/Button";

export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();

    const schema = yup
        .object({
            email: yup
                .string()
                .email('Digite um Email Valido')
                .required('O Email é obrigatório'),
            password: yup
                .string()
                .min(6, 'Digite uma senha com no mínimo 6 caracteres')
                .required('A senha é obrigatória'),
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
        const { data: userData } = await toast.promise(
            api.post('/sessions', {
                email: data.email,
                password: data.password

                
            }),
            
            {
                pending: 'Verificando suas credenciais',
                success: {
                    render() {
                        setTimeout(() => {
                            if (userData?.admin) {
                                navigate('/admin/pedidos');
                            } else {
                                navigate('/');
                            }
                        }, 2000);

                        return 'Login realizado com sucesso!';
                    }
                },
                error: 'Email ou senha incorretos'
            },
        );

        putUserData(userData);
    };
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo a <span id="sabor">Sabor</span> <span>& Cor</span>
                    <br />
                    Faça seu <span>Login</span></Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não tem uma conta? <Link to="/cadastro">Clique Aqui</Link></p>
            </RightContainer>

        </Container>
    );
}