import { Avatar as AvatarMUI } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';
import { UserType } from "./userReducer";

const Avatar = ({user}:{user:UserType}) => {
    function stringToColor(string: string) {
        let hash = 0;
        let i;
        if(!string) return '#00';
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
        firstName = (!firstName) ? ' ':firstName;
        lastName = (!lastName) ? ' ':lastName;

        return {
            sx: {
                bgcolor: stringToColor(`${firstName} ${lastName}`),
            },
            children: [firstName[0], lastName[0]],
        };
    }

    return (<>
        {!(user.firstName) && !(user.lastName) ? <FaceIcon /> :
            <AvatarMUI {...stringAvatar(user.firstName, user.lastName)} />
        }
        <div>
            Hello {user.firstName} {user.lastName}
        </div>
    </>)
}
export default Avatar