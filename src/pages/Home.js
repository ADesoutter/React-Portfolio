import Project from "../components/ProjectList";
import useFetch from "../components/useFetch";

export default function Home() {
    const {data: projects, error} = useFetch("http://localhost:8000/projects")

  return (
    <div className="home">
        <h1>Alexandre Desoutter</h1>
        { error && <div>{ error }</div>}
        {projects && <Project projects={projects} title="My projects" />}
    </div>
  )
}
