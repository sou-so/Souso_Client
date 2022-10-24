import { JoinPage, LoginPage, MainPage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';

function App() {
  return (
    <div className="container">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
