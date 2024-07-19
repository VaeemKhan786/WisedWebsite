import './App.css'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/Landing'
import SignInPopUp from './LoginSignup/SignInPopUp'
import SignUpPopUp from './SignUp/SignUpPopUp'
import Personalise from './SignUp/Personalise'

function App() {

  return (
    <>
     {/* <Routes>
      <Route path='/' element={<Landing/>}/>
     </Routes> */}
     {/* <SignInPopUp/> */}
     {/* <SignUpPopUp/> */}
     <Personalise/>
    </>
  )
}

export default App
