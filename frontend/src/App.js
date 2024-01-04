import Home from './Components/Home'
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div >
        <Sidebar />
      </div>
      <div style={{ margin: 'auto' }}>
        <Home />
      </div>
    </div >
    // <Dashboard />
  );
}

export default App;
