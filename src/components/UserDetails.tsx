import { useContext, useState } from "react";
import UpdateUser from "./UpdateUser"
import { UserContext } from "./userReducer";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Avatar from "./Avatar";

const UserDetails = ({routerURL}:{routerURL:string}) => {
  const { user, userDispatch } = useContext(UserContext)
  const [isUpdate, setIsUpdate] = useState(false)

  return (<>
    <Avatar user={user}></Avatar>
    <Button
     sx={{ 
      position: 'absolute', // מיקום מוחלט
      top: 16, // מרחק מהחלק העליון
      right: 16, // מרחק מהצד הימני
      }}
    variant="outlined"
      startIcon={<EditIcon />}
      color="inherit"
      onClick={() => setIsUpdate(true)}>Edit
    </Button>
    {isUpdate && <UpdateUser setIsUpdate={setIsUpdate} routerURL={routerURL}/>}
  </>)
}

export default UserDetails;