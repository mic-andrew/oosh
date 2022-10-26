import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SignUp } from './views/signup';
import { Login } from './views/login';
import { ForgotPassword } from './views/forgotpassword';
import { CheckEmail } from './views/checkemail';
import { DashHeader } from './views/dashboard/dashhome';
import { Errorpage } from './404';
import { Feeds } from './views/dashboard/feed';
import { Notification } from './views/dashboard/notification';
import { MessageHome } from './views/message/messagehome';
import { Dashboard } from './views/dashboard/dashboard';
import { ChatSection } from './views/message/chatSection';
import ScrollToTop from './scrollToTop';

import Media from 'react-media';
import { Profile } from './views/Profile/profile';
import { Settings } from './views/settings/settings';
import { Group } from './views/groups/group';
import { Pages } from './views/pages/pages';
import { Explore } from './views/explore/explore';




function App() {
  return (
    <>

      <ScrollToTop />

      <Media query="(max-width:1280px)">
        {
          matches => matches ? (
            <Routes>
              <Route path="/" element={<SignUp />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="forgot-password" element={<ForgotPassword />}></Route>
              <Route path="check-mail" element={<CheckEmail />}></Route>


              <Route path="/dashboard" element={<DashHeader />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="notification" element={<Notification />}></Route>
                <Route path="message" element={<MessageHome />}></Route>
                <Route path="pmessage" element={<ChatSection />}></Route>
                <Route path='profile' element={<Profile />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="group" element={<Group />}></Route>
                <Route path="pages" element={<Pages />}></Route>
                <Route path="explore" element={<Explore />}></Route>
              </Route>

              <Route path="*" element={<Errorpage />}></Route>
            </Routes>


          ) : (

            <Routes>
              <Route path="/" element={<SignUp />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="forgot-password" element={<ForgotPassword />}></Route>
              <Route path="check-mail" element={<CheckEmail />}></Route>

              <Route path="/dashboard" element={<DashHeader />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="notification" element={<Notification />}></Route>
                <Route path="message" element={<MessageHome />}>
                  <Route index element={<ChatSection />}></Route>
                </Route>
                <Route path='profile' element={<Profile />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="group" element={<Group />}></Route>
                <Route path="pages" element={<Pages />}></Route>
                <Route path="explore" element={<Explore />}></Route>
              </Route>


              <Route path="dashboard/pmessage" element={<Navigate to="/dashboard/message" />}></Route>
              <Route path="*" element={<Errorpage />}></Route>
            </Routes>
          )
        }


      </Media>

    </>
  );
}

export default App;


// import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom'; // add Switch
// import Media from 'react-media'; // add Media
// import Nav from './Nav';
// import UsersList from './Users/UsersList'; // add UsersList
// import UsersDetails from './Users/UsersDetails'; // add UsersDetails
// import UsersDashboard from './Users/UsersDashboard';
// import './App.css';

// class App extends Component {
//   // ...

//   render() {
//     return (
//       <div className="App">
//         <Nav />
//         <Media query="(max-width: 599px)">
//           {matches =>
//             matches ? (
//               <Switch>
//                 <Route
//                   exact
//                   path="/users"
//                   render={props => (
//                     <UsersList users={this.state.users} {...props} />
//                   )}
//                 />
//                 <Route
//                   path="/users/:id"
//                   render={props => (
//                     <UsersDetails
//                       user={
//                         this.state.users.filter(
//                           user =>
//                             user.id === parseInt(props.match.params.id, 10)
//                         )[0]
//                       }
//                       {...props}
//                     />
//                   )}
//                 />
//                 <Redirect from="/" to="/users" />
//                 <Redirect from="/dashboard" to="/users" />
//               </Switch>
//             ) : (
//               <Switch>
//                 <Route
//                   path="/dashboard"
//                   render={props => (
//                     <UsersDashboard users={this.state.users} {...props} />
//                   )}
//                 />
//                 <Redirect from="/" to="/dashboard" />
//                 <Redirect from="/users" to="/dashboard" />
//               </Switch>
//             )
//           }
//         </Media>
//       </div>
//     );
//   }
// }

// export default App;