import { createContext, Dispatch } from "react"

export type UserType = {
    id: number
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    tel: string
}

export type PartialUserType = {
    id: number,
    email: string,
    password: string
}

type Action = {
    type: 'CREATE_USER' | 'LOGIN_USER',
    data: PartialUserType
} | {
    type: 'UPDATE_USER',
    data: Partial<UserType>,
    //userID: number
} | {
    type: 'DELETE_USER'
} | {
    type: 'GET_USER'
}

export const UserContext = createContext<{
    user: UserType;
    userDispatch: Dispatch<Action>;
}>({
    user: { id: 0, firstName: 'Tehila', lastName: 'Hershler', email: '', password: '', address: '', tel: '' },
    userDispatch: () => null
});

export default (state: UserType, action: Action): UserType => {
    let res;
    switch (action.type) {
        case 'CREATE_USER':
            return { ...state, ...action.data };
        case 'LOGIN_USER':
            if (state.email != action.data.email || state.password != action.data.password){
                state={id: 0, firstName: '', lastName: '', email: '', password: '', address: '', tel: '' }
                }
            return { ...state, ...action.data };
        case 'DELETE_USER':
            return state;
        case 'UPDATE_USER':
            return { ...state, ...action.data }
        case "GET_USER":
            return state;
        default:
            return state;
    }
}
// switch (action.type) {
//     case 'CREATE_USER':
//         try {
//             res = await axios.post(`${routerURL}/register`, action.data);
//             //setUserID(res.data.userID);
//             return res.data.userID;
//         } catch (e) {
//             console.log(e);
//             //if (e.status === 422)
//                 alert('user already sign up')
//         }
//         return state;
//     case 'LOGIN_USER':
//         try {
//             res = await axios.post(`${routerURL}/login`, action.data)
//             return res.data;
//         } catch (e) {
//             console.log(e);
//             //if (e.status === 401)
//                 alert('invalid credentials')
//         }
//         return state;
//     case 'UPDATE_USER':
//         try {
//             res = await axios.put(`${routerURL}`, action.data, {
//                 headers: {'userID': ''+action.userID}
//             });
//             return res.data;
//         } catch (e) {
//             console.log(e);
//             //if (e.status === 404)
//                 alert('user already sign up');
//         }
//         return state;
//     //case 'GET_USER' | 'DELETE_USER':
//         //return state;
//     default:
//         return state;
// } 