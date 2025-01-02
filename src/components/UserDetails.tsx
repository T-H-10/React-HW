import { useContext, useState } from "react";
import UpdateUser from "./UpdateUser"
import { UserContext } from "./userReducer";
import { Avatar, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import FaceIcon from '@mui/icons-material/Face';
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(firstName: string, lastName: string) {
  return {
    sx: {
      bgcolor: stringToColor(`${firstName} ${lastName}`),
    },
    children: [firstName[0], lastName[0]],
  };
}

const UserDetails = () => {

  const { user, userDispatch } = useContext(UserContext)
  const [isUpdate, setIsUpdate] = useState(false)

  return (<>
    {user.firstName==='' && user.lastName===''?<FaceIcon/>:
    <Avatar {...stringAvatar(user.firstName, user.lastName)} />
    }
    <div>
      Hello { user.firstName} { user.lastName}
    </div>
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
    {isUpdate && <UpdateUser setIsUpdate={setIsUpdate}/>}
  </>)
}

export default UserDetails;