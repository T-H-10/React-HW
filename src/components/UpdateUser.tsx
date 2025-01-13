import axios from "axios";
import Form from "./Form";
import { UserContext, UserType } from "./userReducer";
import { FormEvent, useContext} from "react";
const UpdateUser = ({setIsUpdate, routerURL}:{setIsUpdate:Function, routerURL:string})=>{
    const {user, userDispatch}= useContext(UserContext);
    const handleSubmit= async(e: FormEvent, userToUpdate:UserType)=>{
        e.preventDefault();
        try {
            const res= await axios.put(`${routerURL}`, userToUpdate,{
                headers: {'userID': ''+user.id}
            });
            userDispatch({
                type: 'UPDATE_USER',
                data: res.data
            })
            setIsUpdate(false);
        } catch (e) {
            console.log(e);
            if (e.status === 404)
                alert('User not found');
            if (e.status === 403)
                alert('Unauthorized');
        }
        
    }
    return(<>
        <Form handleSubmit={handleSubmit}></Form>
    </>)
    }

export default UpdateUser

