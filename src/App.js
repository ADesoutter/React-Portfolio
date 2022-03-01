import './App.css';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Project from "./components/Project"

function App() {
  const [projects, setProjects] = useState ([
    { title: "My first Project", body: "lorem ipsum ...", id: 1 },
    { title: "My second Project", body: "lorem ipsum ...", id: 2 },
    { title: "My third Project", body: "lorem ipsum ...", id: 3 },
])

const handleDelete = (id) => {
  const newProjects = projects.filter(project => project.id !== id);
  setProjects(newProjects);
}

  return (
    <div className="App">
     <div className="content">
       <header>
         <Navbar />
       </header>
       <h1>Alexandre Desoutter</h1>
       <Project projects={projects} title="My projects" handleDelete={handleDelete} />
     </div>
    </div>
  );
}

export default App;
