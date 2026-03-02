import { createBrowserRouter } from 'react-router-dom'
import { Login, Menu, Cart, Register, Home } from '../containers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


export const router = createBrowserRouter([
    {
        path: '/',
        element: (

            <>
                <Header />
                <Home />
                <Footer />
            </>
        )
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/cardapio',
        element: (

            <>
                <Header />
                <Menu />
            </>
        )
    },
    {
        path: '/carrinho',
        element: <Cart />,
    }
]);