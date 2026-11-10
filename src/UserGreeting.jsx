
function UserGreeting(props){
        // return(props.isLoggedIn ? <h2 className="cool">Welcome {props.username}</h2> :
        //                          <h2 className="login">please log in to continue </h2>);

const welcomeMessage = <h2 className="cool">Welcome {props.username}</h2> 

const loginMessage =  <h2 className="login">please log in to continue </h2>

return(props.isLoggedIn ? welcomeMessage : loginMessage)

}
    
export default UserGreeting