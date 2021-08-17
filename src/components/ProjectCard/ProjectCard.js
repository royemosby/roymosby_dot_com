import { projects } from "../../data/projects";
import coinStacks from "../../assets/coin-stacks.jpg"

function mapTags(technologies){
  return technologies.map((tech, key)=>{
    return(
        <span className="tag is-info" key={key}>{tech}</span>
    ) 
  })
}

export default function ProjectCard({project}){
  return(
    <div className="tile is-6 p-4">

      <div className="card">
        <header className="card-header p-4">
          <p className="card-title is-size-3">
            {project.name}
          </p>
        </header>
          <div className="card-content">
            {project.description}
          </div>
        <div className="card-image p-2">
          <figure>
            <img src={project.preview_image} alt={`${project.name} preview`}/>
            <figcaption>
              <div className="tags">
                {mapTags(project.technologies)}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}