import './styles/App.scss' 
import Dashboard from './pages/Dashboard' 
import Login from './pages/Login' 
import {Routes, Route} from "react-router-dom"; 

function App() { 
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
    </div>
  );
}

export default App;
