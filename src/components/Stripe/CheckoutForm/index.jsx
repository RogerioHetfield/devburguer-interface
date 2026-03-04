import { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles.css";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

// 1. Use exportação nomeada para funcionar com seu index.js
export default function CheckoutForm() {
    const { cartProducts, clearCart } = useCart();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const {
        state: { dpmCheckerLink },
    } = useLocation();

    // 2. TUDO ISSO DEVE ESTAR DENTRO DA FUNÇÃO
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe.js has not yet loaded.");
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.origin + "/confirmacao", // Ajuste sua rota aqui
            },
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            try {

                const products = cartProducts.map((product) => {
                    return { id: product.id, quantity: product.quantity, price: product.price };
                });

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
        }

        setIsLoading(false);
    };

    // 3. TODO COMPONENTE PRECISA DE UM RETURN COM JSX
    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    className="button"
                >
                    <span id="button-text">
                        {isLoading ? (
                            <div className="spinner" id="spinner"></div>
                        ) : (
                            "Pagar agora"
                        )}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
            <div id="dpm-annotation">
                <p>
                    Os metodos de pagamento são disponibilizados de acordo com a sua localização.

                    <a
                        href={dpmCheckerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="dpm-integration-checker"
                        className="link"
                    >
                        Ver Métodos de pagamento disponíveis para sua região
                    </a>
                </p>
            </div>
        </div >
    );
}