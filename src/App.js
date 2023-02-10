import Sidebar from './components/sidebar/sidebar'
import Dashboard from './components/dashboard/dashboard'
import Swap from './components/swap/swap'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
      <Swap />
    </div>
  );
}

export default App;
