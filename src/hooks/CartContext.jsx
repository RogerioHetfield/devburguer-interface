import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];

        if (cartIndex >= 0) {
            newProductsInCart = [...cartProducts];
            newProductsInCart[cartIndex].quantity += 1;

            setCartProducts(newProductsInCart);
            updateLocalStorage(newProductsInCart);
        } else {
            product.quantity = 1;
            newProductsInCart = [...cartProducts, product];

            setCartProducts(newProductsInCart);
            updateLocalStorage(newProductsInCart);
        }
    }

    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    }


    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) =>
            prd.id === productId
                ? { ...prd, quantity: prd.quantity + 1 }
                : prd
        );

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) =>
                prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd
            );

            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem('saborecor:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart,
                deleteProduct,
                clearCart,
                increaseProduct,
                decreaseProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const updateLocalStorage = (products) => {
    localStorage.setItem('saborecor:cartInfo', JSON.stringify(products));
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};