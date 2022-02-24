import './App.css';
import Navbar from "./components/Navbar";
import Project from "./components/Project"

function App() {
  return (
    <div className="App">
     <div className="content">
       <header>
         <Navbar />
       </header>
       <h1>Alexandre Desoutter</h1>
       <Project />
     </div>
    </div>
  );
}

export default App;
