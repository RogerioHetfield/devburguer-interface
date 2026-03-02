import { useContext, createContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('saborecor:userData', JSON.stringify(userInfo));
    };

    const logout = () => {
        localStorage.removeItem('saborecor:userData');
        setUserInfo({});
    };

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('saborecor:userData');

        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
    }
}, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context
};

export default UserProvider