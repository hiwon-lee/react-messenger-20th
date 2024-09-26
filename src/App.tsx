import Chat from './pages/Chat/Chat';
import './App.css';
import StatusBar from './components/common/StatusBar';

function App() {
  return (
    <>
      <div className="App">
        <StatusBar />
        <Chat />
      </div>
    </>
  );
}

export default App;
