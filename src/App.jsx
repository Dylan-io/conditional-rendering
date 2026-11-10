// conditional rendering = allows you to control what gets rendered in your
//  application based on certain condition
// (show,hide, or change component)

import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username='Ben'/>
    </>
  )
 
}

export default App
