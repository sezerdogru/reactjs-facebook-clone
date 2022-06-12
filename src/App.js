import './styles/App.scss'
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar/Sidebar"
import Feed from "./pages/Feed/Feed"
import Widgets from './pages/Widgets'
import Login from './pages/Login' 
import {Routes, Route} from "react-router-dom";


const Dashboard = () => (
  <>
    <Header />
    <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  </>
);

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
