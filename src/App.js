import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex bg-[#302f30] h-[100%]">
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
