import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout, AuthLayout } from 'components';
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
          {/* No Token */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<P.LoginPage />} />
            <Route path="join" element={<P.JoinPage />} />
          </Route>

          {/* Navbar included */}
          <Route path="/" element={<AppLayout navbar />}>
            <Route index element={<P.FeedPage />} />
            <Route path="meetup" element={<P.MeetPage />} />
            <Route path="chats" element={<P.ChatPage />} />
            <Route path="mypage" element={<P.MyPage />} />
          </Route>

          {/* Navbar not included */}
          <Route path="/" element={<AppLayout />}>
            <Route path="feed/:id" element={<P.FeedViewPage />} />
            <Route path="feed/add" element={<P.FeedAddPage />} />
            <Route path="mypage/posts" element={<P.MyPostPage />} />
            <Route path="mypage/scraps" element={<P.MyScrapPage />} />
          </Route>
          <Route path="mytown" element={<P.TownAuthPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
