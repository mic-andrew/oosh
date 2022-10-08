import './App.css';
import {Route, Routes } from 'react-router-dom';
import { SignUp } from './views/signup';
import { Login } from './views/login';
import { ForgotPassword } from './views/forgotpassword';
import { CheckEmail } from './views/checkemail';
import { Dashboard } from './views/dashboard/dashboard';
import { DashHeader } from './components/dashboard/dashheader';




function App() {
  return (
    <>

      <Routes>
         
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="check-mail" element={<CheckEmail/>}></Route>

        <Route path="/dashboard" element={<DashHeader/>}>
          <Route index element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    
    </>
  );
}

export default App;
