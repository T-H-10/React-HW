import { useReducer, useState } from "react"
import userReducer, { UserContext, UserType } from "./userReducer"
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Button, Toolbar } from "@mui/material";
import Login from "./Login";
import UserDetails from "./UserDetails";
import { DisplaySettings } from "@mui/icons-material";
const User = () => {
    const temp: UserType = { firstName: '', lastName: '', email: '', password: '', address: '', tel: '' }
    const [user, userDispatch] = useReducer(userReducer, temp)
    const [isLogin, setIsLogin] = useState(false)
    const [isButtonVisible, setButtonVisible] = useState(true); //האם הכפתור זמין - כלומר האם אני לא בתוך המערכת
    return (<>
        <UserContext.Provider value={{ user, userDispatch }}>
            <AppBar position="sticky">
                <Toolbar>
                    {isButtonVisible&&
                    <Button variant="outlined"
                        startIcon={<LoginIcon />}
                        color="inherit"
                        onClick={()=>{setButtonVisible(false)
                        }}
                    >Login
                    </Button>
                    }
                    {isLogin && !isButtonVisible && <UserDetails/>}

                </Toolbar>
            </AppBar>
            <div>
            {!isLogin && !isButtonVisible && <Login setIsLogin={setIsLogin}></Login>} {/* טקסט חלופי לאחר הסתרת הכפתור */}
            </div>
        </UserContext.Provider>
    </>)

}
export default User