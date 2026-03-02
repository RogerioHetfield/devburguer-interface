import { Container, Content, Title, Banner } from "./styles";
import Logo from "../../assets/logo1.png";
import { CartItems, CartResume } from "../../components";



export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="Logo" />
            </Banner>
            <Title>Checkout Pedido</Title>
            <Content>
                <CartItems />
                <CartResume />
            </Content>
        </Container>
    );
}