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
import { Technology } from './views/explore/technology';
import { Events } from './views/explore/events';
import { CreateStory } from './views/dashboard/storyCreate/createStory';
import { Fragment } from 'react';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';




function App() {
  return (
    <StoreProvider store={store}>
      <ScrollToTop />

      <Media query="(max-width:1280px)">
        {(matches) =>
          matches ? (
            <Routes>
              <Route path="/" element={<SignUp />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route
                path="forgot-password"
                element={<ForgotPassword />}
              ></Route>
              <Route path="check-mail" element={<CheckEmail />}></Route>

              <Route path="/dashboard" element={<DashHeader />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="notification" element={<Notification />}></Route>
                <Route path="message" element={<MessageHome />}></Route>
                <Route path="pmessage" element={<ChatSection />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="group" element={<Group />}></Route>
                <Route path="pages" element={<Pages />}></Route>
                <Route path="explore" element={<Explore />}></Route>
                <Route path="Technology" element={<Technology />}></Route>
                <Route path="events" element={<Events />}></Route>
                <Route path="create-story" element={<CreateStory />}></Route>
              </Route>

              <Route path="*" element={<Errorpage />}></Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<SignUp />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route
                path="forgot-password"
                element={<ForgotPassword />}
              ></Route>
              <Route path="check-mail" element={<CheckEmail />}></Route>

              <Route path="/dashboard" element={<DashHeader />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="notification" element={<Notification />}></Route>
                <Route path="message" element={<MessageHome />}>
                  <Route index element={<ChatSection />}></Route>
                </Route>
                <Route path="create-story" element={<CreateStory />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="group" element={<Group />}></Route>
                <Route path="pages" element={<Pages />}></Route>
                <Route path="explore" element={<Explore />}></Route>
                <Route path="Technology" element={<Technology />}></Route>
                <Route path="events" element={<Events />}></Route>
              </Route>

              <Route
                path="dashboard/pmessage"
                element={<Navigate to="/dashboard/message" />}
              ></Route>
              <Route path="*" element={<Errorpage />}></Route>
            </Routes>
          )
        }
      </Media>
    </StoreProvider>
  );
}

export default App;

