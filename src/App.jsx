import './App.css'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/Landing'
import SignInPopUp from './LoginSignup/SignInPopUp'
import SignUpPopUp from './SignUp/SignUpPopUp'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
     </Routes>
     {/* <SignInPopUp/> */}
     {/* <SignUpPopUp/> */}
    </>
  )
}

export default App
