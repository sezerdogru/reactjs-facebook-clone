import './App.css'
import Header from "./pages/Header/Header";
import Sidebar from "./pages/Sidebar/Sidebar"
import Feed from "./pages/Feed/Feed"
import Widgets from './pages/Widgets/Widgets'
import Login from './pages/Login/Login'
import { useStateValue } from './store/StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) :
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      }
    </div>
  );
}

export default App;
