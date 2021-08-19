import {projects} from "../data/projects"
import ProjectCard from "./ProjectCard/ProjectCard"

export default function Projects(){

  function addProjectCards(){
    return(
      projects.map((proj, key) => <ProjectCard project={proj} key={key}/>)
    )
  }
  return(
    <div className="box">
      <h2 className="is-size-2 has-text-centered title">Projects</h2>
        <div className="tile is-ancestor is-flex-wrap-wrap is-align-content-space-between">
      {addProjectCards()}
      </div>
    </div>
  )
}