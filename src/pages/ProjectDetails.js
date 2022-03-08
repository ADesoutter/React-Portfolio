import { useParams } from "react-router-dom";
import useFetch from '../components/useFetch'

export default function ProjectDetails() {
  const { id } = useParams();
  const { data: project, error } = useFetch('http://localhost:8000/projects/' + id);

  return (
    <div className="project-details">
        { error && <div>{ error }</div>  }
        { project && (
          <div>
            <h2>{ project.title }</h2>
            <p>{ project.description }</p>
          </div>
        )}
    </div>
  )
}
