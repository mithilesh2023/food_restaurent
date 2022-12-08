import './App.css';
import Layout from './components/Layout';
import { sidebarData } from './data/sidebarData';
function App() {
  return (
    <div className="App">
    <Layout sidebarData={sidebarData}/>
    </div>
  );
}

export default App;
