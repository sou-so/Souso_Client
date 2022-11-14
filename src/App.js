import { Route, Routes } from 'react-router-dom';
import { AppLayout } from 'components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/Theme';
import * as P from 'pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <Routes>
          <Route path="login" element={<P.LoginPage />} />
          <Route path="join" element={<P.JoinPage />} />
          <Route path="mytown" element={<P.TownAuthPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<P.FeedPage />} />
            <Route path="meetup" element={<P.MeetPage />} />
            <Route path="chats" element={<P.ChatPage />} />
            <Route path="mypage" element={<P.MyPage />} />
          </Route>

          {/* 임시 Route */}
          <Route path="view" element={<P.FeedViewPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
