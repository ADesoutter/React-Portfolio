export default function Project( { projects, title, handleDelete } ) {

  return (
    <div className="project-list">
      <h2>{ title }</h2>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.body}</p>
          <button onClick={() => handleDelete(project.id)}>Delete Project</button>
        </div>
      ))}
    </div>
  )
}
