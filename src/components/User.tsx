import { useReducer, useState } from "react";
import userReducer, { PartialUserType, UserContext } from "./userReducer";
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Button, Toolbar } from "@mui/material";
import Login from "./Login";
import UserDetails from "./UserDetails";
import Register from "./Register";

const User = () => {
    const initialUserState: PartialUserType = { id: 0, email: '', password: '' };
    const [user, userDispatch] = useReducer(userReducer, initialUserState);
    const [isRegisteredStart, setIsRegisteredStart] = useState(false);
    const [isLoginStart, setIsLoginStart] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isButtonVisible, setButtonVisible] = useState(true);
    const routerURL = 'http://localhost:3000/api/user';

    const handleLoginClick = () => {
        setButtonVisible(false);
        setIsLoginStart(true);
    };

    const handleRegisterClick = () => {
        setButtonVisible(false);
        setIsRegisteredStart(true);
    };

    return (
        <UserContext.Provider value={{ user, userDispatch }}>
            <AppBar position="sticky">
                <Toolbar>
                    {isButtonVisible && (
                        <>
                            <Button
                                variant="outlined"
                                startIcon={<LoginIcon />}
                                color="inherit"
                                onClick={handleLoginClick}
                            >
                                Login
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<LoginIcon />}
                                color="inherit"
                                onClick={handleRegisterClick}
                            >
                                Register
                            </Button>
                        </>
                    )}
                    {isLogin && !isButtonVisible && <UserDetails routerURL={routerURL} />}
                </Toolbar>
            </AppBar>
            <div>
                {isRegisteredStart && !isLogin && <Register setIsLogin={setIsLogin} routerURL={routerURL} />}
                {isLoginStart && !isLogin && !isButtonVisible && <Login setIsLogin={setIsLogin} routerURL={routerURL} />}
            </div>
        </UserContext.Provider>
    );
};

export default User;
