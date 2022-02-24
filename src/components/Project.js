import { useState } from 'react';

export default function Project() {

    const [projects, setProjects] = useState ([
        { title: "My first Project", body: "lorem ipsum ...", id: 1 },
        { title: "My second Project", body: "lorem ipsum ...", id: 2 },
        { title: "My third Project", body: "lorem ipsum ...", id: 3 },
    ])

    // const handleDelete() => {

    // }

  return (
    <div className="projects">
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.body}</p>
          {/* <button onClick={() => handleDelete(project.id)}>Delete Project</button> */}
        </div>
      ))}
    </div>
  )
}
