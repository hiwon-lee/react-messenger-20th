import Chat from './pages/Chat';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StatusBar from './components/common/StatusBar';
import Members from './pages/Members';
import Team from './pages/Team';
import More from './pages/More';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StatusBar />
        <Routes>
          <Route
            path="/"
            element={<Members />}
          ></Route>
          <Route
            path="/members"
            element={<Members />}
          ></Route>
          <Route
            path="/chat"
            element={<Chat />}
          ></Route>
          <Route
            path="/team"
            element={<Team />}
          ></Route>
          <Route
            path="/more"
            element={<More />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
