import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
import { Container } from "./styles";

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(300);

    const navigate = useNavigate();

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {
        const total = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(total);
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity };
        });

        try {
            const { status } = await api.post(
                '/orders',
                { products },
                { validateStatus: () => true }
            );

            if (status === 200 || status === 201) {
                toast.success('Pedido Realizado Com Sucesso!');

                setTimeout(() => {
                    navigate('/');
                    clearCart(); // Limpa o carrinho exatamente quando for mudar de página
                }, 2000);

            } else if (status === 409) {
                toast.error('Erro ao tentar realizar o pedido.');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error("Falha no Sistema. Tente novamente.");
        }
    };

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>R$ {formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    );
}