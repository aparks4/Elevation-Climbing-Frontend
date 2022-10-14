import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Nav />
        <Main />

      </AuthProvider>
    </div>
  );
}

export default App;
