import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateForm from './Components/StateFrom/StateForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = (data) =>{
  //  console.log(data)
  // }

  // const handleLogin = (e) =>{
  //   console.log(e)
  // }

  return (
    <>
      <h2>Form Master</h2>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit} >
        <div>
          <h2>SignUp Form</h2>
          <p>Sign Up to Connect With Us</p>
        </div>
      </ReusableForm>
      <hr />
      <ReusableForm formTitle={'Login Form'} submitBtnText={'Login'} handleSubmit={handleLogin}>
      <div>
          <h2>Login Form</h2>
          <p>Login To See Our Website s Details about us</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
