import './App.css'
import Header from "./pages/Header/Header";
import Sidebar from "./pages/Sidebar/Sidebar"
import Feed from "./pages/Feed/Feed"


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar /> 
        <Feed />
      </div>
    </div>
  );
}

export default App;
