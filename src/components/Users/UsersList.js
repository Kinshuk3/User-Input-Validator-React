import Card from "../UI/Card";
import classes from "./UsersList.module.css"

const UsersList = (props) =>{
    return (

        <Card cssClasses={classes.users}>
        <ul>
            {props.users.map((user) =>{
                return (
                    <li>{user.name} is {user.age} years old</li>
                )
            })}
        </ul>
        </Card>
    )
}

export default UsersList;