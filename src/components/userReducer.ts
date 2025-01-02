import { createContext, Dispatch } from "react"

export type UserType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    tel: string
}

type Action = {
    type: 'CREATE_USER',
    data: UserType
} | {
    type: 'UPDATE_USER',
    data: Partial<UserType>// & { firstName: string }
} | {
    type: 'DELETE_USER'
}| {
    type: 'GET_USER'
}

export const UserContext =createContext<{
    user: UserType;
    userDispatch: Dispatch<Action>;
  }>({
    user: {firstName:'Tehila', lastName:'Hershler', email:'',password:'',address:'',tel:''},
    userDispatch: () => null
  });

  export default (state: UserType, action: Action): UserType=> {    
    switch (action.type) {
        case 'CREATE_USER':
            if (state.firstName!=action.data.firstName || state.lastName!=action.data.lastName)
                return {...action.data};
            else 
                return {...state};
        case 'DELETE_USER':
            return state;
        case 'UPDATE_USER':
            return {...state, ...action.data}
        case "GET_USER":
                return state;
        default:
            return state;
    }
}