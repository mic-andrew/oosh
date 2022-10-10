import './App.css';
import {Route, Routes } from 'react-router-dom';
import { SignUp } from './views/signup';
import { Login } from './views/login';
import { ForgotPassword } from './views/forgotpassword';
import { CheckEmail } from './views/checkemail';
import { Dashboard } from './views/dashboard/dashboard';
import { DashHeader } from './components/dashboard/dashheader';
import { Errorpage } from './404';
import { Feeds } from './views/dashboard/feed';
import { Pages } from './views/pages';




function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="check-mail" element={<CheckEmail/>}></Route>

        <Route path="/dashboard" element={<DashHeader/>}>
          <Route index element={<Feeds/>}></Route>
          <Route path="path" element={<Pages/>}></Route>
        </Route>


        <Route path="*" element={<Errorpage/>}></Route>
      </Routes>
    
    </>
  );
}

export default App;
