import Form from "./Form";
import { UserContext, UserType } from "./userReducer";
import { FormEvent, useContext} from "react";
const UpdateUser = ({setIsUpdate}:{setIsUpdate:Function})=>{
    const {user, userDispatch}= useContext(UserContext);
    const handleSubmit=(e: FormEvent, userToUpdate:UserType)=>{
        e.preventDefault();
        userDispatch({
            type: 'UPDATE_USER',
            data: userToUpdate
        })
        setIsUpdate(false);
    }
    return(<>
        <Form handleSubmit={handleSubmit}></Form>
    </>)
    }

export default UpdateUser

